import React from 'react';
import o from './Header.module.css';
import img from './img/avatar_1634803761499.png';
import img_login from './img/jester1.png'
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setLogout} from '../../redux/authReducer';

type PropsType = {
    login: string | null;
    isAuth: boolean;
    callback: () => void;
}
export const Header = ({login, isAuth, callback}: PropsType) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(setLogout());
    }
    return (
        <header className={o.header}>
            <img src={img} alt="logo"/>
            <div className={o.log}>
                {isAuth
                    ? <div>
                        <img src={img_login} alt="login" id={o.img_login} title={login ? login : ''}/>
                        <button onClick={handleLogout} className={o.but_sign_up}>Logout</button>
                    </div>
                    : <NavLink to={'/Login'}>
                        <button className={o.but_sign_in}
                                onClick={callback}
                        >
                            Sign in
                        </button>
                    </NavLink>
                }

                {!isAuth && <NavLink to={'/login'}>
                    <button className={o.but_sign_up}>Sign up</button>
                </NavLink>
                }
            </div>
        </header>
    );
}