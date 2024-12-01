import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/profileReducer";
import withRouter from "../../funcionHelper/withRouter";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    profileAPI.profileUser(userId).then((data) => {
      this.props.setUserProfileAC(data);
    });
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default connect(mapStateToProps, { setUserProfileAC })(withRouter(ProfileContainer));
