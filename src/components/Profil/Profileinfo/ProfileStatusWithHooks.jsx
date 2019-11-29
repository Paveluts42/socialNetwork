import React, { useState, useEffect } from "react"
import s from "./Profileinfo.module.css"

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => { setEditMode(true) }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
                < div >
                    <span onDoubleClick={activateEditMode} className={s.status}>{props.status || "----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} type="text" onBlur={deActivateEditMode} value={status} />
                </div>
            }
        </div >)

}
export default ProfileStatusWithHooks;