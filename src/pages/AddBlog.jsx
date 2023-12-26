import React from "react";
import styled from "styled-components";

const AddBlog = () => {
  return (
    <Container>
      <h1>ბლოგის დამატება</h1>

      <div className="image">
        <p>ატვირთეთ ფოტო</p>
        <input type="file" />
      </div>

      <div className="container">
        <label className="author">
          ავტორი *
          <input type="text" id="author" placeholder="შეიყვანეთ ავტორი" />
          <ul>
            <li>მინიმუმ 4 სიმბოლო</li>
            <li>მინიმუმ ორი სიტყვა</li>
            <li>მხოლოდ ქართული სიმობოლოები</li>
          </ul>
        </label>
        <label htmlFor="title" className="title">
          სათური *
          <input type="text" id="title" placeholder="შეიყვანეთ სათაური" />
          <p>მინიმუმ 2 სიმბოლო</p>
        </label>
      </div>
      <label htmlFor="description" className="description">
        აღწერა *<textarea placeholder="შეიყვნეთ აღწერა" />
      </label>
      <div className="container2">
        <label className="date">
          გამოქვეყნების თარიღი *
          <input type="date" id="date" />
        </label>
        <label htmlFor="category" className="category">
          კატეგორია *
          <input type="text" id="category" />
        </label>
      </div>
      <label htmlFor="mail" className="mail">
        ელ-ფოსტა
        <input type="text" placeholder="Example@redberry.ge" />
      </label>
      <div className="button">
        <button type="submit">გამოქვეყნება</button>
      </div>
    </Container>
  );
};

export default AddBlog;

const Container = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding-top: 40px;

  .button {
    width: 100%;
    display: flex;
    justify-content: end;

    button {
      display: flex;
      width: 288px;
      padding: 10px 20px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      background: #e4e3eb;
      border: none;
      color: #fff;
      font-family: FiraGO;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
  }

  h1 {
    color: #1a1a1f;
    font-family: FiraGO;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    width: 100%;
    margin-bottom: 15px;
  }

  .image,
  .description {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .container,
  .container2 {
    width: 100%;
    display: flex;
    gap: 24px;

    .author,
    .title,
    .date,
    .category {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;

      ul {
        margin-left: 20px;
      }

      li,
      p {
        color: #85858d;
        font-family: FiraGO;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }

      input {
        border-radius: 12px;
        border: 1px solid #e4e3eb;
        background: #fcfcfd;
        height: 44px;
        padding: 12px 16px;
      }

      input::placeholder {
        color: #85858d;
        font-family: FiraGO;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
    }
  }
  .mail {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    input {
      border-radius: 12px;
      width: 288px;
      border: 1px solid #e4e3eb;
      background: #fcfcfd;
      height: 44px;
      padding: 12px 16px;
    }

    input::placeholder {
      color: #85858d;
      font-family: FiraGO;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }

  .description textarea {
    border-radius: 12px;
    border: 1px solid #e4e3eb;
    background: #fcfcfd;
    height: 124px;
    padding: 12px 16px;
  }

  textarea::placeholder {
    color: #85858d;
    font-family: FiraGO;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  label,
  p {
    color: #1a1a1f;
    font-family: FiraGO;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;
