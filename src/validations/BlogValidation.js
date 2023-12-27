import * as yup from "yup";

const blogSchema = yup.object().shape({
  image: yup.image().required(),
  author: yup.string().min(4).required(),
  title: yup.string().min(4).required(),
  description: yup.string().min(4).required(),
  publishDate: yup.date().required(),
  category: yup.array().required(),
});

export default blogSchema;
