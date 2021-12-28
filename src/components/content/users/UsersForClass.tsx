import {UserType} from '../../../redux/usersReducer';
import React, {ChangeEvent} from 'react';
import s from './User.module.css';
import {User} from './User';

type PropsType = {
    value: number;
    setState: (value: { value: number }) => void;
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUsers: (users: UserType[]) => void;
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    clickOnSpan: (page: number) => void;
    setCurrentPageAtFirst: (v: number) => void;
}
export const UsersForClass = ({
                                  value, setState, users, pageSize, totalUsersCount, currentPage,
                                  clickOnSpan, setCurrentPageAtFirst, follow, unfollow, setUsers,
                              }: PropsType) => {
    let countPagesAll = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= countPagesAll; i++) {
        pages.push(i);
    }
    let partPages = [];
    let countOfPages = 10;
    for (let i = currentPage, count = 0; i < pages.length; i++, count++) {
        if (count <= countOfPages) {
            partPages.push(i);
        }
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber > 0)
            setState({value: e.currentTarget.valueAsNumber});
    }
    return (
        <div className={s.users}>
            {partPages.map(x =>
                <span
                    className={currentPage === x ? s.active : ''}
                    key={x}
                    onClick={() => clickOnSpan(x)}
                >
                    {x}
                </span>)
            }
            <br/>
            <input type="number"
                   onChange={onChange}
                   value={value}
            />
            <button className={s.but_input}
                    onClick={() => setCurrentPageAtFirst(value)}
            >
                set current page at first
            </button>

            <h2>Users:</h2>

            {users.map((x) =>
                <User key={x.id}
                      user={x}
                      follow={follow}
                      unfollow={unfollow}
                />)}
            <div className={s.wrapper_button}>
                <div className={s.button}
                     onClick={() => setUsers([])}>
                    show more
                </div>
            </div>
        </div>
    )
}