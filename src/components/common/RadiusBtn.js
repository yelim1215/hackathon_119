import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import * as Action from "../../redux/Action";

const RadiusBtnWrapper = styled.div`
    width: 95%;
    height: 4%;
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
    top: 20%;

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
    box-shadow: 3px 3px #CCCCCC;
    z-index: 5;
    width: 20%;
    text-align: center;
    margin-right: 0.5rem;
    /* vertical-align: middle; */
`

const RadiusBtn = () => {
    const option = useSelector((state) => state.option);
    const dispatch = useDispatch();

    return (<RadiusBtnWrapper>
        <RadiusBtnElement className={ option === 10 ? "checked" : "unchecked" }
            onClick={() => dispatch(Action.chooseMapScale(10))}>시/도</RadiusBtnElement>
        <RadiusBtnElement className={option === 8 ? "checked" : "unchecked"}
            onClick={() => dispatch(Action.chooseMapScale(8))}>시/군/구</RadiusBtnElement>
        <RadiusBtnElement className={option === 6 ? "checked" : "unchecked"}
            onClick={() => dispatch(Action.chooseMapScale(6))}>읍/면/동</RadiusBtnElement>
    </RadiusBtnWrapper>);
}

export default RadiusBtn;