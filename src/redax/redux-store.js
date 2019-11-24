import { combineReducers, createStore, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import frendsNavReducer from "./frendsNav-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as fromReducer } from "redux-form";
import appReducers from "./app-reducer "
let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  frendsNav: frendsNavReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: fromReducer,
  app: appReducers,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
