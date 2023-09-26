import React, { useEffect, useState, useMemo } from "react";
const { kakao } = window;

const KakaoMap = () => {
  // 현재위치 담는 곳
  const [location, setLocation] = useState("");
  const [map, setMap] = useState();

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
    const options = {
      center: new kakao.maps.LatLng(location.latitude, location.longitude),
      level: 7,
    };
    setMap(new kakao.maps.Map(container, options));
  };

  // 화면에 랜더링
  useEffect(() => {
    kakaoMap();
    console.log(location);
  }, [location]);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
}

export default KakaoMap;