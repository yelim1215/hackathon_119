import styled from 'styled-components';
import './App.css';
import { Logo, Search, RadiusBtn, PageToggle, List, Drawer } from './components';
import KakaoMap from './components/map/KakaoMap';

import { useSelector } from "react-redux";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #FFDDCE;
`;

function App() {
  const isMap = useSelector((state) => state.isMap);
  const isTabOpen = useSelector((state) => state.isTabOpen);

  return (
    <AppWrapper>
      <Logo />    
      {isMap ? <><Search /><RadiusBtn /><KakaoMap /></> : <><Search /><List /></>}
      <PageToggle flag={isMap}/>
      <Drawer flag={isTabOpen} />
    </AppWrapper>
  );
}
export default App;
