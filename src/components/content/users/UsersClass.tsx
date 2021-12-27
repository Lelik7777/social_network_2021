import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {ActionUsersType, followAC, setPagesAC, setUsersAC, unfollowAC, UserType} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import s from './User.module.css';
import {User} from './User';
import axios from 'axios';

type PropsType = MDTPType & MSTPType;

class UsersClass extends React.Component<PropsType, {}> {
    constructor(props: PropsType) {
        super(props);

    };

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users/').then((res) => {
            this.props.setUsers(res.data.items);
            this.props.setPages(res.data.totalCount);
        });
    }

    /*showTitle=() =>{
        alert('hello')
    }*/
    render() {
        let countPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= countPages; i++) {
            pages.push(i);
        }
        return (
            <div className={s.users}>
                {/* <button onClick={this.showTitle}></button>*/}
                {pages.map(x => <span
                    className={this.props.currentPage === x ? s.active : ''} key={x}>{x}</span>)
                }

                <h2 style={{marginLeft: '40px'}}>Users:</h2>
                {this.props.users.map((x) => <User key={x.id} user={x} follow={this.props.follow}
                                                   unfollow={this.props.unfollow}/>)}
                <div className={s.wrapper_button}>
                    <div className={s.button} onClick={() => this.props.setUsers([])}>show more</div>
                </div>
            </div>
        )
    }
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
}
const mapDispatchToProps = (dispatch: Dispatch<ActionUsersType>): MDTPType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setPages: (pages: number) => dispatch(setPagesAC(pages)),
    }
}
export const UsersContainerClass =
    connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, mapDispatchToProps)(UsersClass);