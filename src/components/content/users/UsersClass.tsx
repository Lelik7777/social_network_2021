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

class UsersClass extends React.Component<PropsType, { value: number }> {
    constructor(props: PropsType) {
        super(props);
        this.state = {value: 0};
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
        let countPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= countPages; i++) {
            pages.push(i);
        }
        let partPages = [];
        let count = 0;
        for (let i = this.props.currentPage; i < pages.length; i++) {
            if (count <= 10) {
                partPages.push(i);
            }
            count++;
        }
        const styleSpan = {
            margin: '0 3px',
            cursor: 'pointer',
            padding: '0 3px',
            backgroundColor: 'snow',
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
                        style={styleSpan}
                    >
                    {x}
                </span>)
                }
                <br/>
                <input type="number"
                       style={{width: '40px', fontWeight: 'bold'}}
                       onChange={onChange}
                       value={this.state.value}
                />
                <button style={{backgroundColor: 'bisque', color: 'blue', marginLeft: '1px'}}
                        onClick={() => this.setCurrentPageAtFirst()}
                >
                    set current page at first
                </button>

                <h2 style={{marginLeft: '40px'}}>Users:</h2>

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
    (mapStateToProps, mapDispatchToProps)(UsersClass);