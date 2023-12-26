import styled from "styled-components";
import { Header, Home } from "./components";

function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #f3f2fa;
`;
