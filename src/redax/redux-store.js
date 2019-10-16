import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import frendsNavReducer from "./frendsNav-reducer";
let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    frendsNav:frendsNavReducer,
});
let  store=createStore(reducers);


export default store;