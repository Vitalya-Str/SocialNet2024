import { connect } from "react-redux";
import Users from "./Users";
import { followAC, getUsersAC, unfollowAC } from "../../redux/usersReducer";

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
    getUsers: (users)=>{
      dispatch(getUsersAC(users));
    }
  };
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
