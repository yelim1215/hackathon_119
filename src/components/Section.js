import styled from "styled-components"
import Icon from "./common/Icon"
// import { CallDetails } from "../api_service/apiService"

export const Section = styled.div`
padding: 16px;
`

const IconSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 세 개의 아이콘 */

  
`

export const FirstSection = ({ name, addr, tel1, tel2}) => {

    return (<>
        <Section>
            <h2>{name}</h2>
            <p>주소 : {addr}</p>
            <p>응급실 전화 : {tel2}</p>
            <p>전화 : {tel1}</p>
        </Section>
    </>)
}

export const SecondSection = ({ mss, mss2 }) => {
    return (<>
        <Section style={{ borderTop: '1px solid #ccc' }}>
            <h3>실시간 의료진 현황</h3>
            <h4>내과</h4>
            <p>심장내과 <strong>{mss}</strong></p>
            <p>호흡기내과 <strong>{mss2}</strong></p>

            <h4>외과</h4>
            <p>흉부외과 <strong>{mss2}</strong></p>
            <p>신경외과 <strong>{mss}</strong></p>
            <p>산부인과 <strong>{mss2}</strong></p>

            <h4>소아과</h4>
            <p><strong>{mss}</strong></p>
        </Section>
    </>)
}


export const ThirdSection = ({ text }) => {
    return (<>
        <Section style={{ borderTop: '1px solid #ccc' }}>
            <h3>실시간 병상 현황</h3>
        </Section>
        <IconSection>
            <Icon imageUrl={"assets/hospital.png"} text={"응급실"} hb={"5"} />
            <Icon imageUrl={"assets/surgery.png"} text={"수술실"} hb={"3"} />
            <Icon imageUrl={"assets/quarantine.png"} text={"음압격리병상"} hb={"9"} />
            <Icon imageUrl={"assets/ICU.png"} text={"외과중환자실"} hb={"2"} />
            <Icon imageUrl={"assets/ICU.png"} text={"내과중환자실"} hb={"6"} />
            <Icon imageUrl={"assets/ICU.png"} text={"정형외과중환자실"} hb={"5"} />
            <Icon imageUrl={"assets/baby.png"} text={"응급실소아병상"} hb={"5"} />
        </IconSection>
    </>)
}