import {StateReducerType} from "./store-redux";

export const usersReselect = (state:StateReducerType) => {
    return state.usersPage.users
}

export const getCount = (state:StateReducerType) => {
    return state.usersPage.count
}

export const getTotalCount = (state:StateReducerType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state:StateReducerType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:StateReducerType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:StateReducerType) => {
    return state.usersPage.followingInProgress
}