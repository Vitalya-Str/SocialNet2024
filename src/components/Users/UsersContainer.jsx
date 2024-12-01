import { connect } from "react-redux";
import Users from "./Users";
import { followUser, getUsers, unfollowUser } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  followUser,
  unfollowUser,
  getUsers,
})(Users);
