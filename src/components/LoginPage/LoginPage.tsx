import CustomForm from "../Formik/Form/CustomForm";
import s from "./Login.module.css";
import {connect} from "react-redux";
import {Login, loginType} from "../../redux/authReducer";
import {Navigate} from "react-router-dom";
import {RootState} from "../../redux/store-redux";
import {FC} from "react";

interface MapStatePropsType {
    isAuth: boolean,
    captchaUrl: string | null
}

interface MapDispatchType {
    Login: (values:loginType) => void
}


const LoginPage: FC<MapStatePropsType & MapDispatchType> = ({isAuth, Login, captchaUrl}) => {
    if (isAuth) {
        return <Navigate to={"/profile"}/>;
    }
    return (
        <div className={s.container}>
            <CustomForm captchaUrl={captchaUrl} Login={Login}/>
        </div>
    );
};

const mapStateToProps = (state:RootState):MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    };
};
export default connect<MapStatePropsType,MapDispatchType ,any, RootState >(mapStateToProps, {Login})(LoginPage);
