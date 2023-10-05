import styled from "styled-components";
import "./App.css";
import { Logo, Search, PageToggle, List, Drawer } from "./components";
import KakaoMap from "./components/map/KakaoMap";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { CallDetails, CallAvail_beds } from "./api_service/apiService";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffddce;
`;

function App() {
  useEffect(() => {
    CallDetails();
    CallAvail_beds();
  }, []);
  const isMap = useSelector((state) => state.isMap);
  const isTabOpen = useSelector((state) => state.isTabOpen);

  return (
    <AppWrapper>
      <Logo />
      <Search />
      {isMap ? (
        <KakaoMap />
      ) : (
        <>
          <List />
        </>
      )}
      <PageToggle flag={isMap} />
      <Drawer flag={isTabOpen} />
    </AppWrapper>
  );
}
export default App;
