import { GET_ALL_ITEMS } from "./types";

export const getAllItems = () => dispatch => {
  fetch("/api/test")
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: GET_ALL_ITEMS,
        playload: data
      })
    );
};
