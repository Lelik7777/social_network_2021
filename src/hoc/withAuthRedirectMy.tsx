import React from 'react';
import {RootStateType} from '../redux/store';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

type MSTPType = {
    isAuth: boolean;
}
const mapStateToProps = (state: RootStateType):MSTPType => {
    return {
        isAuth: state.dataAuth.isAuth,
    }
};
//example of creating of universal HOC for component react
/*function hoc<T>(Component:React.ComponentType<T>) {
    const props={};
    return <Component {...props as T}/>
}*/
export function withAuthRedirectMy<T>(Component: React.ComponentType<T>) {
   // debugger
    function redirectComponent(props: MSTPType) {
       // debugger
        const {isAuth, ...restProps} = props;
        return isAuth
            ? <Component value={200} {...restProps as T}/>
            : <Redirect to={'/Login'}/>
    }

    return connect<MSTPType, {}, {}, RootStateType>(mapStateToProps)(redirectComponent)
}
