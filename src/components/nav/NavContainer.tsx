import React from 'react';
import {Nav} from './Nav';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/store';
import {DataNavType} from '../../redux/navReducer';

export type MapStateType = {
    data: DataNavType;
}
export type MapDispatchType ={

}
const mapStateToProps = (state: RootStateType): MapStateType => {
    return {data: state.dataNav};
}
export const NavContainer = connect<MapStateType, MapDispatchType, any, RootStateType>(mapStateToProps)(Nav);