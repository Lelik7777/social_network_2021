import React from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {ActionType, PostType} from '../../../../redux/state';


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
    const textarea = React.createRef<HTMLTextAreaElement>();
    const onClick = () => {
        const action = {type: 'ADD-POST'};
        dispatch(action)
    };
    const onChange = () => {
        const action = {type: 'UPDATE-NEW-TEXT', text: textarea.current?.value};
        dispatch(action)

    };
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <textarea ref={textarea}
                          value={newText}
                          onChange={onChange}
                >
                </textarea>
                <button onClick={onClick}>add</button>
            </div>
            {mappedPosts}
        </div>
    );
}

