import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import avatar from "../../../images/user.png";
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const savePhoto = (e) => {
  if ( e.target.files.length) {
    props.savePhoto(e.target.files[0])
  }
  }

  return (
    <div>
      <div>
        {props.profile.photos.large ? (
            <div>
              <img src={props.profile.photos.large} alt=""/>
            </div>
        ) : (
            <div>
              <img className={s.avatar} src={avatar} alt="avatar"/>
            </div>
        )}
        <div> {!props.isOwner && <input  onChange={savePhoto} type='file' /> } </div>
        <div>
          <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
        </div>
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
