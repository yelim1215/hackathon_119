import dist from "styled-components";
import { xmlToJson } from "./xml2json";

const API_URL = "ErmctInfoInqireService";
// 병원 응급실 실시간 가용병상정보 조회 오퍼레이션
const NO_1 = "/getEmrrmRltmUsefulSckbdInfoInqire";
// service key
const NO_5 = "/getEgytBassInfoInqire";
const API_KEY =
  "7eTdXpvji1tanllfyqPZ%2BMsf%2BM1v1gTbz4N0dsNyFEhV17ahp%2F2n1LYqSMy129Jjc5BTFnNo8vVRYlJOgKzsBw%3D%3D";

function sum(a, b) {
  let num = 0;
  if (a !== undefined && b !== undefined) {
    num = parseInt(a, 10) + parseInt(b, 10);
  }
  // hvs03만 있는 경우
  else if (a !== undefined) {
    num = parseInt(a, 10);
  }
  // hv29만 있는 경우
  else if (b !== undefined) {
    num = parseInt(b, 10);
  }
  // hvs03와 hv29 데이터가 모두 없는 경우, hv01을 0으로 설정할 수도 있습니다.
  else {
    num = 0;
  }
  return num;
}
function check(a) {
  let num = 0;
  if (a !== undefined) {
    num = parseInt(a, 10);
    return num;
  } else return num;
}

export const CallAvail_beds = async (id) => {
  let avail_beds = [];
  let city = "경상북도";
  let district = "구미시";
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
    console.log(temp);
    item.dutyname = data.dutyName;
    item.dutyTel1 = temp.dutyTel1; //대표전화
    item.dutyTel3 = temp.dutyTel3; //응급실전화 (없으면 응급실 X)
    item.dgidIdName = temp.dgidIdName; //  진료과목
    item.dutyAddr = temp.dutyAddr; // 주소
    item.dutyTime1s = temp.dutyTime1s; // 평일 오픈시간
    item.dutyTime1c = temp.dutyTime1c; // 평일 마감시간
    item.dutyTime6s = temp.dutyTime6s; // 토욜 오픈시간
    item.dutyTime6c = temp.dutyTime6c; // 토욜 마감시간
    item.dutyTime7s = temp.dutyTime7s; // 일욜 오픈시간 => 없을 수도 있음 (없으면 안염)
    item.dutyTime7c = temp.dutyTime7c; // 일욜 마감시간 => 없을 수도 있음
    // item.dutyHayn = temp.dutyHayn; //입원실 가용여부
    // item.dutyHano = temp.dutyHano; //병상수
    // item.dutyEryn = temp.dutyEryn; // 응급실 운영여부 => 1 운영 , 2 운영X
    item.wgs84Lon = Number(temp.wgs84Lon); // 병원 경도
    item.wgs84Lat = Number(temp.wgs84Lat); // 병원 위도
    item.hv01 = sum(data.hvs03, data.hv29); //응급실 음압 격리 병상
    item.hv02 = sum(data.hvs04, data.hv30); //응급실 일반 격리 병상
    item.hv03 = check(data.hvs05); // [응급전용] 중환자실_기준
    item.hv04 = sum(data.hvs10, data.hv33); //[응급전용] 소아중환자실
    item.hv05 = sum(data.hvs19, data.hv36); //[응급전용] 입원실
    item.hv06 = sum(data.hvs20, data.hv33); //[응급전용] 소아입원실
    item.hv07 = sum(data.hvs50, data.hv17); //[응급전용] 중환자실 음압격리
    item.hv08 = sum(data.hvs51, data.hv18); //[응급전용] 중환자실 일반격리
    item.hv09 = sum(data.hvs52, data.hv19); //[응급전용] 입원실 음압격리
    item.hv10 = sum(data.hvs53, data.hv21); //[응급전용] 일반격리_기준
    item.hv11 = data.hvs27; // ct 기준
    item.hv12 = data.hvs28; // mri 기준
    avail_beds.push(item);
  });
  console.log(avail_beds);
  return avail_beds;
};

//주소 및 진료 과목
const CallDetails = async (id) => {
  let item = [];
  var queryParams =
    "&" + encodeURIComponent("HPID") + "=" + encodeURIComponent(id); /**/
  queryParams +=
    "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("numOfRows") +
    "=" +
    encodeURIComponent("100"); /**/
  const reqURL = `${API_URL}${NO_5}?serviceKey=${API_KEY}${queryParams}`; // 데이터 개수 총 412개 (실행 속도를 위해 줄임)

  const response = await fetch(reqURL);
  const xmlString = await response.text();

  let XmlNode = new DOMParser().parseFromString(xmlString, "text/xml");
  let data = xmlToJson(XmlNode).response.body.items.item;
  item.dutyname = data.dutyName; //기관명
  item.dutyTel1 = data.dutyTel1; //대표전화
  item.dutyTel3 = data.dutyTel3; //응급실전화 (없으면 응급실 X)
  item.dgidIdName = data.dgidIdName; //  진료과목
  item.dutyAddr = data.dutyAddr; // 주소
  item.dutyTime1s = data.dutyTime1s; // 평일 오픈시간
  item.dutyTime1c = data.dutyTime1c; // 평일 마감시간
  item.dutyTime6s = data.dutyTime6s; // 토욜 오픈시간
  item.dutyTime6c = data.dutyTime6c; // 토욜 마감시간
  item.dutyHayn = data.dutyHayn; //입원실 가용여부
  item.dutyHano = data.dutyHano; //병상수
  item.dutyEryn = data.dutyEryn; // 응급실 운영여부 => 1 운영 , 2 운영X

  // console.log(data);
  return data;
};