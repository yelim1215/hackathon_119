import XMLtoJSON from "./xml2json";

const API_URL = "ErmctInfoInqireService";
// 병원 응급실 실시간 가용병상정보 조회 오퍼레이션
const NO_1 = "/getEmrrmRltmUsefulSckbdInfoInqire";
// service key
const NO_5 = "/getEgytBassInfoInqire";
const API_KEY =
  "7eTdXpvji1tanllfyqPZ%2BMsf%2BM1v1gTbz4N0dsNyFEhV17ahp%2F2n1LYqSMy129Jjc5BTFnNo8vVRYlJOgKzsBw%3D%3D";

// hvs03, hv29   응급실 음압 격리 병상_기준          hv01
// hvs04, hv30   응급실 일반 격리 병상_기준          hv02
// hvs05, ?   [응급전용] 중환자실_기준      ?           hv03
// hvs10, hv33   [응급전용] 소아중환자실_기준        hv04
// hvs19, hv36   [응급전용] 입원실_기준              hv05
// hvs20, hv33   [응급전용] 소아입원실_기준          hv06
// hvs50, hv17   [응급전용] 중환자실 음압격리_기준   hv07
// hvs51, hv18   [응급전용] 중환자실 일반격리_기준   hv08 .
// hvs52, hv19   [응급전용] 입원실 음압격리_기준     hv09
// hvs53, hv21   [응급전용] 입원실 일반격리_기준     hv10

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

export function CallAvail_beds() {
  let avail_beds = [];
  let temp = [];
  var xml2json = new XMLtoJSON();
  const url = `${API_URL}${NO_1}?serviceKey=${API_KEY}&pageNo=1&numOfRows=142`; // 데이터 개수 총 412개 (실행 속도를 위해 줄임)
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.text())
    .then((response) => {
      var objson = xml2json.fromStr(response); // object 형식
      //var strjson = xml2json.fromStr(response, "string"); // string 형식
      // console.log(response);
      // console.log(strjson);
      // json 리스트를 변환하기 위해 선언한 변수

      // 필요한 데이터 => 병원이름, 응급실 병상정보, 전화번호
      // "#text"를 빼고 데이터 매칭해 avail_beds 배열에 저장
      objson.response.body.items.item.forEach((data) => {
        let result = {};
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const textValue = data[key]["#text"];
            result[key] = textValue;
          }
        }
        temp.push(result);
      });

      // hvs03, hv29   응급실 음압 격리 병상_기준          hv01
      // hvs04, hv30   응급실 일반 격리 병상_기준          hv02
      // hvs05, ?   [응급전용] 중환자실_기준      ?           hv03
      // hvs10, hv33   [응급전용] 소아중환자실_기준        hv04
      // hvs19, hv36   [응급전용] 입원실_기준              hv05
      // hvs20, hv33   [응급전용] 소아입원실_기준          hv06
      // hvs50, hv17   [응급전용] 중환자실 음압격리_기준   hv07
      // hvs51, hv18   [응급전용] 중환자실 일반격리_기준   hv08 .
      // hvs52, hv19   [응급전용] 입원실 음압격리_기준     hv09
      // hvs53, hv21   [응급전용] 입원실 일반격리_기준     hv10
      temp.forEach((data) => {
        let item = {};
        item.dutyname = data.dutyName; //기관명
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
        item.hvs27 = data.hvs27;
        avail_beds.push(item);
      });
      avail_beds.sort();
      // console.log(avail_beds);
    });
}

//주소 및 진료 과목
export function CallDetails() {
  let details = [];
  let temp = [];
  var xml2json = new XMLtoJSON();
  const url = `${API_URL}${NO_5}?serviceKey=${API_KEY}&pageNo=1&numOfRows=50`;

  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.text())
    .then((response) => {
      var objson = xml2json.fromStr(response);

      objson.response.body.items.item.forEach((data) => {
        let result = {};
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const textValue = data[key]["#text"];
            result[key] = textValue;
          }
        }
        temp.push(result);
      });

      temp.forEach((data) => {
        let item = {};
        item.dutyname = data.dutyName;
        item.dutyTel1 = data.dutyTel1;
        item.dutyTel3 = data.dutyTel3;
        item.dgidIdName = data.dgidIdName;
        item.dutyAddr = data.dutyAddr;
        item.dutyTime1s = data.dutyTime1s;
        item.dutyTime1c = data.dutyTime1c;
        item.dutyTime6s = data.dutyTime6s;
        item.dutyTime6c = data.dutyTime6c;
        item.dutyHayn = data.dutyHayn;
        item.dutyHano = data.dutyHano;
        item.dutyEryn = data.dutyEryn;
        details.push(item);
      });
    })
    .then(() => details); // 데이터를 반환하는 Promise를 반환
}