import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const withAuthRedirect = (Component) => {
  const ComponentContainer = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />;

    return <Component {...props} />;
  };

  return connect(mapStateToProps)(ComponentContainer);
};

export default withAuthRedirect;
