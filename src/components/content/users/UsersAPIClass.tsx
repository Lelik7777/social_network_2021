import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {
    ActionUsersType,
    followAC,
    getCurrentPageAC,
    setPagesAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../../redux/usersReducer';
import {Dispatch} from 'redux';
import axios from 'axios';
import {UsersForClass} from './UsersForClass';

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
    setCurrentPageAtFirst = (value: number) => {
        this.props.getCurrentPage(value);
        if (this.props.pageSize) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${this.props.pageSize}`).then((res) => {
                this.props.setUsers(res.data.items);
            });
        }
        this.setState({value: 1});
    }

    render() {
        return (
            <UsersForClass
                value={this.state.value}
                setState={this.setState}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                clickOnSpan={this.clickOnSpan}
                setCurrentPageAtFirst={this.setCurrentPageAtFirst}
                setUsers={this.props.setUsers}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
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