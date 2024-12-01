import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { profileThunk, setUserProfileAC } from "../../redux/profileReducer";
import withRouter from "../../funcionHelper/withRouter";
import { profileAPI } from "../../api/api";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.profileThunk(userId);
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

export default connect(mapStateToProps, { profileThunk })(withRouter(withAuthRedirect(ProfileContainer)));
