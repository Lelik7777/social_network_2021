import React from 'react';
import {connect} from 'react-redux';
import {Posts} from './Posts';
import {RootStateType} from '../../../../redux/store';
import {addPost, DataProfileType, updateNewText} from '../../../../redux/profileReducer/profileReducer';


export type MapStateType = {
    data: DataProfileType;
}
export type MapDispatchType = {
    addPost: () => void;
    updateNewText: (e: string) => void;
}
const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        data: state.dataProfile
    }
}
export const PostsContainer =
    connect<MapStateType, MapDispatchType, any, RootStateType>
    (mapStateToProps,{addPost,updateNewText})(Posts);