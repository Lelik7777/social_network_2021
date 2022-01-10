import s from './User.module.css';
import React from 'react';
import {UserType} from '../../../redux/usersReducer';
import ava from './img/avatar.png';
import {NavLink} from 'react-router-dom';

type PropsType = {
    user: UserType;
    setFollowOnClick: (id: number) => void;
    setUnfollowOnClick: (id: number) => void;
    isFollowInProcessing: number[];
}
export const User = ({
                         user, setFollowOnClick, setUnfollowOnClick,
                         isFollowInProcessing
                     }: PropsType) => {
    return (<div className={s.user}>
        <div className={s.avatar}>
            <NavLink to={'./Profile/' + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : ava} alt="avatar"/>
            </NavLink>

            <br/>
            {!user.followed
                ? <button
                    onClick={() => setFollowOnClick(user.id)}
                    disabled={isFollowInProcessing
                    .some(x => x === user.id)}>
                    follow
                </button>
                : <button
                    onClick={() => setUnfollowOnClick(user.id)}
                    disabled={isFollowInProcessing
                        .some(x => x === user.id)}>
                    unfollow
                </button>}
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