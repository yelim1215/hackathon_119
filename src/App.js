import styled from 'styled-components';
import './App.css';
import MainList from './pages/MainList';
import { Logo, Search } from './components';


const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #FFDDCE;
`;

function App() {
  return (
    <AppWrapper>
      <Logo />
      <Search />
      {/* <MainList /> */}
    </AppWrapper>
  );
}
export default App;
