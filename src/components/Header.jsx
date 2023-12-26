import styled from "styled-components";
import { logo } from "../assets";
import { Link, useLocation } from "react-router-dom";

const Header = ({ setLoginWindow, loginWindow, isLogged }) => {
  const toggleWindow = () => {
    setLoginWindow(!loginWindow);
  };

  const location = useLocation().pathname;

  return (
    <Container>
      {location.includes("add-new-blog") ? (
        <div className="headerBlog">
          <img src={logo} alt="Logo" />
        </div>
      ) : (
        <div className="header">
          <img src={logo} alt="Logo" />
          {isLogged ? (
            <Link to="add-new-blog">
              <button>დაამატე ბლოგი</button>
            </Link>
          ) : (
            <button onClick={toggleWindow}>შესვლა</button>
          )}
        </div>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  .headerBlog {
    height: 80px;
    height: 80px;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #e4e3eb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 76px;
  }

  .header {
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
  }
`;
