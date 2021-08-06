import { combineReducers } from "redux";
import { START_LOADING, STORE_PLACES } from "./actions";

const records = (state = [], action) => {
  switch (action.type) {
    case STORE_PLACES:
      return action.records;
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STORE_PLACES:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  records,
  loading,
});
