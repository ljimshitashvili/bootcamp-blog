import styled from "styled-components";
import { add, error, success } from "../assets";
import myApi from "../axios/myApi";
import { useState, useEffect } from "react";

const LogIn = ({ loginWindow, setLoginWindow, setLogged, isLogged }) => {
  const [wrongMail, setWrongMail] = useState(false);
  const toggleWindow = () => {
    setLoginWindow(!loginWindow);
  };

  useEffect(() => {
    sessionStorage.setItem("isLogged", isLogged);
  }, [isLogged]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    console.log("Email", email);

    try {
      const response = await myApi.post("/login", { email: email });
      setLogged(true);
      setWrongMail(false);
    } catch (error) {
      console.log("Here's error" + error);
      setLogged(false);
      setWrongMail(true);
    }
  };

  return (
    <Container
      loginWindow={loginWindow}
      wrongMail={wrongMail}
      isLogged={isLogged}
      onSubmit={handleSubmit}
    >
      <img src={add} alt="close" className="svg" onClick={toggleWindow} />
      <h1>შესვლა</h1>
      <label htmlFor="email">
        ელ-ფოსტა
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Example@redberry.ge"
        />
        <div className="errorMessage">
          <img src={error} alt="Error Icon" />
          <p>ელ-ფოსტა არ მოიძებნა</p>
        </div>
      </label>
      <button type="submit">შესვლა</button>
      <div className="successWindow">
        <img src={success} alt="Successfull LogIn Icon" />
        <h1>წარმატებული ავტორიზაცია</h1>
        <button onClick={toggleWindow}>კარგი</button>
      </div>
    </Container>
  );
};

export default LogIn;

const Container = styled.form`
  width: 480px;
  border-radius: 12px;
  background-color: #fff;
  padding: 40px 24px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: ${(p) => (p.loginWindow ? "flex" : "none")};
  gap: 24px;
  flex-direction: column;
  align-items: center;

  .successWindow {
    background-color: #fff;
    width: 90%;
    height: 90%;
    border-radius: 12px;
    position: absolute;
    left: 5%;
    top: 5%;
    display: ${(p) => (p.isLogged ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-bottom: 16px;
    }

    h1 {
      color: #1a1a1f;
      text-align: center;
      font-family: FiraGO;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 28px;
      margin-bottom: 48px;
    }

    button {
      display: flex;
      width: 432px;
      padding: 10px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      background: #5d37f3;
      color: #fff;
      font-family: FiraGO;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
  }

  .errorMessage {
    display: ${(p) => (p.wrongMail ? "flex" : "none")};
    gap: 8px;
    align-items: center;

    p {
      color: #ea1919;
      font-family: FiraGO;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .svg {
    position: absolute;
    right: 20px;
    cursor: pointer;
    top: 20px;
    z-index: 2;
  }

  h1 {
    color: #1a1a1f;
    text-align: center;
    font-family: FiraGO;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #1a1a1f;
    font-family: FiraGO;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    width: 100%;

    input {
      width: 100%;
      height: 44px;
      border-radius: 12px;
      border: 1.5px solid #5d37f3;
      background-color: #f7f7ff;
      padding: 12px 16px;
    }

    input::placeholder {
      color: #85858d;
      font-family: FiraGO;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
  }

  button {
    border-radius: 8px;
    background: #5d37f3;
    width: 100%;
    height: 40px;
    border: none;
    color: #fff;
    font-family: FiraGO;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
  }
`;
