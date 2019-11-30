import { usersAPI } from "../api/Api";
import { updateObjectInArray } from "../utils/object-helpers"
const FOLLOW = "users/FOLLOW";
const UN_FOLLOW = "users/UN_FOLLOW";
const SET_USER = "users/SET_USER";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FEACHING = "users/TOGGLE_IS_FEACHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 30,
  currentPage: 2,
  isFeaching: true,
  followingInProgress: [3],
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      };

    case SET_USER:
      return { ...state, users: action.user };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FEACHING:
      return { ...state, isFeaching: action.isFeaching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFeaching ?
          [...state.followingInProgress, action.userId]
          :
          state.followingInProgress.filter(id => id !== action.userId)
      };
    default:
      return state;
  }
};
export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unFollowSuccess = userId => ({ type: UN_FOLLOW, userId });
export const setUsers = user => ({ type: SET_USER, user });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFeaching = isFeaching => ({ type: TOGGLE_IS_FEACHING, isFeaching })
export const setfollowingInProgress = (isFeaching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFeaching, userId })

export const getAllUsers = (page, pageSize) => {
  return (async (dispatch) => {
    dispatch(setIsFeaching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setIsFeaching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount))

  }
  )
}

const followUnfollowFlow = async (dispatch, userId, actionCreator, apiMethod) => {
  dispatch(setfollowingInProgress(true, userId))
  let response = await apiMethod(userId)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(setfollowingInProgress(false, userId));

}

export const follow = (userId) => {
  return (async (dispatch) => {
    followUnfollowFlow(dispatch, userId, followSuccess, usersAPI.follow.bind(usersAPI))
  })
}
export const unFollow = (userId) => {
  return (async (dispatch) => {
    followUnfollowFlow(dispatch, userId, unFollowSuccess, usersAPI.unFollow.bind(usersAPI))
  })
}

export default usersReducers;
