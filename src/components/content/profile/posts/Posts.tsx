import React, {ChangeEvent} from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {MapDispatchType, MapStateType} from './PostsContainer';


type PropsType = MapStateType & MapDispatchType;


export function Posts({data, onClick, onChange}: PropsType) {
    const mappedPosts = data.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} like={p.like}/>
        );
    });

    const onChange1 = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.currentTarget.value);
    };
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <textarea value={data.newText}
                          onChange={onChange1}
                >
                </textarea>
                <button onClick={onClick}>add</button>
            </div>
            {mappedPosts}
        </div>
    );
}

