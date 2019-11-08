import { usersAPI } from "../api/Api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USER = "SET_USER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FEACHING = "TOGGLE_IS_FEACHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [

  ], pageSize: 20,
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
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
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
          state.followingInProgress.filter(id => id != action.userId)
      };
    default:
      return state;
  }
};
debugger
export const followSuccess = userId => ({ type: FOLLOW, userId });
export const unFollowSuccess = userId => ({ type: UN_FOLLOW, userId });
export const setUsers = user => ({ type: SET_USER, user });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const setIsFeaching = isFeaching => ({ type: TOGGLE_IS_FEACHING, isFeaching })
export const setfollowingInProgress = (isFeaching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFeaching, userId })
export const getUsers = (currentPage, pageSize) => {
  return ((dispatch) => {
    dispatch(setIsFeaching(false));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setIsFeaching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
  )
}
debugger
export const follow = (userId) => {
  return ((dispatch) => {
    dispatch(setfollowingInProgress(true, userId))
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(setfollowingInProgress(false, userId));
    });
  })
}
export const unFollow = (userId) => {
  return ((dispatch) => {
    dispatch(setfollowingInProgress(true, userId))
    usersAPI.unFollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unFollowSuccess(userId))
      }
      dispatch(setfollowingInProgress(false, userId));
    });
  })
}

export default usersReducers;
