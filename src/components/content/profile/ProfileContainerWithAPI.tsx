import React from 'react';
import {Profile} from './Profile';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {getProfile, getStatus, ProfileType} from '../../../redux/profileReducer/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import { withAuthRedirectMy } from '../../../hoc/withAuthRedirectMy';
import {compose} from 'redux';


type PropsType = MDTPType & MSTPType & RouteComponentProps<{ userId: string }>

class ProfileAPIClass extends React.Component<PropsType> {

    componentDidMount() {
        //debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '21240';
        }
        this.props.getProfile(userId);

    }
    render() {
       // debugger
        console.log(this.props.profile)
        return <Profile profile={this.props.profile}/>;

    }
}

type MSTPType = {
    profile: ProfileType;
}
type MDTPType = {
    getProfile: (id: string) => void;
    getStatus:(id:string)=>void;
}
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        profile: state.dataProfile.profile,
    }
}

/*const ProfileWithDateURL = withRouter(ProfileAPIClass);
export const ProfileContainer =
    connect<MSTPType, MDTPType, any, RootStateType>(mapStateToProps, {setUserProfile})(ProfileWithDateURL);*/
/*
export const ProfileContainerWithAPI =
    withAuthRedirectMy(withRouter(connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, {getProfile})
    (ProfileAPIClass)));
*/
export const ProfileContainerWithAPI = compose<React.ComponentType>(
        connect<MSTPType, MDTPType, any, RootStateType>
        (mapStateToProps, {getProfile,getStatus}),
        withRouter,
        withAuthRedirectMy
    )(ProfileAPIClass)