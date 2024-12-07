import CustomForm from "../Formik/Form/CustomForm";
import s from "./Login.module.css";
import { connect } from "react-redux";
import { Login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginPage = ({ isAuth, Login }) => {
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={s.container}>
      <CustomForm isAuth={isAuth} Login={Login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { Login })(LoginPage);
