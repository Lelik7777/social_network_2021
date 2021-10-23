import React from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';


export function Posts() {
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <input type="text"/>
                <button>add</button>
            </div>

            <Post message={'hi,gays'} like={20}/>
            <Post message={'it`s my post'} like={15}/>

        </div>
    );
}

