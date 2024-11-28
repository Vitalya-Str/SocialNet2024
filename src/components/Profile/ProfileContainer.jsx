import axios from "axios";
import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/profileReducer";
import withRouter from "../../funcionHelper/withRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((Response) => {
      this.props.setUserProfileAC(Response.data);
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
