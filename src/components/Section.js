import styled from "styled-components"
import Icon from "./common/Icon"
// import { CallDetails } from "../api_service/apiService"

export const Section = styled.div`
padding: 16px;
`

const IconSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
`

const CustomH4 = styled.h4`
  margin: 1%;
  text-align-last: center;
  border-bottom: 1px solid #ccc;
`

const SectionBox = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`

const Box2 = styled.div`
  display: inline;
`

export const FirstSection = ({ name, addr, tel1, tel2 }) => {

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
            <h3>
                실시간 의료진 현황
                <span style={{ fontSize: "x-small", fontWeight: "350", margin: "2px" }}>
                    * 응급도가 높은 특정 과만 표시
                </span>
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "10px", gridRowGap: "10px" }}>
                <SectionBox>
                    <CustomH4>내과</CustomH4>
                    <Box2>
                    <p>심장내과 <strong>{mss}</strong></p>
                    </Box2>
                    <Box2>
                    <p>호흡기내과 <strong>{mss2}</strong></p>
                    </Box2>
                </SectionBox>
                <SectionBox>
                    <CustomH4>외과</CustomH4>
                    <p>흉부외과 <strong>{mss2}</strong></p>
                    <p>신경외과 <strong>{mss}</strong></p>
                </SectionBox>
                <SectionBox>
                    <CustomH4>소아과</CustomH4>
                    <p>소아과 <strong>{mss}</strong></p>
                </SectionBox>
            </div>

        </Section>
    </>)
}


export const ThirdSection = ({ text }) => {
    return (<>
        <Section style={{ borderTop: '1px solid #ccc', borderBottom: '1px' }}>
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