import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {profileThunk, savePhoto, setProfileStatus, updateProfileStatus} from "../../redux/profileReducer";
import withRouter from "../../funcionHelper/withRouter";
import {compose} from "redux";
import {withNavigate} from "../../hoc/withNavigate";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    profileUpdate() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;

            if (!userId) {
                return this.props.navigate("/login");
            }
        }
        this.props.profileThunk(userId);
        this.props.setProfileStatus(userId);
    }
    componentDidMount() {
        this.profileUpdate()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.profileUpdate()
        }
    }
    render() {
        return (
            <div>
                <Profile {...this.props} savePhoto={this.props.savePhoto} isOwner={this.props.router.params.userId}
                         profile={this.props.profile}
                         updateProfileStatus={this.props.updateProfileStatus}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.id,
    };
};
export default compose(
    connect(mapStateToProps, {profileThunk, setProfileStatus, updateProfileStatus, savePhoto}),
    withRouter,
    withNavigate,
    withAuthRedirect
)(ProfileContainer);
