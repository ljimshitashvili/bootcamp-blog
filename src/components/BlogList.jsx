import styled from "styled-components";
import myApi from "../axios/myApi";
import { useEffect } from "react";

const BlogList = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await myApi.get(`/categories`);
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <Container></Container>;
};

export default BlogList;

const Container = styled.div``;
