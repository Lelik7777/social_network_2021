import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {
    checkIsFetching,
    follow,
    getCurrentPage,
    setPages,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from '../../../redux/usersReducer';
import axios from 'axios';
import {UsersForClass} from './UsersForClass';


type PropsType = MDTPType & MSTPType;

class UsersAPIClass extends React.Component<PropsType, { value: number }> {
    constructor(props: PropsType) {
        super(props);
        this.state = {value: 1};
    }

    componentDidMount() {
        //debugger
        this.props.checkIsFetching(true);
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then(res=>{
                 this.props.setUsers(res.data.items);
                 this.props.setTotalUsersCount(res.data.totalCount);
                 this.props.checkIsFetching(false);
             })*/
        //more shortly using params
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`,
            {
                params: {
                    page: this.props.currentPage,
                    count: this.props.pageSize,
                }
            })
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
                this.props.checkIsFetching(false);
            });
    }

    getCurrentPage = (page: number) => {
        this.props.checkIsFetching(true);
        this.props.getCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`, {
            params: {
                page: page,
                count: this.props.pageSize,
            }
        })
            .then((res) => {
                this.props.setUsers(res.data.items);
                this.props.checkIsFetching(false);
            });
    }
    setCurrentPageAtFirst = (value: number) => {
        this.props.checkIsFetching(true);
        this.props.getCurrentPage(value);
        if (this.props.pageSize) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users`,{
                params:{
                    page:value,
                    count:this.props.pageSize,
                }
            })
                .then((res) => {
                    this.props.setUsers(res.data.items);
                    this.props.checkIsFetching(false);
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
                updateNewMessage={this.onChange}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                getCurrentPage={this.getCurrentPage}
                setCurrentPageAtFirst={this.setCurrentPageAtFirst}
                setUsers={this.props.setUsers}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
    follow: (id: number) => void;
    unfollow: (id: number) => void;
    setUsers: (users: UserType[]) => void;
    setPages: (pages: number) => void;
    getCurrentPage: (page: number) => void;
    setTotalUsersCount: (count: number) => void;
    checkIsFetching: (isFet: boolean) => void;
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
        follow, unfollow, setUsers,
        setPages, getCurrentPage,
        setTotalUsersCount, checkIsFetching,
    })(UsersAPIClass);