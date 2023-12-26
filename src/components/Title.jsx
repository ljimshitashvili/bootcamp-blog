import { Background } from "../assets";
import styled from "styled-components";

const Title = () => {
  return (
    <Container>
      <h1>ბლოგი</h1>
      <img src={Background} alt="Background image" />
    </Container>
  );
};

export default Title;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 64px 0;

  h1 {
    padding-left: 13px;
    color: #1a1a1f;
    font-family: FiraGO;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px; /* 112.5% */
  }
`;
