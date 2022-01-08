import React from 'react';
import {connect} from 'react-redux';
import {Header} from './Header';
import {RootStateType} from '../../redux/store';
import {DataForAuthType, setDataAuth} from '../../redux/authReducer';
import {userAPI} from '../../api/api';

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
        //debugger
        userAPI.getAuthMe().then(res => {
            console.log(res)
            this.props.setDataAuth(res.data, true);

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
    email: string | null;
}
type MDTPType = {
    setDataAuth: (data: DataForAuthType, isAuth: boolean) => void;
}
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        login: state.dataAuth.data.login,
        isAuth: state.dataAuth.isAuth,
        email: state.dataAuth.data.email,
    }
}

export default connect<MSTPType, MDTPType, any, RootStateType>
(mapStateToProps, {setDataAuth})(HeaderContainerWithAPI)
