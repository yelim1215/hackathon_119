import styled from "styled-components"
import React, { useEffect } from "react";

const MapOpenWrapper = styled.div`

`

const { kakao } = window;

const KakaoMap = () => {
    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
            37.62197524055062,
            127.16017523675508
        )

        // 마커를 생성
        let marker = new kakao.maps.Marker({
        position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    }, [])

    return (
        <MapOpenWrapper>
            <div id="map" style={{width:"500px", height:"400px"}}></div>
        </MapOpenWrapper>
    );
}

export default KakaoMap;