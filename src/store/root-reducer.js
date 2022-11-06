import { combineReducers } from "redux";
import { filterReducer } from "./filters/reducers-filters";
import { positionReducer } from "./positions/reducers-positions";

export default combineReducers({
  positions: positionReducer,
  filters: filterReducer
});
