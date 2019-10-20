import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import frendsNavReducer from "./frendsNav-reducer";
import usersReducers from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  frendsNav: frendsNavReducer,
  usersPage: usersReducers
});
let store = createStore(reducers);
window.store = store;

export default store;
