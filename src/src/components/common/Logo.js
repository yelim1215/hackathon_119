import styled from "styled-components"

const LogoImage = styled.div`
  background-image: url(assets/mainlogo.png);
  background-repeat: no-repeat;
  width: 348px;
  height: 72px;
  position: relative;
  margin: 1rem 0;
`

const Logo = () => {
    return (<>
        <LogoImage />
    </>);
}

export default Logo;