import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import * as Action from "../redux/Action";
import { IconImage } from './common/Icon';
import { FirstSection, SecondSection, ThirdSection } from './Section';
import { CallAvail_beds, CallDetails } from '../api_service/apiService';
import { useEffect, useState } from "react"
import Loading from './common/Loading';

const DrawerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 94%;
  height: ${({ isOpen }) => (isOpen ? '60vh' : '0')};
  background-color: #fff;
  transition: height 0.3s ease;
  overflow: hidden;
  z-index: 999;
  overflow-y: auto;
  margin: 0 3%;
  border-radius: 30px 30px 0 0;
`;


// Drawer 내용
const DrawerContent = styled.div`
  padding: 10px;
`;

// Drawer 외부 클릭 시 복귀
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  background-color: rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
  z-index: 998;
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`;

const ToggleButton = styled.button`
  background-image: url(assets/cancel.png);
  display: flex;
  background-color: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  justify-items: center;
`;

const CustomBtn = styled.button`
  position: fixed;
  bottom: 50%;
  left: 90%; 
  transform: translateX(-50%);
  border: none;
  background-color: transparent;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

export const Drawer = ({ flag }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    CallDetails().then((responseData) => {
      setData(responseData);
      // console.log(responseData);
      setReady(true);
    });
  }, []);
  // console.log(data);


  return (
     <div>
      <Overlay isOpen={flag} onClick={() => dispatch(Action.isTabOpen())} />
      <DrawerContainer isOpen={flag}>
      { ready ? 
        <DrawerContent>
          {/* Detail 내용 */}
          {data.length > 0 && (
            <>
              <FirstSection name={data[0].dutyname} addr={data[0].dutyAddr} tell={data[0].dutyTel1} />
              <SecondSection text="진료과목" sub={data[0].dgidIdName} style={{ borderTop: '1px solid #ccc' }} />
              <ThirdSection text="실시간병상정보 test"  style={{ borderTop: '1px solid #ccc' }} />
            </>
          )}
        </DrawerContent>
        : <Loading /> }

        <CustomBtn isOpen={flag} onClick={() => dispatch(Action.isTabOpen())}>
          <IconImage style={{ width: '30px', height: '30px' }} imageUrl="assets/cancel.png" />
        </CustomBtn>
      </DrawerContainer>
    </div> 
  ) 
}