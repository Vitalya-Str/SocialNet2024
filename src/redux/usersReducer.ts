import {usersAPI} from "../api/api";
import {UserType} from "../type/type";
import {InferActionsTypes} from "./store-redux";


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


    if (action.type === "FOLLOW") {
        return {
            ...state,
            users: usersFollow(state.users, action.userId, true)
        };
    } else if (action.type === 'UNFOLLOW') {
        return {
            ...state,
            users: usersFollow(state.users, action.userId, false)
        };
    } else if (action.type === 'GET_USERS') {
        return {...state, users: action.users};
    } else if (action.type === 'TOTAL_COUNT') {
        return {...state, totalCount: action.totalCount};
    } else if (action.type === 'CURRENT_PAGE') {
        return {...state, currentPage: action.page};
    } else if (action.type === 'SET_IS_FETCHING') {
        return {...state, isFetching: action.fetching};
    } else if (action.type === 'FOLLOWING_IN_PROGRESS') {
        return {
            ...state,
            followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter((u) => u !== action.userId),
        };
    }

    return state;
};

type ActionType = InferActionsTypes<typeof action>

export const action = {
    followAC: (userId: number) => ({type: "FOLLOW", userId} as const),
    unfollowAC: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
    getUsersAC: (users: UserType[]) => ({type: 'GET_USERS', users} as const),
    totalCountAC: (totalCount: number) => ({type: 'TOTAL_COUNT', totalCount} as const),
    currentPageAC: (page: number) => ({type: 'CURRENT_PAGE', page} as const),
    isFetchingAC: (fetching: boolean) => ({type: 'SET_IS_FETCHING', fetching} as const),
    followingInProgressAC: (isFetching: boolean, userId: number) => ({
        type: 'FOLLOWING_IN_PROGRESS',
        isFetching,
        userId
    } as const),
}
export const getUsers = (currentPage: number, count: number) => {
    return async (dispatch: any) => {
        dispatch(action.isFetchingAC(true));
        const data = await usersAPI.getUsers(currentPage, count)
        dispatch(action.getUsersAC(data.items));
        dispatch(action.totalCountAC(data.totalCount));
        dispatch(action.isFetchingAC(false));
        dispatch(action.currentPageAC(currentPage));
    };
};

const followUnfollowUser = (userId: number, apiAC: any, actionCreator: any) => {
    return async (dispatch: any) => {
        const data = await apiAC(userId)
        dispatch(action.followingInProgressAC(true, userId));
        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(action.followingInProgressAC(false, userId));


    };
}
export const followUser = (id: number) => {
    return followUnfollowUser(id, usersAPI.followedApi, action.followAC)
};

export const unfollowUser = (id: number) => {
    return followUnfollowUser(id, usersAPI.unfollowedApi, action.unfollowAC)
};

export default usersReducer;
