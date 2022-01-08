import React from 'react';
import o from './Header.module.css';
import img from './img/avatar_1634803761499.png';
import img_login from './img/jester1.png'
import {NavLink} from 'react-router-dom';

type PropsType = {
    login: string | null;
    isAuth: boolean;
    callback: () => void;
}
export const Header = ({login, isAuth, callback}: PropsType) => {
    return (
        <header className={o.header}>
            <img src={img} alt="logo"/>
            <div className={o.log}>
                {isAuth
                    ? <img src={img_login} alt="login" id={o.img_login}title={login?login:''}/>
                    : <NavLink to={'/Login'}>
                        <button className={o.but_sign_in}
                                onClick={callback}
                        >
                            Sign in
                        </button>
                    </NavLink>
                }

                <NavLink to={''}>
                    <button className={o.but_sign_up}>Sign up</button>
                </NavLink>
            </div>
        </header>
    );
}