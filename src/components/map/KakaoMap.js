import React, { useEffect, useState, useMemo } from "react";
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
    };
    const mapInstance = new kakao.maps.Map(container, mapOptions);

    // 마커 생성
    const markerOptions = [
        {
            position: new kakao.maps.LatLng(36.103156, 128.382649),
            text: "순천향대학교부속구미병원",
        },
        {
            position: new kakao.maps.LatLng(36.114986, 128.340695),
            text: "치의과대학교 구미차병원",
        },
    ];
    
    // const markerInstance = new kakao.maps.Marker(markerOptions);
    const markers = markerOptions.map((option) => {
        return new kakao.maps.Marker(option);
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
      <div id="map" style={{ width: "100%", height: "70vh" }}></div>
    </>
  );
}

export default KakaoMap;