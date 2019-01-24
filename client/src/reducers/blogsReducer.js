import { GET_ALL_BLOGS } from "../actions/types";

const initState = [];

export default function(state = initState, action) {
  switch (action.type) {
    case GET_ALL_BLOGS:
      console.log("get all blogs");
      return action.playload;
    default:
      return state;
  }
}
