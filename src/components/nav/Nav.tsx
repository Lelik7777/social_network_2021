import React from 'react';
import o from './Nav.module.css'
import {NavLink} from 'react-router-dom';
import {Block} from './block/Block';
import {DataNavType} from '../../redux/store';

type NavType = {
    data: DataNavType;
}
export const Nav = ({data, ...props}: NavType) => {
    const mappedBlock = data.friends.map(f => {
        return (
            <Block name={f.name} id={f.id}/>
        )
    });

    return (
        <nav className={o.nav}>
            <div><NavLink to="/Profile" activeClassName={o.active
            }>Profile</NavLink></div>
            <div><NavLink to="/Dialogs" activeClassName={o.active
            }>Messages</NavLink></div>
            <div><NavLink to="/News" activeClassName={o.active
            }>News</NavLink></div>
            <div><NavLink to="/Settings" activeClassName={o.active
            }>Settings</NavLink></div>
            <h1>Friends</h1>
            <div className={o.friends}>
                {mappedBlock}
            </div>
        </nav>
    );
}
