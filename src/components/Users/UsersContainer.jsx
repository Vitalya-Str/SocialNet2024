import { connect } from "react-redux";
import Users from "./Users";
import { currentPageAC, followAC, getUsersAC, isFetchingAC, totalCountAC, unfollowAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, { followAC, unfollowAC, getUsersAC, totalCountAC, currentPageAC, isFetchingAC })(Users);
