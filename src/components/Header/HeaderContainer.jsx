import React from "react";
import { connect } from "react-redux";
import { authMe, setUserDataAC } from "../../redux/authReducer";
import Header from "./Header";
import { headerAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
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

export default connect(mapStateToProps, { authMe })(HeaderContainer);
