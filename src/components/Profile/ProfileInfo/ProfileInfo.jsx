import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import avatar from "../../../images/user.png";
import s from './ProfileInfo.module.css'
import {useState} from "react";
import {Formik} from "formik";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>;
    }

    const savePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const saveProfileContacts = (contacts) => {
        props.saveProfile(contacts)
        setEditMode(false)
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
                <div> {!props.isOwner && <input onChange={savePhoto} type='file'/>} </div>
                <div>
                    <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                </div>
                <div>
                    {editMode ? <ProfileDataForm saveProfileContacts={saveProfileContacts} profile={props.profile}/> :
                        <ProfileData setEditMode={setEditMode} isOwner={props.isOwner} profile={props.profile}/>}
                </div>

            </div>
        </div>
    );
};

const ProfileDataForm = ({profile, saveProfileContacts}) => {
    return <div>
        <div>

            <Formik
                initialValues={{
                    fullName: profile.fullName,
                    aboutMe: profile.aboutMe,
                    lookingForAJob: false,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    contacts: profile.contacts
                }}
                onSubmit={(values) => {

                    saveProfileContacts(values)
                }}>
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,

                  }) => (
                    <form onSubmit={handleSubmit}>
                        <button type="submit">
                            Submit
                        </button>
                        <div>
                            <b>Name:</b> <input
                            type="text"
                            name="fullName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}
                        />
                        </div>

                        <div>
                            <b>About Me:</b> <input
                            type="text"
                            name="aboutMe"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.aboutMe}/>
                        </div>
                        <div>
                            <b> lookingForAJob:</b> <input type='checkbox'
                                                           name='lookingForAJob'
                                                           onChange={handleChange}
                                                           onBlur={handleBlur}
                                                           value={values.lookingForAJob}
                        />
                        </div>
                        <div>
                            <b> lookingForAJobDescription:</b> <input type='text'
                                                                      name='lookingForAJobDescription'
                                                                      onChange={handleChange}
                                                                      onBlur={handleBlur}
                                                                      value={values.lookingForAJobDescription}
                        />
                        </div>
                        <div>
                            <b>Contacts:</b> {Object.keys(profile.contacts).map(key =>
                            <div key={key}><b>{key}</b>: <input type="text"
                                                                name={`contacts.${key}`}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.contacts[key] || ''}/></div>)}
                        </div>


                    </form>
                )}
            </Formik>
        </div>
    </div>
}
const ProfileData = ({profile, isOwner, setEditMode}) => {
    return <div>
        {!isOwner && <button onClick={() => setEditMode(true)} type="submit"> Edit</button>}
        <div>
            <b>Name:</b> {profile.fullName}
        </div>
        <div>
            {profile.aboutMe ? (<div>
                <b> About Me: </b> {profile.aboutMe}
            </div>) : null}
        </div>
        <div>
            {profile.lookingForAJob ?
                <div><b> lookingForAJobDescription: </b> {profile.lookingForAJobDescription} </div> : null}
        </div>

        <b>Contacts:</b> {Object.keys(profile.contacts).map(c => <Contacts key={c} contactTitle={c}
                                                                           contactValue={profile.contacts[c]}
                                                                           profile={profile}/>)}
    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div className={s.contacts}>
        <b>{contactTitle}:</b> {contactValue}
    </div>


}

export default ProfileInfo;
