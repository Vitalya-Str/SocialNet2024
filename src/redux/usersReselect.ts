import {RootState} from "./store-redux";

export const usersReselect = (state:RootState) => {
    return state.usersPage.users
}

export const getCount = (state:RootState) => {
    return state.usersPage.count
}

export const getTotalCount = (state:RootState) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state:RootState) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:RootState) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:RootState) => {
    return state.usersPage.followingInProgress
}