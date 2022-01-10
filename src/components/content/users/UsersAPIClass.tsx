import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {getCurPage, getUsers, setFollow, setPageAtBegin, setUnFollow, UserType} from '../../../redux/usersReducer';
import {UsersForClass} from './UsersForClass';


type PropsType = MDTPType & MSTPType;

class UsersAPIClass extends React.Component<PropsType, { value: number }> {
    constructor(props: PropsType) {
        super(props);
        this.state = {value: 1};
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    getCurrentPageOnClick = (page: number) => {
        this.props.getCurPage(page, this.props.pageSize);
    };
    setPageAtBeginOnClick = (curPage: number) => {
        this.props.setPageAtBegin(curPage, this.props.pageSize);
        this.setState({value: 1});
    };
    onChangeValueInput = (value: number) => {
        this.setState({value: value})
    };
    setFollowOnClick = (id: number) => {
        this.props.setFollow(id);
    };
    setUnfollowOnClick = (id: number) => {
        this.props.setUnFollow(id);
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
                getCurrentPage={this.getCurrentPageOnClick}
                setPageAtBegin={this.setPageAtBeginOnClick}
                setFollowOnClick={this.setFollowOnClick}
                setUnfollowOnClick={this.setUnfollowOnClick}
                isFetching={this.props.isFetching}
                isFollowInProcessing={this.props.isFollowInProcessing}
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
    isFollowInProcessing: number[];
};
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        users: state.dataUsers.items,
        pageSize: state.dataUsers.pageSize,
        totalUsersCount: state.dataUsers.totalUsersCount,
        currentPage: state.dataUsers.currentPage,
        isFetching: state.dataUsers.isFetching,
        isFollowInProcessing: state.dataUsers.isFollowInProcessing,
    }
};
type MDTPType = {
    //когда типизируем санку,то она по итогу(внутренняя ф-ция) возвращает void
    getUsers: (page: number, count: number) => void;
    getCurPage: (page: number, count: number) => void;
    setPageAtBegin: (page: number, count: number) => void;
    setFollow: (id: number) => void;
    setUnFollow: (id: number) => void;
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
        getUsers, getCurPage, setPageAtBegin,
        setFollow, setUnFollow,
    })(UsersAPIClass);
