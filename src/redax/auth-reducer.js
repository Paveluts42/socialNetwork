import { authAPI } from "../api/Api";
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,


};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }


    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });


export const getUserData = () => (dispatch) => {
  return (authAPI.me().then(response => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true))
    }
  }
  )
  )
}

export const login = (email, password, rememberMe) => (dispatch) => {

  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getUserData())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
      dispatch(stopSubmit("login", { _error: message }));
    }
  }
  )
}
export const loginOut = () => (dispatch) => {
  authAPI.loginOut().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}
export default authReducers;
