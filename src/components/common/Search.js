import styled from "styled-components"
import { searchPlaces } from "../../utils/MapSearch"
import RadiusBtn from "./RadiusBtn";

import { useSelector, useDispatch } from "react-redux";
import * as Action from "../../redux/Action";
import { useEffect } from "react";

// const { kakao } = window;
// const ps = new kakao.maps.services.Places();

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
    box-shadow: 3px 3px #CCCCCC;
    border: 1px solid black;
    z-index: 5;
    position: absolute;
    top: 15%;
`

const InputText = styled.input`
    outline: none;
    border: none;
    font-size: 16px;
`
const SearchImage = styled.div`
    background-image: url(assets/search.png);
    background-repeat: no-repeat;
    width: 22px;
    height: 22px;
`

const SearchResultWrapper = styled.div`
    position: absolute;
    top: 15%;
    z-index: 5;
    width: 90%;
    height: auto;
    background-color: white;
`

// const findSearch = (keyword, callback) => {
//     ps.keywordSearch(keyword, callback);
// }

const Search = () => {
    const keyword = useSelector((state) => state.keyword);
    const dispatch = useDispatch();

    // const placesSearchCB = (data, status) => {
    //     if (status === kakao.maps.services.Status.OK) {
    //         return data;

    //     } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    //         return false;

    //     } else if (status === kakao.maps.services.Status.ERROR) {
    //         return false;

    //     }
    // }

    return (<>
    <SearchWrapper>
        <InputText placeholder="경북 구미시 대학로 61" 
        value={keyword} onChange={(e) => dispatch(Action.inputKeyword(e.target.value))}/>
        <SearchImage onClick={() => console.log('검색')}/>
    </SearchWrapper>
        <RadiusBtn/>
        {/* <SearchResultWrapper>
        {
            keyword !== '' ? findSearch(keyword, placesSearchCB) : <></>
        }
        </SearchResultWrapper> */}
    </>);
    
}

export default Search;