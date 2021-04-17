import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './sidebar.module.css'

const Sidebar = (props) => {
    let friendsElements =
        props.dialogsPage.dialogs.map(d => <Friends name={d.name} key={d.id} id={d.id} photo={d.photo} />);


    return (
        <>
            <h3>Friends</h3>
            {friendsElements}
        </>
    )
}

const Friends = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <img src={props.photo} alt={'ava'} />
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}


export default Sidebar
