import styled from "styled-components";
import { Title, Filter, BlogList } from "../components";
const Home = () => {
  return (
    <Container>
      <Title />
      <Filter />
      <BlogList />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 76px;
`;
