import {UserType} from '../../../redux/usersReducer';
import React, {ChangeEvent} from 'react';
import s from './User.module.css';
import {User} from './User';
import {Preloader} from '../../../common components/preloader/Preloader';

type PropsType = {
    value: number;
    updateNewMessage: (value: number) => void;
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    getCurrentPage: (page: number) => void;
    setPageAtBegin: (v: number) => void;
    isFetching: boolean;
    setFollowOnClick: (id: number) => void;
    setUnfollowOnClick: (id: number) => void;
    isFollowInProcessing: number[];
}
export const UsersForClass = ({
                                  value, updateNewMessage,
                                  users, pageSize,
                                  totalUsersCount, currentPage,
                                  getCurrentPage, setPageAtBegin,
                                  isFetching, setFollowOnClick,
                                  setUnfollowOnClick, isFollowInProcessing
                              }: PropsType) => {
    let countPagesAll = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= countPagesAll; i++) {
        pages.push(i);
    }
    let partPages = [];
    let countOfPages = 9;
    for (let i = currentPage, count = 0; i < pages.length; i++, count++) {
        if (count <= countOfPages) {
            partPages.push(i);
        }
    }
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.valueAsNumber > 0)
            updateNewMessage(e.currentTarget.valueAsNumber);
    }
    return (
        <div className={s.users}>

            {partPages.map(x =>
                <span
                    className={currentPage === x ? s.active : ''}
                    key={x}
                    onClick={() => getCurrentPage(x)}
                >
                    {x}
                </span>)
            }
            <br/>
            <input type="number"
                   onChange={onChangeValue}
                   value={value}
            />
            <button className={s.but_input}
                    onClick={() => setPageAtBegin(value)}
            >
                set current page at first
            </button>
            {isFetching && <Preloader/>}
            <h2>Users:</h2>

            {users.map((x) =>
                <User key={x.id}
                      user={x}
                      setFollowOnClick={setFollowOnClick}
                      setUnfollowOnClick={setUnfollowOnClick}
                      isFollowInProcessing={isFollowInProcessing}
                />)}
            <div className={s.wrapper_button}>
                <div className={s.button}
                     onClick={() => {}}>
                    show more
                </div>
            </div>
        </div>
    )
}