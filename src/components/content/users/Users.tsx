import React, {ChangeEvent, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {
    ActionUsersType,
    followAC,
    getCurrentPageAC,
    setPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import s from './User.module.css';
import {User} from './User';
import axios from 'axios';

type PropsType = MDTPType & MSTPType;

const Users = ({
                   users,
                   follow,
                   unfollow,
                   setUsers,
                   pageSize,
                   totalUsersCount,
                   currentPage,
                   setPages,
                   setTotalUsersCount,
                   getCurrentPage,
               }: PropsType) => {
    const [value, setValue] = useState(1);
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${pageSize}&page=${currentPage}`).then((resp) => {
            setUsers(resp.data.items);
            setTotalUsersCount(resp.data.totalCount);

        });
    }, []);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.valueAsNumber);
    }
    let countPagesAll = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= countPagesAll; i++) {
        pages.push(i);
    }
    let partPages = [];
    let countOfPages=10;
    for (let i = currentPage,count=0; i < pages.length; i++,count++) {
        if (count <= countOfPages) {
            partPages.push(i);
        }
    }
    const setCurrPage = () =>{
        getCurrentPage(value);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${pageSize}&page=${value}`).then((res)=>{
            setUsers(res.data.items);
        });
    };
    return (
        <div className={s.users}>
            {partPages.map(x => {
                const getCurrPage = () =>{
                    getCurrentPage(x);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/users/?count=${pageSize}&page=${x}`).then((res)=>{
                       setUsers(res.data.items);
                    });
                }
                return <span
                    key={x}
                    className={x === currentPage ? s.active : ''}
                    onClick={getCurrPage}
                >{x}
            </span>;
            })}
            <br/>
            <input type="number" value={value} onChange={onChange}/>
            <button className={s.but_input}
                    onClick={setCurrPage}
            >set current page at first
            </button>
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
    setPages: (pages: number) => void;
    getCurrentPage: (page: number) => void;
    setTotalUsersCount: (count: number) => void;
}
const mapDispatchToProps = (dispatch: Dispatch<ActionUsersType>): MDTPType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setPages: (pages: number) => dispatch(setPagesAC(pages)),
        getCurrentPage: (page) => dispatch(getCurrentPageAC(page)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
    }
}
export const UsersContainer =
    connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, mapDispatchToProps)(Users);