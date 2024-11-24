import { connect } from "react-redux";
import Users from "./Users";
import { currentPageAC, followAC, getUsersAC, totalCountAC, unfollowAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    count: state.usersPage.count,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
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
  };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
