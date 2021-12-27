import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {ActionUsersType, followAC, setUsersAC, unfollowAC, UserType} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import s from './User.module.css';
import {User} from './User';
import axios from 'axios';
import ava from './img/avatar.png';

type PropsType = MDTPType & MSTPType;
const Users = ({users, follow, unfollow, setUsers}: PropsType) => {
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users/').then((resp) => setUsers(resp.data.items))
    }, []);


    console.log(users)

    /*setUsers(
        [
         {
             id: 1,
             avatar: ava,
             following: true,
             name: 'Alex',
             status: 'i like to gym',
             location: {city: 'Moscow', country: 'Russia'}
         },
         {
             id: 2,
             avatar: ava,
             following: false,
             name: 'Bob',
             status: 'i am happy',
             location: {city: 'New York', country: 'Usa'}
         },
         {
             id: 3,
             avatar: ava,
             following: true,
             name: 'Sophia',
             status: 'i travel on America',
             location: {city: 'London', country: 'UK'}
         },
         {
             id: 4,
             avatar: ava,
             following: true,
             name: 'Nick',
             status: 'i study in university',
             location: {city: 'Kiev', country: 'Ukraine'}
         },
     ]);*/
    return (
        <div>
            <h2>Users</h2>
            {users.map(x=><div>
                <div>{x.name}</div>
                <div><img src={x.photos.small!==null?x.photos.small:ava} alt=""/></div>
                <div>{x.status}</div>
                <div>{x.id}</div>
                <div>{x.uniqueUrlName!==null?x.uniqueUrlName:'empty'}</div>
            </div>)}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className={s.button} onClick={() => setUsers([])}>show more</div>
            </div>
        </div>
    )
}

export type MSTPType = { users: UserType[] };
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        users: state.dataUsers.items,
    }
};
export type MDTPType = {
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUsers: (users: UserType[]) => void;
}
const mapDispatchToProps = (dispatch: Dispatch<ActionUsersType>): MDTPType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
    }
}
export const UsersContainer =
    connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, mapDispatchToProps)(Users);