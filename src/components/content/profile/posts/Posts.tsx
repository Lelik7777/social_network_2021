import React from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {PostType} from '../../../../redux/state';


type PostsType = {
    data: PostType[];
    callBack: (m: string | undefined) => void;
}

export function Posts({data, callBack}: PostsType) {
    const mappedPosts = data.map(p => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        );
    });
    const textarea = React.createRef<HTMLTextAreaElement>();
    const onClick = () => {
        callBack(textarea.current?.value)
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

