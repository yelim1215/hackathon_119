import styled from "styled-components"

const IconContainer = styled.div`
  display: inline-block;
  margin: 5%;
  justify-self: center;
  border: 0.5px dashed gray;
  padding: 5%;
  border-radius: 10px;
  width: 80%;
`

export const IconImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px; 
  height: 30px;
  margin-left: 35%;
`

const IconText = styled.div`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 14px;
`

// const CustomBar = styled.progress`
//   width: -webkit-fill-available;
//   appearance: none;
//   height: 20px;
//   border: none;
//   background-color: transparent;
  
//   ::-webkit-progress-bar {
//     background-color: #E0E0E0; /* 프로그레스 바의 기본 배경색 */
//     border-radius: 10px;
//   }
  
//   ::-webkit-progress-value {
//     background-color: #FFDDCE; /* 프로그레스 바의 색상 설정 */
//     border-radius: 10px;
//   }
// `;

const BarNumDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 0px;
`

const BarNum = styled.p`
  display: inline;
  line-height: 0px;
  margin-top: 3.5px;
  font-size: xx-small;
`


const Icon = ({ imageUrl, text, hb  }) => {
    return (
        <IconContainer>
            <IconImage imageUrl={imageUrl} />
            <IconText>{text}</IconText>
            <IconText><h3>잔여병상 {hb}</h3></IconText>

            {/* <CustomBar value="70" min="0" max="100" /> */}
        </IconContainer>
    );
}

export default Icon;
