import { GET_ALL_ITEMS } from "../actions/types";
const initState = [];

export default function(state = initState, action) {
  switch (action.type) {
    case GET_ALL_ITEMS:
      console.log("get all items");
      return action.playload;
    default:
      return state;
  }
}
