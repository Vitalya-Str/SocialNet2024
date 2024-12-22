import {usersAPI} from "../api/api";
import { UserType} from "../type/type";



const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const GET_USERS = "GET_USERS";
const TOTAL_COUNT = "TOTAL_COUNT";
const CURRENT_PAGE = "CURRENT_PAGE";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";


const initialState = {
    users: [] as UserType[],
    count: 10,
    currentPage: 1,
    totalCount: 0,
    isFetching: false,
    followingInProgress: [] as number[],
};

type InitialState = typeof initialState

const usersFollow = (users: UserType[], userId: number, actionFollowed: boolean) => {
    return users.map((u) => {
        if (u.id === userId) {
            return {...u, followed: actionFollowed};
        }
        return u;
    })
}

const usersReducer = (state = initialState, action: ActionType): InitialState => {


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
    } else if (action.type === SET_IS_FETCHING) {
        return {...state, isFetching: action.fetching};
    } else if (action.type === FOLLOWING_IN_PROGRESS) {
        return {
            ...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter((u) => u !== action.userId),
        };
    }

    return state;
};

type ActionType = followACType | unfollowACTpe | getUsersACType | totalCountACType | currentPageACType | isFetchingACType | followingInProgressACType

type followACType = {
    type: typeof FOLLOW
    userId: number
}
export const followAC = (userId: number): followACType => {
    return {type: FOLLOW, userId};
};

type unfollowACTpe = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowAC = (userId: number): unfollowACTpe => {
    return {type: UNFOLLOW, userId};
};

type getUsersACType = {
    type: typeof GET_USERS
    users: UserType[]
}
export const getUsersAC = (users: UserType[]): getUsersACType => {
    return {type: GET_USERS, users};
};

type totalCountACType = {
    type: typeof TOTAL_COUNT
    totalCount: number
}
export const totalCountAC = (totalCount: number): totalCountACType => {
    return {type: TOTAL_COUNT, totalCount};
};

type currentPageACType = {
    type: typeof CURRENT_PAGE
    page: number
}
export const currentPageAC = (page: number): currentPageACType => {
    return {type: CURRENT_PAGE, page};
};

type isFetchingACType = {
    type: typeof SET_IS_FETCHING
    fetching: boolean
}
export const isFetchingAC = (fetching: boolean): isFetchingACType => {
    return {type: SET_IS_FETCHING, fetching};
};

type followingInProgressACType = {
    type: typeof FOLLOWING_IN_PROGRESS
    isFetching: boolean
    userId: number
}
export const followingInProgressAC = (isFetching: boolean, userId: number): followingInProgressACType => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (currentPage: number, count: number) => {
    return async (dispatch:any) => {
        dispatch(isFetchingAC(true));
        const data = await usersAPI.getUsers(currentPage, count)
        dispatch(getUsersAC(data.items));
        dispatch(totalCountAC(data.totalCount));
        dispatch(isFetchingAC(false));
        dispatch(currentPageAC(currentPage));
    };
};

const followUnfollowUser = (userId: number, apiAC: any, actionCreator: any) => {
    return async (dispatch: any) => {
        const data = await apiAC(userId)
        dispatch(followingInProgressAC(true, userId));
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(followingInProgressAC(false, userId));


    };
}
export const followUser = (id: number) => {
    return followUnfollowUser(id, usersAPI.followedApi, followAC)
};

export const unfollowUser = (id: number) => {
    return followUnfollowUser(id, usersAPI.unfollowedApi, unfollowAC)
};

export default usersReducer;
