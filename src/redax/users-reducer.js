const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSER = "SETUSER";
let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:
    //     "https://sun9-49.userapi.com/c846123/v846123192/1cfb5/rouLzARdc4o.jpg",
    //   fullName: "Pavel",
    //   status: "i'm a boss",
    //   followed: true,
    //   location: { city: "Spb", country: "Russia" }
    // },
    // {
    //   id: 2,
    //   photoUrl:
    //     "https://sun9-13.userapi.com/c851128/v851128236/12193d/29OqWQhLIJE.jpg",
    //   fullName: "Nastua",
    //   status: "i'm a bob",
    //   followed: true,
    //   location: { city: "Sictivkar", country: "Russia" }
    // },
    // {
    //   id: 3,
    //   photoUrl:
    //     "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dmitry_Medvedev_govru_official_photo_2.jpg",
    //   fullName: "Dmitry",
    //   status: "i'm a boss too",
    //   followed: false,
    //   location: { city: "Moscow", country: "Russia" }
    // }
  ]
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
      return { ...state, users: [...state.users, ...action.user] };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = user => ({ type: SETUSER, user });
export default usersReducers;
