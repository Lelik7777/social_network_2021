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

            <Post
                message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, harum!'}
                like={20}/>
            <Post
                message={'Lorem ipsum dolor sit amet, consectetur adipisicing.'} like={15}/>

        </div>
    );
}

