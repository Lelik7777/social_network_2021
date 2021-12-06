import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Posts} from './Posts';
import {ActionProfileType, AddPost, DataProfileType, UpdateNewText} from '../../../../redux/profileReducer';
import {RootStateType} from '../../../../redux/store';


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
        onClick: () => dispatch(AddPost()),
        onChange: (e: string) => dispatch(UpdateNewText(e)),
    }
}
export const PostsContainer = connect<MapStateType, MapDispatchType, any, RootStateType>(mapStateToProps,mapDispatchToProps)(Posts);