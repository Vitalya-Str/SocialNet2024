import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { profileThunk, setProfileStatus, updateProfileStatus } from "../../redux/profileReducer";
import withRouter from "../../funcionHelper/withRouter";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.profileThunk(userId);
    this.props.setProfileStatus(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} updateProfileStatus={this.props.updateProfileStatus} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(connect(mapStateToProps, { profileThunk, setProfileStatus, updateProfileStatus }), withRouter)(ProfileContainer);
