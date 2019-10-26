const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSER = "SETUSER";
const SETCURRENTPAGE = "SETCURRENTPAGE";
const SETTOTALUSERSCOUNT = "SETTOTALUSERSCOUNT";
const TOGGLEISFEACHING = "TOGGLEISFEACHING";

let initialState = {
  users: [

  ], pageSize: 20,
  totalUsersCount: 30,
  currentPage: 1,
  isFeaching: false,

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
    case TOGGLEISFEACHING:
      return { ...state, isFeaching: action.isFeaching };
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unFollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = user => ({ type: SETUSER, user });
export const setCurrentPage = currentPage => ({ type: SETCURRENTPAGE, currentPage })
export const setTotalUsersCount = totalUsersCount => ({ type: SETTOTALUSERSCOUNT, totalUsersCount })
export const setIsFeaching = isFeaching => ({ type: TOGGLEISFEACHING, isFeaching })
export default usersReducers;
