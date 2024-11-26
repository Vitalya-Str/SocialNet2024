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

const mapDispatchToProps = (dispatch) => {
  return {
    followAC: (userId) => {
      dispatch(followAC(userId));
    },
    unfollowAC: (userId) => {
      dispatch(unfollowAC(userId));
    },
    getUsers: (users) => {
      dispatch(getUsersAC(users));
    },
    totalCountAC: (totalCount) => {
      dispatch(totalCountAC(totalCount));
    },
    currentPageAC: (page) => {
      dispatch(currentPageAC(page));
    },
    isFetchingAC: (fetching) => {
      dispatch(isFetchingAC(fetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
