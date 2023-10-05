import styled from "styled-components"

import { useSelector, useDispatch } from "react-redux";
import * as Action from "../../redux/Action";
import { useState } from "react";

const { kakao } = window;
const ps = new kakao.maps.services.Places();

const SearchWrapper = styled.div`
    width: 90%;
    height: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    background-color: white;
    padding: 0.5rem;
    margin-top: -0.75rem;
    margin-bottom: 0.5rem;
    box-shadow: 3px 3px rgba(204, 204, 204, 0.5);
    border: 1px solid black;
    z-index: 10;
    position: absolute;
    top: 15%;

    > .disappear {
        display: none;
    }

    > .appear {
        display: absolute;
    }
`

const InputText = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
    width: 90%;
`
const SearchImage = styled.div`
    background-image: url(assets/search.png);
    background-repeat: no-repeat;
    width: 22px;
    height: 22px;
`

const SearchResultWrapper = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    top: 75%;
    left: 4%;
    z-index: 10;
    width: 80%;
    height: 450px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 3px 3px rgba(204, 204, 204, 0.5);
    overflow: auto;

        > .result {
        padding: 0.5rem 0;

        > .resultName {
            font-weight: bold;
        }
    }
`


const Search = () => {
    const keyword = useSelector((state) => state.keyword);
    const isSearchTabOpen = useSelector((state) => state.isSearchTabOpen);
    const dispatch = useDispatch();

    // function returnResult()
    // 키워드 검색을 요청하는 함수입니다
    function searchPlaces(keyword) {

        if (!keyword.replace(/^\s+|\s+$/g, '')) {
            return false;
        }

        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        ps.keywordSearch(keyword, placesSearchCB);
    }

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            displayPlaces(data, pagination);

        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

            alert('검색 결과가 존재하지 않습니다.');
            return;

        } else if (status === kakao.maps.services.Status.ERROR) {

            alert('검색 결과 중 오류가 발생했습니다.');
            return;

        }
    }

    const onClickEvt = (e) => {
        console.log(e.target.parentNode);
        dispatch(Action.inputKeyword(e.target.textContent));
        dispatch(Action.isSearchTabOpen());
    }

    function displayPlaces(results, pagination) {
        var listUl = document.getElementById("SearchResultWrapper");
        var paginationWrapper = document.createElement("div");
        paginationWrapper.id = "pagination";
        paginationWrapper.style.position = "relative";
        paginationWrapper.style.display = "flex";
        paginationWrapper.style.justifyContent = "space-between";
        paginationWrapper.style.width = "25%";
        paginationWrapper.style.left = "30%";
        paginationWrapper.style.padding = "1rem 0";


        while (listUl.hasChildNodes()) {
            listUl.removeChild(listUl.firstChild);
        }

        results.map(result => {
            var listLi = document.createElement('div');
            listLi.className = "result";

            var listName = document.createElement('div');
            listName.textContent = result.place_name;
            listName.className = "resultName";

            var listAddr = document.createElement('div');
            listAddr.textContent = result.road_address_name;

            listLi.setAttribute("x", result.x);
            listLi.setAttribute("y", result.y);

            listLi.appendChild(listName);
            listLi.appendChild(listAddr);

            listLi.addEventListener('click', onClickEvt);

            listUl.appendChild(listLi);
        })


        var fragment = document.createDocumentFragment(),
        i; 
        // 기존에 추가된 페이지번호를 삭제합니다
        while (paginationWrapper.hasChildNodes()) {
            paginationWrapper.removeChild(paginationWrapper.lastChild);
        }

        for (i = 1; i <= pagination.last; i++) {
            var el = document.createElement('a');
            el.href = "#";
            el.innerHTML = i;

            if (i === pagination.current) {
                el.className = 'on';
            } else {
                el.onclick = (function (i) {
                    return function () {
                        pagination.gotoPage(i);
                    }
                })(i);
            }

            fragment.appendChild(el);
        }
        paginationWrapper.appendChild(fragment);

        listUl.appendChild(paginationWrapper);
    }

    return (<>
    <SearchWrapper>
        <InputText placeholder="경북 구미시 대학로 61" 
        value={keyword} onChange={(e) => dispatch(Action.inputKeyword(e.target.value))}/>
            <SearchImage onClick={() => {
                dispatch(Action.isSearchTabOpen());
                searchPlaces(keyword);
            }}/>
    <SearchResultWrapper id="SearchResultWrapper" className={ isSearchTabOpen ? "appear" : "disappear"} />
    </SearchWrapper>
    </>);
    
}

export default Search;