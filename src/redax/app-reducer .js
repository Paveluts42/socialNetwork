
import { getUserData } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = { initialized: false, };

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }


    default:
      return state;
  }
};

export const setInitialized = () => ({ type: SET_INITIALIZED });


export const initializeApp = () => (dispatch) => {
  let promis = dispatch(getUserData());
  Promise.all([promis]).then(() => {
    dispatch(setInitialized())
  })

}

export default appReducers;
