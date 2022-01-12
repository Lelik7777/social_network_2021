import React, {Component} from 'react';
import {RootStateType} from '../redux/store';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

type MSTPType = {
    isAuth: boolean;
}
const mapStateToProps = (state: RootStateType) => {
    return {isAuth: state.dataAuth.isAuth,};
};

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    function redirectComponent(props: MSTPType) {
        const {isAuth, ...rest} = props;
        return isAuth ? <Component {...rest as T} /> : <Redirect to={'/Login'}/>
    }

    return connect<MSTPType, {}, {}, RootStateType>(mapStateToProps)(redirectComponent);
}