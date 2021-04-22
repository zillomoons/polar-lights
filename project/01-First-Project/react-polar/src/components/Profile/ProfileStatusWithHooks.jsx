import React, { useEffect, useState } from 'react';
import s from './HeroProfile/HeroProfile.module.css'
import { MdEdit } from 'react-icons/md'


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
                <div className={s.profileStatus} >
                    <span >{props.status || "No Status"}</span>
                    <button className={s.statusEditBtn} onClick={activateEditMode}><MdEdit /></button>
                </div>
            }
            {editMode &&
                <div className={s.customStatusInput}>
                    <label for={'statusInput'}></label>
                    <input id={'statusInput'} type={'text'} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
