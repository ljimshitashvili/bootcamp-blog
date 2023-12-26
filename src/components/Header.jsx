import styled from "styled-components";
import { logo } from "../assets";

const Header = ({ setLoginWindow, loginWindow, isLogged }) => {
  const toggleWindow = () => {
    setLoginWindow(!loginWindow);
  };

  return (
    <Container>
      <img src={logo} alt="Logo" />
      {isLogged ? (
        <button>დაამატე ბლოგი</button>
      ) : (
        <button onClick={toggleWindow}>შესვლა</button>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e4e3eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 76px;

  button {
    border-radius: 8px;
    background: #5d37f3;
    padding: 10px 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-family: FiraGO;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;
