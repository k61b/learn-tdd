import { combineReducers } from "redux";
import { STORE_PLACES } from "./actions";

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_PLACES:
      return action.records;
    default:
      return state;
  }
};

export default combineReducers({
  records,
});
