import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {
    ActionUsersType, checkIsFetchingAC,
    followAC,
    getCurrentPageAC,
    setPagesAC,
    setTotalUsersCountAC,
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
        this.props.checkIsFetchingAC(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsersAC(res.data.items);
            this.props.setTotalUsersCountAC(res.data.totalCount);
            this.props.checkIsFetchingAC(false);
        });
    }

    getCurrentPage = (page: number) => {
        this.props.checkIsFetchingAC(true);
        this.props.getCurrentPageAC(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsersAC(res.data.items);
            this.props.checkIsFetchingAC(false);
        });
    }
    setCurrentPageAtFirst = (value: number) => {
        this.props.checkIsFetchingAC(true);
        this.props.getCurrentPageAC(value);
        if (this.props.pageSize) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${this.props.pageSize}`).then((res) => {
                this.props.setUsersAC(res.data.items);
                this.props.checkIsFetchingAC(false);
            });
        }
        this.setState({value: 1});
    }
    onChange = (value: number) => {
        this.setState({value: value})
    }

    render() {
        return (
            <UsersForClass
                value={this.state.value}
                onChange={this.onChange}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                getCurrentPage={this.getCurrentPage}
                setCurrentPageAtFirst={this.setCurrentPageAtFirst}
                setUsers={this.props.setUsersAC}
                follow={this.props.followAC}
                unfollow={this.props.unfollowAC}
                isFetching={this.props.isFetching}
            />
        )
    }
}


type MSTPType = {
    users: UserType[];
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
};
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        users: state.dataUsers.items,
        pageSize: state.dataUsers.pageSize,
        totalUsersCount: state.dataUsers.totalUsersCount,
        currentPage: state.dataUsers.currentPage,
        isFetching: state.dataUsers.isFetching,
    }
};
type MDTPType = {
    followAC: (id: number) => void;
    unfollowAC: (id: number) => void;
    setUsersAC: (users: UserType[]) => void;
    setPagesAC: (pages: number) => void;
    getCurrentPageAC: (page: number) => void;
    setTotalUsersCountAC: (count: number) => void;
    checkIsFetchingAC: (isFet: boolean) => void;
}
/*const mapDispatchToProps = (dispatch: Dispatch<ActionUsersType>): MDTPType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        unfollow: (id: number) => dispatch(unfollowAC(id)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setPages: (pages: number) => dispatch(setPagesAC(pages)),
        getCurrentPage: (page) => dispatch(getCurrentPageAC(page)),
        setTotalUsersCount: (count) => dispatch(setTotalUserCountAC(count)),
        checkIsFetching: (isFet => dispatch(checkIsFetchingAC(isFet))),
    }
}*/
export const UsersContainerClass =
    connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, {
        followAC, unfollowAC, setUsersAC,
        setPagesAC, getCurrentPageAC,
        setTotalUsersCountAC, checkIsFetchingAC,
    })(UsersAPIClass);