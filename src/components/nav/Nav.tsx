import React from 'react';
import o from './Nav.module.css'
export function Nav() {
    return (
        <nav className={o.nav}>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">News</a></div>
            <div><a href="#">Settings</a></div>
        </nav>
    );
}