import React from 'react';
import o from './Nav.module.css'
import {NavLink} from 'react-router-dom';

export function Nav() {
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
        </nav>
    );
}