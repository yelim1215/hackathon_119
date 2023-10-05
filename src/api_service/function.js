// 2개 데이터 합치기
export function sum(a, b) {
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
// string to Int
export function check(a) {
  let num = 0;
  if (a !== undefined) {
    num = parseInt(a, 10);
    return num;
  } else return num;
}
// 각도를 라디안으로 변환하는 함수
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export function distance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 지구 반지름 (단위: km)
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // 두 지점 간의 거리 (단위: km)
  return distance;
}
