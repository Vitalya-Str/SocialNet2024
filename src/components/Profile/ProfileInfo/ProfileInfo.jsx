import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img
          className={s.images}
          src="https://img1.akspic.ru/previews/5/3/0/9/7/179035/179035-voda-gora-gidroresursy-rastenie-oblako-500x.jpg"
          alt="img"
        />
      </div>
      <div>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <div className={s.infoBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
