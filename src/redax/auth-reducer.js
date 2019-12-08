import { authAPI, securityAPI } from "../api/Api";
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL = "auth/GET_CAPTCHA_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,

};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

export const getCaptchaUrl = (captchaUrl) => ({ type: GET_CAPTCHA_URL, payload: { captchaUrl } });


export const getUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true))
  }


}


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(getUserData())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(captchaUrl());
    }

    dispatch(stopSubmit("login", { _error: response.data.messages[0] }));

  }
}


export const captchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrl(captchaUrl));
}


export const loginOut = () => async (dispatch) => {
  let response = await authAPI.loginOut()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
export default authReducers;
