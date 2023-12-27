import styled from "styled-components";
import { Header, Home, AddBlog } from "./components";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [loginWindow, setLoginWindow] = useState(false);
  const [isLogged, setLogged] = useState(
    sessionStorage.getItem("isLogged") === "true"
  );
  const [category, setCategory] = useState([]);

  const toggleWindow = () => {
    setLoginWindow(!loginWindow);
  };

  return (
    <Router>
      <Container loginWindow={loginWindow}>
        <div className="overlay" onClick={toggleWindow}></div>
        <Header
          setLoginWindow={setLoginWindow}
          loginWindow={loginWindow}
          isLogged={isLogged}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setLoginWindow={setLoginWindow}
                loginWindow={loginWindow}
                setLogged={setLogged}
                isLogged={isLogged}
                category={category}
                setCategory={setCategory}
              />
            }
          />
          <Route
            path="add-new-blog"
            element={<AddBlog category={category} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f3f2fa;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

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
