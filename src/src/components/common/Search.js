import styled from "styled-components"

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

const Search = () => {
    return (<SearchWrapper>
        <InputText placeholder="경북 구미시 대학로 61" />
        <SearchImage/>
    </SearchWrapper>);
}

export default Search;