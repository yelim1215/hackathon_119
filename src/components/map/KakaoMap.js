import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components"
import pinRedImage from './pin_red.png';
import pinGreenImage from './pin_green.png';

// redux
import { useSelector, useDispatch } from "react-redux";
import * as Action from "../../redux/Action";

const Gps = styled.div`
  background-image: url(assets/current.png);
  background-repeat: no-repeat;
  background-position: center;
  background-color: #FFFFFF;
  width: 15px;
  height: 15px;
  position: absolute;
  margin: 1rem 0;
  z-index: 5;
  top: 25%;
  left: 85%;
  padding: 10px;
  border-radius: 0.3rem;
  border: solid 0.5px #6F6F6F;
`

const { kakao } = window;

const KakaoMap = () => {
  // 현재위치 담는 곳
  // const [location, setLocation] = useState("");
  const [map, setMap] = useState();
  const [marker, setMarker] = useState(null); // 마커 상태 추가

  // redux
  const dispatch = useDispatch();
  const option = useSelector(state => state.option);
  const locCenter = useSelector(state => state.locCenter);
  const currLoc = useSelector(state => state.currLoc);

  // 현재위치 세부조정
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  // 현재위치 가져오기
  useMemo(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    }

    function success(position) {
      dispatch(Action.currLoc(position.coords.latitude, position.coords.longitude));
      dispatch(Action.locCenter(position.coords.latitude, position.coords.longitude));
      // setLocation({
      //   latitude: position.coords.latitude,
      //   longitude: position.coords.longitude,
      // });
    }

    function error() {
      dispatch(Action.currLoc(33.450701, 126.570667));
      dispatch(Action.locCenter(33.450701, 126.570667));
      // setLocation({
      //   latitude: 33.450701,
      //   longitude: 126.570667,
      // });
      console.log("위치 받기 실패");
    }
  }, [navigator.geolocation.getCurrentPosition]);

  
  // 카카오지도 API 가져오기
  const kakaoMap = () => {
    const container = document.getElementById("map");
    const mapOptions = {
      center: new kakao.maps.LatLng(locCenter.lat, locCenter.lon),
      level: option,
    //   draggable: true, // 드래그 활성화
    //   disableDoubleClick: false, // 더블 클릭 활성화
    //   disableTouchZoom: false, // 터치 제스처 활성화
    };
    const mapInstance = new kakao.maps.Map(container, mapOptions);

    const imageSrcGreen = pinGreenImage;
    const imageSizeGreen = new kakao.maps.Size(35, 35); // 마커이미지의 크기
    const imageOptionGreen = {offset: new kakao.maps.Point(35/2, 35)}; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
    const markerImageGreen = new kakao.maps.MarkerImage(imageSrcGreen, imageSizeGreen, imageOptionGreen);

    const imageSrcRed = pinRedImage;
    const imageSizeRed = new kakao.maps.Size(35, 35); // 마커이미지의 크기
    const imageOptionRed = {offset: new kakao.maps.Point(35/2, 35)}; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
    const markerImageRed = new kakao.maps.MarkerImage(imageSrcRed, imageSizeRed, imageOptionRed);

    // 마커 생성
    const markerOptions = [
        {
            position: new kakao.maps.LatLng(37.540651, 127.071973),
            text: "건국대학교병원",
            image: markerImageRed,
        },
        {
            position: new kakao.maps.LatLng(37.535496, 127.083515),
            text: "혜민병원",
            image: markerImageGreen,
        },
    ];
    
    // const markerInstance = new kakao.maps.Marker(markerOptions);
    const markers = markerOptions.map((option) => {
      const marker = new kakao.maps.Marker(option);

      // 마커 클릭 이벤트 등록
      kakao.maps.event.addListener(marker, 'click', function() {
          console.log('마커가 클릭되었습니다.');
          // 상세창으로 연결
          dispatch(Action.isTabOpen());
      });

      var iwContent = `
        <div style="
          width: auto;
          padding: 5px;
          background-color: #FFFFFF;
          border: 1px solid #898989;
          border-radius: 3px;
          text-align: center;
          font-size: x-small;
          box-shadow: 1px 1px 5px #666;
          margin-bottom: 95px;
        ">
          ${option.text}
        </div>
      `;

      // 커스텀 오버레이 생성
      var customOverlay = new kakao.maps.CustomOverlay({
        position: option.position,
        content: iwContent,
      });

      // 마커 표시
      marker.setMap(mapInstance);
      // 커스텀 오버레이 표시
      customOverlay.setMap(mapInstance);
  
      return { marker, customOverlay };
    });

    // 지도에 표시할 원 생성
    const circle = new kakao.maps.Circle({
      center: new kakao.maps.LatLng(locCenter.lat, locCenter.lon),  // 원의 중심좌표
      radius: 10000, // 미터 단위의 원 반지름
      strokeWeight: 1, // 선의 두께 
      strokeColor: '#3C4FFF', // 선의 색깔
      strokeOpacity: 0.7, // 선의 불투명도 1~0 사이의 값. 0에 가까울수록 투명
      strokeStyle: 'dashed', // 선의 스타일
      fillColor: '#CFE7FF', // 채우기 색깔
      fillOpacity: 0.3  // 채우기 불투명도 
    }); 

    // 지도에 원 표시
    circle.setMap(mapInstance); 

    // 마커 상태 업데이트
    setMarker(markers.map((item) => item.marker));

    // 지도 상태 업데이트
    setMap(mapInstance);
  };

  // 화면에 랜더링
  useEffect(() => {
    kakaoMap();
  }, [locCenter, option]);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
      <Gps onClick={() => { dispatch(Action.locCenter(currLoc.lat, currLoc.lon))}}/>
    </>
  );
}

export default KakaoMap;