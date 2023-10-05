import styled from "styled-components"
import { useDispatch } from "react-redux";
import * as Action from "../../redux/Action";

const ElementWrapper = styled.div`
    width: 85%;
    height: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    background-color: white;
    padding: 0.5rem;
    margin: 0.5rem 0;
    box-shadow: 3px 3px #CCCCCC;
`

const InfoWrapper = styled.div`
    width: 100%;
`

const NaviWrapper = styled.div`
    background-image: url(assets/navi.png);
    background-size: contain;
    width: 45px;
    height: 45px;
`

const HospitalName = styled.p`
    
`

const HospitalLocation = styled.p`
    color: darkgray;
    margin-top: -1rem;
`

const ListElement = () => {
    const dispatch = useDispatch();

    return (<ElementWrapper>
        <InfoWrapper onClick={() => dispatch(Action.isTabOpen())}>
            <HospitalName>순천향대학교부속구미병원</HospitalName>
            <HospitalLocation>1.7km</HospitalLocation>
        </InfoWrapper>
        <NaviWrapper />
    </ElementWrapper>)
}

export default ListElement;

