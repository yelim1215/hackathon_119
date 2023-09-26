import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './common/Icon';
import { FirstSection, SecondSection, ThirdSection } from './Section';

const DrawerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '60vh' : '0')};
  background-color: #fff;
  transition: height 0.3s ease;
  overflow: hidden;
  z-index: 999;
  overflow-y: auto;
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

export const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <ToggleButton onClick={toggleDrawer}>
                {isOpen ? '닫기' : '열기'}
            </ToggleButton>
            <Overlay isOpen={isOpen} onClick={toggleDrawer} />
            <DrawerContainer isOpen={isOpen}>
                <DrawerContent>
                    {/* Detail 내용 */}
                    <FirstSection />
                    <SecondSection text="진료과목" style={{ borderTop: '1px solid #ccc' }} />
                    <ThirdSection text="실시간병상정보" style={{ borderTop: '1px solid #ccc' }}/>

                </DrawerContent>
                <ToggleButton onClick={toggleDrawer}>
                    {isOpen ? '닫기' : '열기'}
                </ToggleButton>
            </DrawerContainer>
        </div>
    )
}