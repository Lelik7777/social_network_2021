import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {RootStateType} from '../../redux/store';
import {getAuthMe} from '../../redux/authReducer';

type PropsType = MDTPType & MSTPType;

class HeaderContainerWithAPI extends React.Component<PropsType> {
//dimich variant
    /* componentDidMount() {
         axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
             {withCredentials:true})
             .then(res=>{
                 console.log(res.data.data)
                 if(res.data.resultCode===0)
                 this.props.setDataAuth(res.data.data,true);
             });
     }*/

    getAuthOnClick = () => {
        this.props.getAuthMe();
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
    email: string | null;
}
type MDTPType = {
    getAuthMe: () => void;
}
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        login: state.dataAuth.data.login,
        isAuth: state.dataAuth.isAuth,
        email: state.dataAuth.data.email,
    }
}

export default connect<MSTPType, MDTPType, any, RootStateType>
(mapStateToProps, {getAuthMe})(HeaderContainerWithAPI)
