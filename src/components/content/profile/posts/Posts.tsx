import React, {ChangeEvent} from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {AddPostCreator,updateNewTextCreator} from '../../../../redux/profileReducer';
import {ActionType, PostType} from '../../../../redux/store';


type PostsType = {
    data: PostType[];
    newText: string;
    dispatch: (action: ActionType) => void;
}

export function Posts({data, newText, dispatch}: PostsType) {
    const mappedPosts = data.map(p => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        );
    });
    const onClick = () => {
        dispatch(AddPostCreator());
    };
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewTextCreator(e.currentTarget.value))
    };
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <textarea value={newText}
                          onChange={onChange}
                >
                </textarea>
                <button onClick={onClick}>add</button>
            </div>
            {mappedPosts}
        </div>
    );
}

