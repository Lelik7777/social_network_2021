import React, {ChangeEvent} from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {MapDispatchType, MapStateType} from './PostsContainer';
import {AddPostsForm} from './AddPostsForm';


type PropsType = MapStateType & MapDispatchType;


export function Posts({posts,}: PropsType) {
    const mappedPosts = posts.map((p) => {
        return (
            <Post key={p.id} message={p.message} like={p.like}/>
        );
    });

   /* const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewText(e.currentTarget.value);
    };*/
    return (
        <div className={o.posts}>
            My posts:
            <div>
             {/*   <textarea value={newText}
                          onChange={onChange}
                >
                </textarea>
                <button onClick={addPost}>add</button>*/}
                <AddPostsForm/>
            </div>
            {mappedPosts}
        </div>
    );
}

