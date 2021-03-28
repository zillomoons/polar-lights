import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.isOwner) {
            setEditMode(true)
        }
    }
    const deactivateEditMode = (e) => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status: </b><span className={s.profileStatus} onDoubleClick={activateEditMode}>{props.status || "No Status"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <label className={s.customStatusInput} for={'statusInput'}></label>
                    <input id={'statusInput'} type={'text'} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
