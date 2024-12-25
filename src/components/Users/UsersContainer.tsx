// import {connect} from "react-redux";
// import Users from "./Users";
// import {followUser, getUsers, unfollowUser} from "../../redux/usersReducer";
// import {compose} from "redux";
// import {
//     getCount,
//     getCurrentPage,
//     getFollowingInProgress,
//     getIsFetching,
//     getTotalCount, setSearchTerm,
//     usersReselect
// } from "../../redux/usersReselect";
// import {RootState} from "../../redux/store-redux";
// import {UserType} from "../../type/type";
//
// type MapDispatchType = {
//     followUser: (userId: number) => void
//     unfollowUser: (userId: number) => void
//     getUsers: (currentPage: number, count: number, term: string) => void
// }
// type MapStateProps = {
//     users: UserType[]
//     count: number
//     totalCount:number
//     currentPage: number
//     isFetching: boolean
//     followingInProgress: number[]
//     term: string
// }
// const mapStateToProps = (state: RootState):MapStateProps => {
//     return {
//         users: usersReselect(state),
//         count: getCount(state),
//         totalCount: getTotalCount(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getIsFetching(state),
//         followingInProgress: getFollowingInProgress(state),
//         term: setSearchTerm(state)
//     };
// };
//
// export default compose(
//     connect<MapStateProps,MapDispatchType,any,RootState>(mapStateToProps, {
//         followUser,
//         unfollowUser,
//         getUsers,
//     })
// )(Users);
