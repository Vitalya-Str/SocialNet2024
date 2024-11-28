import React from "react";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/authReducer";
import axios from "axios";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then((Response) => {
      if (Response.data.resultCode === 0) {
        debugger;
        let { email, id, login } = Response.data.data;
        this.props.setUserDataAC(email, id, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setUserDataAC })(HeaderContainer);
