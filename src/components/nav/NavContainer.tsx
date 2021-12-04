import React from 'react';
import {Nav} from './Nav';
import {connect} from 'react-redux';
import {ReducersType} from '../../redux/redux-store';
import {DataNavType} from '../../redux/navReducer';

export type MapStateType = {
    data: DataNavType;
}
export type MapDispatchType ={

}
const mapStateToProps = (state: ReducersType): MapStateType => {
    return {data: state.dataNav};
}
export const NavContainer = connect<MapStateType, MapDispatchType, any, ReducersType>(mapStateToProps)(Nav);