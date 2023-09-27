import styled from "styled-components"

const IconContainer = styled.div`
  display: inline-block;
  margin: 1rem;
  justify-self: center;
`

const IconImage = styled.div`
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

const Icon = ({ imageUrl, text }) => {
    return (
        <IconContainer>
            <IconImage imageUrl={imageUrl} />
            <IconText>{text}</IconText>
        </IconContainer>
    );
}

export default Icon;
