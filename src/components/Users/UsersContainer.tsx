import {connect} from "react-redux";
import Users from "./Users";
import {followUser, getUsers, unfollowUser} from "../../redux/usersReducer";
import {compose} from "redux";
import {
    getCount,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getTotalCount,
    usersReselect
} from "../../redux/usersReselect";
import {StateReducerType} from "../../redux/store-redux";
import {UserType} from "../../type/type";

type MapDispatchType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    getUsers: (currentPage: number, count: number) => void
}
type MapStateProps = {
    users: UserType[]
    count: number
    totalCount:number
    currentPage: number
    isFetching: boolean
    followingInProgress: any
}
const mapStateToProps = (state: StateReducerType):MapStateProps => {
    return {
        users: usersReselect(state),
        count: getCount(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState
export default compose(
    connect<MapStateProps,MapDispatchType,any,StateReducerType>(mapStateToProps, {
        followUser,
        unfollowUser,
        getUsers,
    })
)(Users);
