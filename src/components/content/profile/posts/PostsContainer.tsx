import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Posts} from './Posts';
import {ActionProfileType, addPostAC, DataProfileType, updateNewTextAC} from '../../../../redux/profileReducer';
import {ReducersType} from '../../../../redux/redux-store';


export type MapStateType = {
    data: DataProfileType;
}
export type MapDispatchType = {
    onClick: () => void;
    onChange: (e: string) => void;
}
const mapStateToProps = (state: ReducersType): MapStateType => {
    return {
        data: state.dataProfile
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionProfileType>) => {
    return {
        onClick: () => dispatch(addPostAC()),
        onChange: (e: string) => dispatch(updateNewTextAC(e)),
    }
}
export const PostsContainer = connect<MapStateType, MapDispatchType, any, ReducersType>(mapStateToProps,mapDispatchToProps)(Posts);