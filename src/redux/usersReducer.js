const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  if (action.type === FOLLOW) {
    return {
      ...state,
      users: state.users.map((u) => {
        if (u.id === action.userId) {
          return { ...u, followed: true };
        }
        return u;
      }),
    };
  } else if (action.type === UNFOLLOW) {
    return {
      ...state,
      users: state.users.map((u) => {
        if (u.id === action.userId) {
          return { ...u, followed: false };
        }
        return u;
      }),
    };
  } else if (action.type === GET_USERS) {
    /* {...state, users: [...state.users, ...action.users]} */
    return { ...state, users: [...action.users]  };
  }
  return state;
};

export const followAC = (userId) => {
  return { type: "FOLLOW", userId };
};
export const unfollowAC = (userId) => {
  return { type: "UNFOLLOW", userId };
};

export const getUsersAC = (users) => {
  return { type: "GET_USERS", users };
};

export default usersReducer;
