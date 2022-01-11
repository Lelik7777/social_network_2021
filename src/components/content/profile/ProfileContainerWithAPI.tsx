import React from 'react';
import {Profile} from './Profile';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {getProfile, ProfileType} from '../../../redux/profileReducer/profileReducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';

type PropsType = MDTPType & MSTPType & RouteComponentProps<{ userId: string }>

class ProfileAPIClass extends React.Component<PropsType> {

    componentDidMount() {
        // debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '21240';
        }
        this.props.getProfile(userId);
    }

    render() {

        return <Profile profile={this.props.profile}/>;

    }
}

type MSTPType = {
    profile: ProfileType;
    isAuth: boolean;
}
type MDTPType = {
    getProfile: (id: string) => void;
}
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        profile: state.dataProfile.profile,
        isAuth: state.dataAuth.isAuth,
    }
}

/*const ProfileWithDateURL = withRouter(ProfileAPIClass);
export const ProfileContainer =
    connect<MSTPType, MDTPType, any, RootStateType>(mapStateToProps, {setUserProfile})(ProfileWithDateURL);*/
export const ProfileContainerWithAPI =
   withAuthRedirect(withRouter(connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, {getProfile})
    (ProfileAPIClass)));
