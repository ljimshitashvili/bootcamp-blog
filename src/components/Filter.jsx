import { useEffect, useState } from "react";
import styled from "styled-components";
import myApi from "../axios/myApi";
import { Background } from "../assets";

const Filter = ({ category, setCategory }) => {
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await myApi.get("/categories");
        const data = response.data.data;
        setCategory(data);
        console.log(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Container>
      {category.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: `${item?.background_color}` }}
        >
          <h1 style={{ color: `${item?.text_color}` }}>{item?.title}</h1>
        </div>
      ))}
    </Container>
  );
};

export default Filter;

const Container = styled.div`
  margin-bottom: 64px;
  display: flex;
  gap: 24px;
  height: 50px; //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  max-width: 684px;
  gap: 24px;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: auto;

  div {
    padding: 8px 16px;
    border-radius: 30px;
    height: 32px;
  }

  h1 {
    width: max-content;
    font-family: FiraGO;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
`;
