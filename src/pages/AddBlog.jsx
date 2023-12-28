import React, { useState } from "react";
import styled from "styled-components";
import { add, arrowDown } from "../assets";
import { CatPopUp } from "../components/index";

const AddBlog = ({ category }) => {
  const [popup, setPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [authorLength, setauthorLength] = useState("");
  const [authorWords, setauthorWords] = useState("");
  const [authorGeo, setauthorGeo] = useState("");
  const [titleLength, settitleLength] = useState("");
  const [descriptionLength, setdescriptionLength] = useState("");

  const authorValidation = (e) => {
    const georgianCharactersRegex = /^[ა-ჰ\s]+$/;

    const checkWords = (string) => {
      let trimmedString = string.trim();
      let words = trimmedString.split(/\s+/);
      return words.length === 2;
    };

    if (e.target.value.length >= 4) {
      setauthorLength("valid");
    } else {
      setauthorLength("invalid");
    }

    if (checkWords(e.target.value)) {
      setauthorWords("valid");
    } else {
      setauthorWords("invalid");
    }

    if (georgianCharactersRegex.test(e.target.value)) {
      setauthorGeo("valid");
    } else {
      setauthorGeo("invalid");
    }
  };

  const titleValidation = (e) => {
    if (e.target.value.length >= 2) {
      settitleLength("valid");
    } else {
      settitleLength("invalid");
    }
  };

  const descriptionValidation = (e) => {
    if (e.target.value.length >= 2) {
      setdescriptionLength("valid");
    } else {
      setdescriptionLength("invalid");
    }
  };

  // Avoids browser refresh on submit.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Changes value of the state, which is responsible for visibility of categories pop-up.
  const togglePopUp = () => {
    setPopup(!popup);
  };

  const handleRemove = (selectedItem) => {
    setSelectedCategory(
      selectedCategory.filter((item) => item.id !== selectedItem.id)
    );
  };

  console.log();

  return (
    <Container onSubmit={handleSubmit}>
      <h1>ბლოგის დამატება</h1>

      <div className="image">
        <p>ატვირთეთ ფოტო</p>
        <input type="file" required />
      </div>

      <div className="container">
        <label className="author">
          ავტორი *
          <input
            type="text"
            id="author"
            placeholder="შეიყვანეთ ავტორი"
            onChange={authorValidation}
            required
          />
          <ul>
            <li
              style={{
                color:
                  authorLength === ""
                    ? "#85858D"
                    : authorLength === "valid"
                    ? "green"
                    : "red",
              }}
            >
              მინიმუმ 4 სიმბოლო
            </li>
            <li
              style={{
                color:
                  authorWords === ""
                    ? "#85858D"
                    : authorWords === "valid"
                    ? "green"
                    : "red",
              }}
            >
              მინიმუმ ორი სიტყვა
            </li>
            <li
              style={{
                color:
                  authorGeo === ""
                    ? "#85858D"
                    : authorGeo === "valid"
                    ? "green"
                    : "red",
              }}
            >
              მხოლოდ ქართული სიმბოლოები
            </li>
          </ul>
        </label>
        <label htmlFor="title" className="title">
          სათური *
          <input
            type="text"
            id="title"
            placeholder="შეიყვანეთ სათაური"
            onChange={titleValidation}
            required
          />
          <p
            style={{
              color:
                titleLength === ""
                  ? "#85858D"
                  : titleLength === "valid"
                  ? "green"
                  : "red",
            }}
          >
            მინიმუმ 2 სიმბოლო
          </p>
        </label>
      </div>
      <label htmlFor="description" className="description">
        აღწერა *
        <textarea
          placeholder="შეიყვნეთ აღწერა"
          onChange={descriptionValidation}
          required
        />
        <p
          style={{
            color:
              descriptionLength === ""
                ? "#85858D"
                : descriptionLength === "valid"
                ? "green"
                : "red",
          }}
        >
          მინიმუმ 2 სიმბოლო
        </p>
      </label>
      <div className="container2">
        <label className="date">
          გამოქვეყნების თარიღი *
          <input type="date" id="date" required />
        </label>
        <label htmlFor="category" className="category">
          კატეგორია *
          <div id="category" onClick={togglePopUp}>
            <div className="chosenCategories">
              {selectedCategory.map((item, index) => (
                <div
                  key={item.id}
                  className="card"
                  style={{
                    backgroundColor: `${item?.background_color}`,
                    border: selectedCategory.includes(item.id)
                      ? "2px solid #00f"
                      : "none",
                  }}
                >
                  <img
                    src={add}
                    alt="Remove Icon"
                    onClick={() => handleRemove(item)}
                  />
                  <h1 style={{ color: `${item?.text_color}` }}>
                    {item?.title}
                  </h1>
                </div>
              ))}
            </div>
            <img src={arrowDown} alt="Arrow" />
            <CatPopUp
              popup={popup}
              category={category}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          </div>
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

  .chosenCategories {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 8px;
    width: 100%;
    max-width: 239.81px;
    align-items: center;

    .card {
      padding: 8px 12px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row-reverse;
      gap: 8px;
      height: 32px;
      width: max-content;

      h1 {
        color: #fff;
        font-family: FiraGO;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        align-self: baseline;
        width: max-content;
      }

      img {
        width: 16px;
        height: 16px;

        .svg-path {
          fill: #fff;
        }
      }
    }
  }

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

  #category {
    border-radius: 12px;
    border: 1px solid #e4e3eb;
    background: #fcfcfd;
    height: 44px;
    padding: 6px 14.5px 6px 6px;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 5.5px;
    position: relative;
    cursor: pointer;
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
    line-height: 20px;
  }
`;
