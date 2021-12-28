import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {
    ActionUsersType,
    followAC, getCurrentPageAC,
    setPagesAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import s from './User.module.css';
import {User} from './User';
import axios from 'axios';

type PropsType = MDTPType & MSTPType;

class UsersAPIClass extends React.Component<PropsType, { value: number }> {
    constructor(props: PropsType) {
        super(props);
        this.state = {value: 1};
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount)
        });
    }

    clickOnSpan = (x: number) => {
        this.props.getCurrentPage(x);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${x}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items);
        });
    }
    setCurrentPageAtFirst = () => {
        this.props.getCurrentPage(this.state.value);
        if(this.props.pageSize){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.state.value}&count=${this.props.pageSize}`).then((res) => {
                this.props.setUsers(res.data.items);
            });
        }
        this.setState({value: 1});
    }

    render() {
        let countPagesAll = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= countPagesAll; i++) {
            pages.push(i);
        }
        let partPages = [];
        let countOfPages=10;
        for (let i = this.props.currentPage,count=0; i < pages.length; i++,count++) {
            if (count <= countOfPages) {
                partPages.push(i);
            }
        }
        const onChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.currentTarget.valueAsNumber > 0)
                this.setState({value: e.currentTarget.valueAsNumber});
        }
        return (
            <div className={s.users}>
                {partPages.map(x =>
                    <span
                        className={this.props.currentPage === x ? s.active : ''}
                        key={x}
                        onClick={() => this.clickOnSpan(x)}
                    >
                    {x}
                </span>)
                }
                <br/>
                <input type="number"
                       onChange={onChange}
                       value={this.state.value}
                />
                <button className={s.but_input}
                        onClick={() => this.setCurrentPageAtFirst()}
                >
                    set current page at first
                </button>

                <h2 >Users:</h2>

                {this.props.users.map((x) =>
                    <User key={x.id}
                          user={x}
                          follow={this.props.follow}
                          unfollow={this.props.unfollow}
                    />)}
                <div className={s.wrapper_button}>
                    <div className={s.button}
                         onClick={() => this.props.setUsers([])}>
                        show more
                    </div>
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
        setTotalUsersCount: (count) => dispatch(setTotalUserCountAC(count)),
    }
}
export const UsersContainerClass =
    connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, mapDispatchToProps)(UsersAPIClass);