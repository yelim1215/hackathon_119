const { kakao } = window;

// 키워드 검색을 요청하는 함수입니다
export function searchPlaces(keyword) {
    // console.log('함수호출', keyword);
    var ps = new kakao.maps.services.Places();

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    ps.keywordSearch(keyword, placesSearchCB);
}

// 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
function placesSearchCB(data, status, pagination) {
    // console.log('함수2호출', data);
    if (status === kakao.maps.services.Status.OK) {
        return data;

    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

        // alert('검색 결과가 존재하지 않습니다.');
        return false;

    } else if (status === kakao.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return false;

    }
}
