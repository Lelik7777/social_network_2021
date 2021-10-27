import React from 'react';
import o from './Header.module.css';
import img from './avatar_1634803761499.png';


export function Header() {
    return (
        <header className={o.header}>
            <img src={img} alt="logo"/>
            header
        </header>
    );
}