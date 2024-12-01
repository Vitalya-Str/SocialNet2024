import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";
const TOTAL_COUNT = "TOTAL_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";
const SET_ISFETCHING = "SET_ISFETCHING";
const FOLLOWING_INPROGRESS = "FOLLOWING_INPROGRESS";

const initialState = {
  users: [],
  count: 10,
  currentPage: 1,
  totalCount: 0,
  isFetching: false,
  followingInProgress: [],
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
    return { ...state, users: action.users };
  } else if (action.type === TOTAL_COUNT) {
    return { ...state, totalCount: action.totalCount };
  } else if (action.type === CURRENT_PAGE) {
    return { ...state, currentPage: action.page };
  } else if (action.type === SET_ISFETCHING) {
    return { ...state, isFetching: action.fetching };
  } else if (action.type === FOLLOWING_INPROGRESS) {
    return {
      ...state,
      followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter((u) => u !== action.userId),
    };
  }

  return state;
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const getUsersAC = (users) => {
  return { type: GET_USERS, users };
};

export const totalCountAC = (totalCount) => {
  return { type: TOTAL_COUNT, totalCount };
};

export const currentPageAC = (page) => {
  return { type: CURRENT_PAGE, page };
};
export const isFetchingAC = (fetching) => {
  return { type: SET_ISFETCHING, fetching };
};

export const followingInProgressAC = (isFetching, userId) => ({ type: FOLLOWING_INPROGRESS, isFetching, userId });

export const getUsers = (currentPage, count) => {
  return (dispatch) => {
    dispatch(isFetchingAC(true));
    usersAPI.getUsers(currentPage, count).then((data) => {
      dispatch(getUsersAC(data.items));
      dispatch(totalCountAC(data.totalCount));
      dispatch(isFetchingAC(false));
    });
    dispatch(currentPageAC(1));
  };
};

export const followUser = (id) => {
  return (dispatch) => {
    usersAPI.followedApi(id).then((data) => {
      dispatch(followingInProgressAC(true, id));
      if (data.resultCode === 0) {
        return dispatch(followAC(id));
      }
      dispatch(followingInProgressAC(false, id));
    });
  };
};

export const unfollowUser = (id) => {
  return (dispatch) => {
    usersAPI.followedApi(id).then((data) => {
      dispatch(followingInProgressAC(true, id));
      if (data.resultCode === 0) {
        return dispatch(unfollowAC(id));
      }
      dispatch(followingInProgressAC(false, id));
    });
  };
};

export default usersReducer;
