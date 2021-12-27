import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {ActionUsersType, followAC, setUsersAC, unfollowAC, UserType} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import s from './User.module.css';
import {User} from './User';
import axios from 'axios';

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
        <div className={s.users}>
            <h2>Users</h2>
            {users.map((x) => <User key={x.id} user={x} follow={follow} unfollow={unfollow}/>)}
            <div className={s.wrapper_button}>
                <div className={s.button} onClick={() => setUsers([])}>show more</div>
            </div>
        </div>
    )
}

type MSTPType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
};
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        users: state.dataUsers.items,
        pageSize: state.dataUsers.pageSize,
        totalUsersCount: state.dataUsers.totalUsersCount,
        currentPage: state.dataUsers.currentPage,
    }
};
type MDTPType = {
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