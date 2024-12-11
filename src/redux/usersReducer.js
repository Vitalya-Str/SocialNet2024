import {usersAPI} from "../api/api";

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

const usersFollow = (users, userId, actionFollowed) => {
    return users.map((u) => {
        if (u.id === userId) {
            return {...u, followed: actionFollowed};
        }
        return u;
    })
}

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: usersFollow(state.users, action.userId, true)
        };
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: usersFollow(state.users, action.userId, false)
        };
    } else if (action.type === GET_USERS) {
        return {...state, users: action.users};
    } else if (action.type === TOTAL_COUNT) {
        return {...state, totalCount: action.totalCount};
    } else if (action.type === CURRENT_PAGE) {
        return {...state, currentPage: action.page};
    } else if (action.type === SET_ISFETCHING) {
        return {...state, isFetching: action.fetching};
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
    return {type: FOLLOW, userId};
};

export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId};
};

export const getUsersAC = (users) => {
    return {type: GET_USERS, users};
};

export const totalCountAC = (totalCount) => {
    return {type: TOTAL_COUNT, totalCount};
};

export const currentPageAC = (page) => {
    return {type: CURRENT_PAGE, page};
};
export const isFetchingAC = (fetching) => {
    return {type: SET_ISFETCHING, fetching};
};

export const followingInProgressAC = (isFetching, userId) => ({type: FOLLOWING_INPROGRESS, isFetching, userId});

export const getUsers = (currentPage, count) => {
    return async (dispatch) => {
        dispatch(isFetchingAC(true));
        const data = await usersAPI.getUsers(currentPage, count)
        dispatch(getUsersAC(data.items));
        dispatch(totalCountAC(data.totalCount));
        dispatch(isFetchingAC(false));
        dispatch(currentPageAC(currentPage));
    };
};

const followUnfollowUser = (userId, apiAC, actionCreator) => {
    return async (dispatch) => {
        const data = await apiAC(userId)
        dispatch(followingInProgressAC(true, userId));
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(followingInProgressAC(false, userId));


    };
}
export const followUser = (id) => {
    return followUnfollowUser(id, usersAPI.followedApi, followAC)
};

export const unfollowUser = (id) => {
    return followUnfollowUser(id, usersAPI.unfollowedApi, unfollowAC)
};

export default usersReducer;
