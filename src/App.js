import styled from 'styled-components';
import './App.css';
import MapOpen from './components/map/MapOpen';


const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <h1>
        응답하라 119
      </h1>
      <MapOpen></MapOpen>
    </AppWrapper>
  );
}
export default App;
