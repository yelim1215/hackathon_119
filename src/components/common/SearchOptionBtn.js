import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import * as Action from "../../redux/Action";

const RadiusBtnWrapper = styled.div`
    width: 95%;
    height: 2rem;
    display: flex;
    justify-content: left;
    align-items: left;
    /* padding: 0.5rem;
    margin-top: -0.75rem;
    margin-bottom: 0.5rem;
    box-shadow: 3px 3px #CCCCCC;
    border: 1px solid black; */
    z-index: 5;
    position: absolute;
    top: 10%;

    > .unchecked {
        background-color: white;
        border: 1px solid #5F5F5F;
        color: #5F5F5F;
    }

    > .checked {
        border: 1px solid black;
        background-color: #FF976D;
    }
`

const RadiusBtnElement = styled.div`
    border: solid 1px #FF976D;
    border-radius: 1rem;
    box-shadow: 3px 3px rgba(204, 204, 204, 0.5);
    z-index: 5;
    width: 15%;
    text-align: center;
    margin-right: 0.5rem;
    font-size: 0.75rem;
    line-height: 1.75rem;
`

const RadiusNotification = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: solid 1px #000000;
    border-radius: 0.2rem;
    box-shadow: 3px 3px rgba(204, 204, 204, 0.5);
    z-index: 5;
    width: 60%;
    height: 20%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
`

const SearchOptionBtn = () => {
    const searchOption = useSelector((state) => state.searchOpt);
    const dispatch = useDispatch();

    return (<RadiusBtnWrapper>
        <RadiusBtnElement className={ searchOption.inhos ? "checked" : "unchecked"}
            onClick={() => dispatch(Action.toggleIn())}>내과</RadiusBtnElement>
        <RadiusBtnElement className={ searchOption.outhos ? "checked" : "unchecked" }
            onClick={() => dispatch(Action.toggleOut())}>외과</RadiusBtnElement>
        <RadiusBtnElement className={ searchOption.babyhos ? "checked" : "unchecked"}
            onClick={() => dispatch(Action.toggleBaby())}>소아과</RadiusBtnElement>
        {(searchOption.inhos == false && searchOption.outhos == false && searchOption.babyhos == false
            ? <RadiusNotification>환자의 상태를<br></br>선택해주세요</RadiusNotification>
            : <div></div>)}
    </RadiusBtnWrapper>);
}

export default SearchOptionBtn;