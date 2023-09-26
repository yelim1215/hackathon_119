import styled from "styled-components"
import Icon from "./common/Icon"

export const Section = styled.div`
padding: 16px;
`

const IconSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 세 개의 아이콘 */
`

const Data = [
    { hostpitalName: "순천향대학교부속대학병원" },
    { address: "경북 구미시 1공단로 179 구미순천향병원" },
    { call: "054-468-9114" },
    { time: "09:00~17:00 " },
    { subject: "내과 외과 정형외과 가정의학과 산부인과 소아청소년과 성형외과 신경과 비뇨의학과 피부과 이비인후과 안과 마취통증의학과 병리과" },
]

export const FirstSection = () => {
    return (<>
        <Section>
            <h2>{Data[0].hostpitalName}</h2>
            <p>주소 : {Data[1].address}</p>
            <p>전화 : {Data[2].call}</p>
            <p>운영시간 : {Data[3].time}</p>
        </Section>
    </>)
}

export const SecondSection = ({ text }) => {
    return (<>
        <Section style={{ borderTop: '1px solid #ccc' }}>
            <h3>{text}</h3>
            <p>{Data[4].subject}</p>
        </Section>
    </>)
}

export const ThirdSection = ({ text }) => {
    return (<>
        <Section style={{ borderTop: '1px solid #ccc' }}>
            <h3>{text}</h3>
        </Section>
        <IconSection>
            <Icon imageUrl={"assets/hospital.png"} text={"응급실일반병상"} />
            <Icon imageUrl={"assets/baby.png"} text={"응급실소아병상"} />
            <Icon imageUrl={"assets/quarantine.png"} text={"응급실격리병상"} />
            <Icon imageUrl={"assets/surgery.png"} text={"수술실"} />
            <Icon imageUrl={"assets/ICU.png"} text={"중환자실"} />
            <Icon imageUrl={"assets/CT.png"} text={"CT"} />
        </IconSection>
    </>)
}