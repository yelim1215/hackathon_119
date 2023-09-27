import styled from "styled-components"

const LogoImage = styled.div`
  background-image: url(assets/mainlogo.png);
  background-repeat: no-repeat;
  background-position: center;
  width: 348px;
  height: 72px;
  position: absolute;
  margin: 1rem 0;
  z-index: 5;
`

const Logo = () => {
    return (<>
        <LogoImage />
    </>);
}

export default Logo;