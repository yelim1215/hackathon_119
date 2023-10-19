import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import * as Action from "../redux/Action";
import { IconImage } from './common/Icon';
import { FirstSection, SecondSection, ThirdSection } from './Section';
import { CallAvail_beds } from '../api_service/apiService';
import { useEffect, useState } from "react"
import Loading from './common/Loading';
import { sigunguSort } from '../data/dummy';

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

export const Drawer = ({ flag, idx }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [ready, setReady] = useState(false);

  idx = 0;

  // useEffect(() => {
  //   CallAvail_beds().then((responseData) => {
  //     setData(responseData);
  //     setReady(true);

  //   });
  // }, []);
  // console.log(data);

  useEffect(() => {
    setData(sigunguSort);
    setReady(true);
  }, []);
  console.log(data);

  return (
    <div>
      <Overlay isOpen={flag} onClick={() => dispatch(Action.isTabOpen())} />
      <DrawerContainer isOpen={flag}>
        {ready ? (
          <DrawerContent>
            {/* Detail 내용 */}
            {data.length > 0 && (
              <>
                <FirstSection name={data[idx].dutyname} addr={data[idx].dutyAddr} tel1={data[idx].dutyTel1} tel2={data[idx].dutyTel3} />
                <SecondSection mss="O" mss2="X" style={{ borderTop: '1px solid #ccc' }} />
                <ThirdSection a1={data[idx].hv1} a2={data[idx].hv2} a3={data[idx].hv3} a4={data[idx].hv4} a5={data[idx].hv5} a6={data[idx].hv6} a7={data[idx].hv7} style={{ borderTop: '1px solid #ccc' }} />
              </>
            )}
          </DrawerContent>
        ) : (
          <Loading />
        )}

        <CustomBtn isOpen={flag} onClick={() => dispatch(Action.isTabOpen())}>
          <IconImage style={{ width: '30px', height: '30px' }} imageUrl="assets/cancel.png" />
        </CustomBtn>
      </DrawerContainer>
    </div>
  )
};