import {Redirect} from 'react-router-dom';
import React from 'react';
import {RootStateType} from '../redux/store';
import {connect} from 'react-redux';



type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.dataAuth.isAuth,
    }
}

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {
        const {isAuth, ...restProps} = props;
        return isAuth ? <Component {...restProps as T} /> : <Redirect to={'/login'}/>
    }

    return connect<MapStatePropsType, {}, {}, RootStateType>(mapStateToProps)
    (RedirectComponent);
}