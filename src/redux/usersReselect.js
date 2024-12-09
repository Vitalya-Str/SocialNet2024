export const usersReselect = (state) => {
    return state.usersPage.users
}

export const getCount = (state) => {
    return state.usersPage.count
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}