import styled from "styled-components";
import { Header } from "./components";

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f3f2fa;
`;
