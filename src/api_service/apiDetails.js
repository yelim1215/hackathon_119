import { API_KEY, API_URL, NO_5 } from "./apiURL";
import { xmlToJson } from "./xml2json";

//주소 및 진료 과목
export const CallDetails = async (id) => {
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
  return data;
};
