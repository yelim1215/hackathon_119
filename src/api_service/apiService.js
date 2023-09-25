import XMLtoJSON from "./xml2json";

const API_URL = "ErmctInfoInqireService";
// 병원 응급실 실시간 가용병상정보 조회 오퍼레이션
const NO_1 = "/getEmrrmRltmUsefulSckbdInfoInqire";
// service key
const API_KEY =
  "7eTdXpvji1tanllfyqPZ%2BMsf%2BM1v1gTbz4N0dsNyFEhV17ahp%2F2n1LYqSMy129Jjc5BTFnNo8vVRYlJOgKzsBw%3D%3D";

export function CallAvail_beds() {
  var xml2json = new XMLtoJSON();
  const url = `${API_URL}${NO_1}?serviceKey=${API_KEY}&pageNo=1&numOfRows=50`;
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.text())
    .then((response) => {
      var objson = xml2json.fromStr(response); // object 형식
      var strjson = xml2json.fromStr(response, "string"); // string 형식
      // // console.log(response);
      console.log(strjson);
      // console.log(response);
    });
}
