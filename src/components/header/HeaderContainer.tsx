import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {RootStateType} from '../../redux/store';
import {DataForAuthType, setDataAuth} from '../../redux/authReducer';
import axios from 'axios';

class HeaderContainer extends React.Component<MDTPType & MSTPType> {
    getAuthOnClick() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
            {withCredentials: true}).then(res => {
            console.log(res)
        });
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       callback={this.getAuthOnClick}
        />;
    }
}

type MSTPType = {
    login: string | null;
    isAuth: boolean;
}
type MDTPType = {
    setDataAuth: (data: DataForAuthType, isAuth: boolean) => void;
}
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        login: state.dataAuth.data.login,
        isAuth: state.dataAuth.isAuth,
    }
}
export default connect<MSTPType, MDTPType, any, RootStateType>
(mapStateToProps, {setDataAuth})(HeaderContainer)