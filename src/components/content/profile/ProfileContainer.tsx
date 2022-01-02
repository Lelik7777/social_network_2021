import React from 'react';
import {Profile} from './Profile';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../../redux/profileReducer/profileReducer';
import axios from 'axios';

type PropsType = MSTPType&MDTPType;

class ProfileAPIClass extends React.Component<PropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
            console.log(res.data)
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
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
export const ProfileContainer =
    connect<MSTPType, MDTPType, any, RootStateType>(mapStateToProps, {setUserProfile})(ProfileAPIClass);