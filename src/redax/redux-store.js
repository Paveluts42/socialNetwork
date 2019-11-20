import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import frendsNavReducer from "./frendsNav-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as fromReducer } from "redux-form"
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  frendsNav: frendsNavReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: fromReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
