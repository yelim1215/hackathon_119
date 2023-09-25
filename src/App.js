import styled from 'styled-components';
import './App.css';


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
    </AppWrapper>
  );
}
export default App;
