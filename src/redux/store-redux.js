import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import {thunk} from "redux-thunk";
import appReducer from "./appReducer";
import authReducer from "./authReducer";

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer
});

const store = createStore(redusers, applyMiddleware(thunk));

export default store;
