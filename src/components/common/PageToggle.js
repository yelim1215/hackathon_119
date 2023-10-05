import styled from "styled-components"

import { useDispatch } from "react-redux";
import * as Action from "../../redux/Action";

const PageSwitchWrapper = styled.div`
    width: 60%;
    height: 5%;
    display: flex;
    position: absolute;
    top: 90%;
    box-shadow: 3px 3px #CCCCCC;
    z-index: 5;

    > .unchecked {
        color: #5F5F5F;
        background-color: #B8B8B8;
    }

    > .checked {
        background-color: #FF976D;
    }
`

const PageBtn = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`

const MapViewBtn = styled.div`

`

const ListViewBtn = styled.div`

`

const PageSwitch = ({ flag }) => {
    const dispatch = useDispatch();


    return (<PageSwitchWrapper>
        <PageBtn 
            className={flag ? 'checked' : 'unchecked'}
            onClick={() => dispatch(Action.isMap())}>지도로 보기</PageBtn>
        <PageBtn 
            className={flag ? 'unchecked' : 'checked'}
            onClick={() => dispatch(Action.isMap())}>목록으로 보기</PageBtn>
    </PageSwitchWrapper>);
}

export default PageSwitch;