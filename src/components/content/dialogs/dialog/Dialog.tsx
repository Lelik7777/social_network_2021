import {NavLink} from 'react-router-dom';
import React from 'react';
import o from './Dialog.module.css';

type PropsType={
    id:number;
    name:string;
    img:string;
}
export const Dialog = ({id, name, img}: PropsType) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={o.dialog}>
            <NavLink to={path} activeClassName={o.active}>
                <span className={o.s_img}><img src={img} alt="ava"/></span>
                <span className={o.s_name}> {name}</span>
            </NavLink>
        </div>
    )
}