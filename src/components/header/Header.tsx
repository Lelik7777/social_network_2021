import React from 'react';
import o from './Header.module.css';
import img from './avatar_1634803761499.png';
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null;
    isAuth: boolean;
    callback: () => void;
}
export const Header = ({callback,login,isAuth}: PropsType) => {
    return (
        <header className={o.header}>
            <img src={img} alt="logo"/>
            <div className={o.log}>
                <NavLink to={'/Login'}>
                    <button style={{marginRight: '10%'}}
                            onClick={callback}
                    >Sign in
                    </button>
                </NavLink>
                <NavLink to={'/Login'}>
                    <button className={o.but_sign_up}>Sign up</button>
                </NavLink>
            </div>
        </header>
    );
}