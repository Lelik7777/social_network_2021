import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Posts} from './Posts';
import {RootStateType} from '../../../../redux/store';
import {DataProfileType} from '../../../../redux/profileReducer/profileReducer';
import {addPost, updateNewText} from '../../../../redux/profileReducer/profileActionCreators';
import {ActionProfileType} from '../../../../redux/profileReducer/profileReducerActionTypes';


export type MapStateType = {
    data: DataProfileType;
}
export type MapDispatchType = {
    onClick: () => void;
    onChange: (e: string) => void;
}
const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        data: state.dataProfile
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionProfileType>) => {
    return {
        onClick: () => dispatch(addPost()),
        onChange: (e: string) => dispatch(updateNewText(e)),
    }
}
export const PostsContainer = connect<MapStateType, MapDispatchType, any, RootStateType>(mapStateToProps,mapDispatchToProps)(Posts);