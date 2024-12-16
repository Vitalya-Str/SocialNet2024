import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {Logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {Logout})(HeaderContainer);
