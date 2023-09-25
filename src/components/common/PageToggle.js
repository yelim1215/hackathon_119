import styled from "styled-components"

const PageSwitchWrapper = styled.div`
    width: 60%;
    height: 5%;
    display: flex;
    position: absolute;
    top: 90%;

    > .unchecked {
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

const PageSwitch = ({ flag, setFlag }) => {
    return (<PageSwitchWrapper>
        <PageBtn 
            className={flag ? 'checked' : 'unchecked'}
            onClick={() => setFlag(true)}>지도로 보기</PageBtn>
        <PageBtn 
            className={flag ? 'unchecked' : 'checked'}
            onClick={() => setFlag(false)}>목록으로 보기</PageBtn>
    </PageSwitchWrapper>);
}

export default PageSwitch;