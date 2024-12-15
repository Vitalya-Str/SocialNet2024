import CustomForm from "../Formik/Form/CustomForm";
import s from "./Login.module.css";
import { connect } from "react-redux";
import {captchaUrlThunk, Login} from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

const LoginPage = ({ isAuth, Login, captchaUrl, captchaUrlThunk }) => {
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={s.container}>
      <CustomForm captchaUrlThunk={captchaUrlThunk} captchaUrl={captchaUrl} isAuth={isAuth} Login={Login} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  };
};
export default connect(mapStateToProps, { Login, captchaUrlThunk  })(LoginPage);
