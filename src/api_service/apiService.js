import { API_KEY, API_URL, NO_1 } from "./apiURL";
import { CallDetails } from "./apiDetails";
import { xmlToJson } from "./xml2json";
import { check, distance, sum } from "./function";

// 가용병상 및 병상 정보 api 호출
// city = 도 or 광역시, 특별시 / district = 구 / lon = 경도 / lat = 위도
export const CallAvail_beds = async (city, district, lon, lat) => {
  const avail_beds = [];
  city = "서울특별시";
  district = "";
  lat = 37.5665; // 위도
  lon = 126.978; //경도
  var queryParams =
    "&" + encodeURIComponent("STAGE1") + "=" + encodeURIComponent(city); /**/
  queryParams +=
    "&" +
    encodeURIComponent("STAGE2") +
    "=" +
    encodeURIComponent(district); /**/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("100"); /**/
  const reqURL = `${API_URL}${NO_1}?serviceKey=${API_KEY}${queryParams}`; // 데이터 개수 총 412개 (실행 속도를 위해 줄임)
  const response = await fetch(reqURL);
  const xmlString = await response.text();
  let XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
  xmlToJson(XmlNode).response.body.items.item.forEach(async (data) => {
    let item = {};
    let id = data.hpid;
    const temp = await CallDetails(id);

    item.id = id; // 기관 id
    item.dutyname = data.dutyName; //병원이름
    item.dutyTel1 = temp.dutyTel1; //대표전화
    item.dutyTel3 = temp.dutyTel3; //응급실전화 (없으면 응급실 X)
    item.dutyAddr = temp.dutyAddr; // 주소
    // item.wgs84Lon = Number(temp.wgs84Lon); // 병원 위도
    // item.wgs84Lat = Number(temp.wgs84Lat); // 병원 경도
    item.standard = distance(
      Number(temp.wgs84Lat),
      Number(temp.wgs84Lon),
      lat,
      lon
    ); // 위치계산 (거리순 정렬하기 위한 변수)
    // 병상정보 리스트
    item.hv1 = sum(data.hv29, data.hvec); // 응급실 병상정보 1
    item.hv2 = parseInt(data.hvoc, 10); // 수술실 병상정보  2
    item.hv3 = sum(data.hv29, data.hvs03); //음압 병상정보 3
    item.hv4 = sum(data.hv05, data.hvs07); // 외과 병상정보 4
    item.hv5 = sum(data.hv2, data.hvs06); // 내과 병상정보  5
    item.hv6 = check(data.hv4); //정형외과 병상정보6
    item.hv7 = check(data.hv28); // 소아 병상정보7
    item.hv8 = sum(data.hv6, data.hvs12); //신경외과
    item.hv9 = check(data.hvs16); //흉부외과
    item.hv10 = sum(data.hv34, data.hvs15); //심장내과
    avail_beds.push(item);
  });
  console.log(avail_beds);
  return avail_beds;
};
