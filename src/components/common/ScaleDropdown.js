import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import * as Action from "../../redux/Action";

const ScaleDropdownSelect = styled.select`
    z-index: 5;
    position: absolute;
    top: 20%;
    right: 5%;
    height: 5%;
    width: 25%;
    
`

const ScaleDropdownOption = styled.option`

`

const ScaleDropdown = () => {
    const option = useSelector((state) => state.option);
    const dispatch = useDispatch();

    return (<ScaleDropdownSelect name="MapScale" onChange={(e) => dispatch(Action.chooseMapScale(Number(e.target.value)))} >
        <ScaleDropdownOption value={13}>전국</ScaleDropdownOption>
        <ScaleDropdownOption value={10}>광역시/도</ScaleDropdownOption>
        <ScaleDropdownOption value={8} selected>시/군/구</ScaleDropdownOption>
        <ScaleDropdownOption value={6}>읍/면/동</ScaleDropdownOption>
    </ScaleDropdownSelect>);
}

export default ScaleDropdown;