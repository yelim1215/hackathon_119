import { useState } from "react"
import styled from 'styled-components';
import './App.css';
import MainList from './pages/MainList';
import { Logo, Search, PageToggle } from './components';


const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #FFDDCE;
`;

function App() {
  const [isMap, setIsMap] = useState(true);

  return (
    <AppWrapper>
      <Logo />
      <Search />
      {isMap ? <></> : <><MainList/></>}
      <PageToggle flag={isMap} setFlag={setIsMap}/>
    </AppWrapper>
  );
}
export default App;
