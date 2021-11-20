import React from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {PostType} from '../../../../redux/state';


type PostsType = {
    data: PostType[];
    newText: string;
    addPost: () => void;
    updateNewText: (t: string) => void;
}

export function Posts({data, addPost, newText, updateNewText}: PostsType) {
    const mappedPosts = data.map(p => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        );
    });
    const textarea = React.createRef<HTMLTextAreaElement>();
    const onClick = () => {
        addPost();

    };
    const onChange = () => {
        updateNewText(textarea.current?.value as string);
        //console.log(textarea.current?.value)
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

