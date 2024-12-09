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

const mapStateToProps = (state) => {
    return {
        users: usersReselect(state),
        count: getCount(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        getUsers,
    })
)(Users);
