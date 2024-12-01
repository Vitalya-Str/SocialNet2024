import React from "react";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/authReducer";
import Header from "./Header";
import { headerAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    headerAPI.authMe().then((data) => {

      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
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
