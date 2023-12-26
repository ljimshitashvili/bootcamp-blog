import styled from "styled-components";
import myApi from "../axios/myApi";
import { useEffect } from "react";

const BlogList = () => {
  useEffect(() => {
    const logInUser = async () => {
      try {
        const response = await myApi.get(`/blogs`);
        const data = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    logInUser();
  }, []);

  return <Container></Container>;
};

export default BlogList;

const Container = styled.div``;
