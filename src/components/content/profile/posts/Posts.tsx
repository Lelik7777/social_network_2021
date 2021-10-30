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
    })
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <input type="text"/>
                <button>add</button>
            </div>
            {mappedPosts}
        </div>
    );
}

