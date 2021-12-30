import React, {ChangeEvent} from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {MapDispatchType, MapStateType} from './PostsContainer';


type PropsType = MapStateType & MapDispatchType;


export function Posts({data, addPost, updateNewText}: PropsType) {
    const mappedPosts = data.posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} like={p.like}/>
        );
    });

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewText(e.currentTarget.value);
    };
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <textarea value={data.newText}
                          onChange={onChange}
                >
                </textarea>
                <button onClick={addPost}>add</button>
            </div>
            {mappedPosts}
        </div>
    );
}

