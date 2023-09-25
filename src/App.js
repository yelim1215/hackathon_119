import logo from "./logo.svg";
import "./App.css";
import { CallAvail_beds } from "./api_service/apiService";
import { useEffect } from "react";

function App() {
  //api 호출 확인
  useEffect(() => {
    CallAvail_beds();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload. hoon
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
