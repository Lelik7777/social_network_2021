import React from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {PostType} from '../../../../redux/state';


type PostsType = {
    data: PostType[];
}

export function Posts({data}: PostsType) {
    const mappedPosts = data.map(p => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        );
    });
const textarea=React.createRef<HTMLTextAreaElement>();
const text=textarea.current?.value;
    const onClick = ()=>{
        alert(textarea.current?.value);
    };
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <textarea ref={textarea}></textarea>
                <button onClick={onClick}>add</button>
            </div>
            {mappedPosts}
        </div>
    );
}

