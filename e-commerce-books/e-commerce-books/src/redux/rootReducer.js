import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";

//  State Object
export default combineReducers({
  user: userReducer,
});
