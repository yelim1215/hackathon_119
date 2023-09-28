import styled from "styled-components"

const IconContainer = styled.div`
  display: inline-block;
  margin: 1rem;
  justify-self: center;
`

export const IconImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain; /* 이미지를 fit하게 설정 */
  width: 72px; 
  height: 72px;
`

const IconText = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 14px;
`

const CustomBar = styled.progress`
width: -webkit-fill-available;
`

const Icon = ({ imageUrl, text }) => {
    return (
        <IconContainer>
            <IconImage imageUrl={imageUrl} />
            <IconText>{text}</IconText>
            <CustomBar value="50" min="0" max="100" />
        </IconContainer>
    );
}

export default Icon;
