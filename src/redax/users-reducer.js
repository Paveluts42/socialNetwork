const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSER = "SETUSER";
const SETCURRENTPAGE = "SETCURRENTPAGE";
const SETTOTALUSERSCOUNT = "SETTOTALUSERSCOUNT";
let initialState = {
  users: [

  ], pageSize: 20,
  totalUsersCount: 30,
  currentPage: 1,

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
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SETUSER:
      return { ...state, users: action.user };
    case SETCURRENTPAGE:
      return { ...state, currentPage: action.currentPage };
    case SETTOTALUSERSCOUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = user => ({ type: SETUSER, user });
export const setCurrentPageAC = currentPage => ({ type: SETCURRENTPAGE, currentPage })
export const setTotalUsersCountAC = totalUsersCount => ({ type: SETTOTALUSERSCOUNT, totalUsersCount })
export default usersReducers;
