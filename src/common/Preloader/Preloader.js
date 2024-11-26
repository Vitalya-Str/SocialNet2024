import preloader from "../../images/preloader.svg";
import s from "./Preloader.module.css";

const Preloader = (props) => {
  return <img className={s.size} src={preloader} alt="isFetching" />;
};

export default Preloader;
