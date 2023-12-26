import styled from "styled-components";
import Title from "./Title";
const Home = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 76px;
`;
