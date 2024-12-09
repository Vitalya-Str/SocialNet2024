import {useEffect, useState,} from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const onSetStatus = (e) => {
    setStatus(e.target.value);
  };

  const onSetStatusProfile = () => {
    setEditMode(false);
    props.updateProfileStatus(status);

  };

  useEffect(() => {
    if (status !== props.status) {
      props.updateProfileStatus(status);
    }
  }, [ status]);

  return (
    <>
      <div>
        <div>{!editMode && <span onDoubleClick={() => setEditMode(true)}> {props.status || <b> ~ Double Click Status ~ </b>} </span>}</div>
        <div>{editMode && <input onChange={onSetStatus} autoFocus={true} onBlur={onSetStatusProfile} value={status} />}</div>
      </div>
    </>
  );
};


export default ProfileStatus;
