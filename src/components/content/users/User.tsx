import s from './User.module.css';
import React from 'react';
import {UserType} from '../../../redux/usersReducer';
import ava from './img/avatar.png';
import { NavLink } from 'react-router-dom';

type PropsType = {
    user: UserType;
    follow: (id: number) => void;
    unfollow: (id: number) => void;
}
export const User = ({user, follow, unfollow}: PropsType) => {
    const onClick = () => {
        return follow(user.id)
    };
    const onClick1 = () => unfollow(user.id);
    return (<div className={s.user}>
        <div className={s.avatar}>
            <NavLink to={'./Profile'}>
                <img src={user.photos.small !== null ? user.photos.small : ava} alt="avatar"/>
            </NavLink>

            <br/>
            {user.followed
                ?
                <button onClick={onClick}>follow</button>
                :
                <button onClick={onClick1}>unfollow</button>}
        </div>
        <div className={s.data}>
            <div className={s.sub_data1}>
                <div>{user.name}</div>
                <div
                    style={{display: 'flex', alignItems: 'flex-end', fontSize: '1rem'}}>
                    {user.status !== null ? user.status : 'i am happy'}
                </div>
            </div>
            <div className={s.sub_data2}>
                <div>country</div>
                <div>city</div>
            </div>
        </div>

    </div>)
}