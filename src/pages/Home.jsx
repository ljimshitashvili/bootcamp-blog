import styled from "styled-components";
import { Title, Filter, BlogList, LogIn } from "../components";
const Home = ({
  setLoginWindow,
  loginWindow,
  setLogged,
  isLogged,
  category,
  setCategory,
}) => {
  return (
    <Container>
      <Title />
      <Filter category={category} setCategory={setCategory} />
      <BlogList />
      <LogIn
        loginWindow={loginWindow}
        setLoginWindow={setLoginWindow}
        setLogged={setLogged}
        isLogged={isLogged}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  padding: 0 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
