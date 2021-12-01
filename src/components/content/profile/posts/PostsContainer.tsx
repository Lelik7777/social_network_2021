import {AddPostCreator, updateNewTextCreator} from '../../../../redux/profileReducer';
import React, {ChangeEvent} from 'react';
import {ActionType, DataProfileType} from '../../../../redux/store';
import {Posts} from './Posts';

type PropsType = {
    data: DataProfileType;
    dispatch: (action: ActionType) => void;
}
export const PostsContainer = ({data,dispatch}: PropsType) => {
    const onClick = () => {
        dispatch(AddPostCreator());
    };
    const onChange = (s:string) => {
        dispatch(updateNewTextCreator(s))
    };
    return (<Posts
        data={data.posts}
        newText={data.newText}
        onChange={onChange}
        onClick={onClick}
        />)
}