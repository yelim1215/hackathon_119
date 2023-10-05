import styled from "styled-components"
import Icon from "./common/Icon"
// import { CallDetails } from "../api_service/apiService"
import { useEffect, useState } from "react"

export const Section = styled.div`
padding: 16px;
`

const IconSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 세 개의 아이콘 */

  
`

export const FirstSection = ({ name, addr, tell}) => {

    return (<>
        <Section>
            <h2>{name}</h2>
            <p>주소 : {addr}</p>
            <p>전화 : {tell}</p>
            {/* <p>운영시간 : {data[0].}</p> */}
        </Section>
    </>)
}

export const SecondSection = ({ text, sub }) => {
    return (<>
        <Section style={{ borderTop: '1px solid #ccc' }}>
            <h3>{text}</h3>
            <p>{sub}</p>
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