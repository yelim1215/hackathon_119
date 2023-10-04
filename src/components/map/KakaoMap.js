import React, { useEffect, useState, useMemo } from "react";
import pinImage from './pin.png';
import pinRedImage from './pin_red.png';
import pinYellowImage from './pin_yellow.png';
import pinGreenImage from './pin_green.png';
const { kakao } = window;

const KakaoMap = () => {
  // 현재위치 담는 곳
  const [location, setLocation] = useState("");
  const [map, setMap] = useState();
  const [marker, setMarker] = useState(null); // 마커 상태 추가

  // 현재위치 세부조정
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // 현재 위치 가져오기
  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    function success(position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setLocation({
        latitude: 33.450701,
        longitude: 126.570667,
      });
      console.log("위치 받기 실패");
    }
  }, [navigator.geolocation.getCurrentPosition]);

  // 카카오지도 API 가져오기
  const kakaoMap = () => {
    const container = document.getElementById("map");
    const mapOptions = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 7,
    //   draggable: true, // 드래그 활성화
    //   disableDoubleClick: false, // 더블 클릭 활성화
    //   disableTouchZoom: false, // 터치 제스처 활성화
    };
    const mapInstance = new kakao.maps.Map(container, mapOptions);

    // const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // 마커이미지의 주소
    const imageSrc = pinGreenImage;
    const imageSize = new kakao.maps.Size(35, 35); // 마커이미지의 크기
    const imageOption = {offset: new kakao.maps.Point(35/2, 35)}; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    // 마커 생성
    const markerOptions = [
        {
            position: new kakao.maps.LatLng(36.103156, 128.382649),
            text: "순천향대학교부속구미병원",
        },
        {
            position: new kakao.maps.LatLng(36.114986, 128.340695),
            text: "치의과대학교 구미차병원",
            image: markerImage,
        },
    ];
    
    // const markerInstance = new kakao.maps.Marker(markerOptions);
    const markers = markerOptions.map((option) => {
      const marker = new kakao.maps.Marker(option);

      // 마커 클릭 이벤트 등록
      kakao.maps.event.addListener(marker, 'click', function() {
          console.log('마커가 클릭되었습니다.');
          // 상세창으로 연결시키기
      });
  
      return marker;
    });

    // 마커를 지도에 추가
    // markers.setMap(mapInstance);
    markers.forEach((marker) => {
        marker.setMap(mapInstance);
    });

    // 마커 상태 업데이트
    setMarker(markers);

    // 지도 상태 업데이트
    setMap(mapInstance);
  };

  // 화면에 랜더링
  useEffect(() => {
    kakaoMap();
    console.log(location);
  }, [location]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
    </>
  );
}

export default KakaoMap;