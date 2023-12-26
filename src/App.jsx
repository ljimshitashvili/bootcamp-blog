import styled from "styled-components";
import { Header, Home, LogIn } from "./components";
import { useState } from "react";

function App() {
  const [loginWindow, setLoginWindow] = useState(false);
  const [isLogged, setLogged] = useState(false);

  const toggleWindow = () => {
    setLoginWindow(!loginWindow);
  };

  return (
    <Container loginWindow={loginWindow}>
      <div className="overlay" onClick={toggleWindow}></div>
      <LogIn loginWindow={loginWindow} setLogged={setLogged} />
      <Header
        setLoginWindow={setLoginWindow}
        loginWindow={loginWindow}
        isLogged={isLogged}
      />
      <Home setLoginWindow={setLoginWindow} loginWindow={loginWindow} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f3f2fa;
  position: relative;

  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    background-color: black;
    opacity: 0.5;
    display: ${(p) => (p.loginWindow ? "block" : "none")};
  }
`;
