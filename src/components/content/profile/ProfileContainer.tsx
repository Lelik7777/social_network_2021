import React from 'react';
import {Profile} from './Profile';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../../redux/profileReducer/profileReducer';
import axios from 'axios';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PropsType = MDTPType & MSTPType & RouteComponentProps<{ userId: string }>

class ProfileAPIClass extends React.Component<PropsType> {

    componentDidMount() {
        //debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
            this.props.setUserProfile(res.data);
        })

    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

type MSTPType = {
    profile: ProfileType;
}
type MDTPType = {
    setUserProfile: (profile: ProfileType) => void;
}
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {profile: state.dataProfile.profile}
}

/*const ProfileWithDateURL = withRouter(ProfileAPIClass);
export const ProfileContainer =
    connect<MSTPType, MDTPType, any, RootStateType>(mapStateToProps, {setUserProfile})(ProfileWithDateURL);*/
export const ProfileContainer=
    withRouter(connect<MSTPType,MDTPType,any,RootStateType>
    (mapStateToProps,{setUserProfile})
    (ProfileAPIClass));
