import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {

  return {
    users: state.usersPage.users,
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
  };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
