import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
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
      <div>  { props.profile.photos.large ? <div><img src={props.profile.photos.large} alt="" />  </div> : null}
        
        <div>
          {props.profile.aboutMe ? (
            <div>
              <b> Abaut Me: </b> {props.profile.aboutMe}
            </div>
          ) : null}
        </div>
        <div>
          <b>Name:</b> {props.profile.fullName}
        </div>
        <div>
          {props.profile.contacts.facebook ? (
            <div>
              <b>Facebook:</b> {props.profile.contacts.facebook}
            </div>
          ) : null}
        </div>
        <div>
          {props.profile.contacts.github ? (
            <div>
              <b>github:</b> {props.profile.contacts.github}
            </div>
          ) : null}
        </div>
        <div>
          {props.profile.contacts.instagram ? (
            <div>
              <b>instagram:</b> {props.profile.contacts.instagram}
            </div>
          ) : null}
        </div>
        <div>
          {props.profile.contacts.mainLink ? (
            <div>
              <b>mainLink:</b> {props.profile.contacts.mainLink}
            </div>
          ) : null}
        </div>
        <div>
          {props.profile.contacts.twitter ? (
            <div>
              <b>twitter:</b> {props.profile.contacts.twitter}
            </div>
          ) : null}
        </div>
        <div>
          {props.profile.contacts.vk ? (
            <div>
              <b>vk:</b> {props.profile.contacts.vk}
            </div>
          ) : null}
        </div>
        <div>
          {props.profile.contacts.website ? (
            <div>
              <b>website:</b> {props.profile.contacts.website}
            </div>
          ) : null}
        </div>
        <div>
          {props.profile.contacts.youtube ? (
            <div>
              <b>youtube:</b> {props.profile.contacts.youtube}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
