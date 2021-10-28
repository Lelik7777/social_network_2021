import {NavLink} from 'react-router-dom';
import React from 'react';
import o from './Dialog.module.css';
import {DialogType} from '../../../../redux/state';

//components
export function Dialog(props: DialogType) {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={o.dialog}>
            <NavLink to={path} activeClassName={o.active}>
                <span className={o.s_img}><img src={props.img} alt="ava"/></span>
                <span className={o.s_name}> {props.name}</span>
            </NavLink>
        </div>
    )
}