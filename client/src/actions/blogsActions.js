import { GET_ALL_BLOGS } from "./types";

export const getAllBlogs = () => dispatch => {
  fetch("/api/test")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_ALL_BLOGS,
        playload: data
      })
    );
};
