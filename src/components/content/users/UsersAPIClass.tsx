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
import {UsersForClass} from './UsersForClass';
import {userAPI} from '../../../api/api';


type PropsType = MDTPType & MSTPType;
F
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
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then((res) => {
            this.props.setUsers(res.items);
            this.props.setTotalUsersCount(res.totalCount);
            this.props.checkIsFetching(false);
        });
    };

    getCurrentPage = (page: number) => {
        this.props.checkIsFetching(true);
        this.props.getCurrentPage(page);

        userAPI.getUsers(page, this.props.pageSize).then((res) => {
            this.props.setUsers(res.items);
            this.props.checkIsFetching(false);
        });
    };
    setCurrentPageAtFirst = (curPage: number) => {
        this.props.checkIsFetching(true);
        this.props.getCurrentPage(curPage);
        if (this.props.pageSize) {
           userAPI.getUsers(curPage, this.props.pageSize).then((res) => {
                this.props.setUsers(res.items);
                this.props.checkIsFetching(false);
            });
        }
        this.setState({value: 1});
    };
    onChangeValueInput = (value: number) => {
        this.setState({value: value})
    };
    setFollowOnClick = (id: number) => {

        userAPI.postFollow(id).then(() => {
            this.props.follow(id);
        })
    };
    setUnfollowOnClick = (id: number) => {
        userAPI.deleteFollow(id).then(() => {
            this.props.unfollow(id)
        })
    }

    render() {
        return (
            <UsersForClass
                value={this.state.value}
                updateNewMessage={this.onChangeValueInput}
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                getCurrentPage={this.getCurrentPage}
                setCurrentPageAtFirst={this.setCurrentPageAtFirst}
                setUsers={this.props.setUsers}
                setFollowOnClick={this.setFollowOnClick}
                setUnfollowOnClick={this.setUnfollowOnClick}
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
