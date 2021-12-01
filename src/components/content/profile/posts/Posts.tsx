import React, {ChangeEvent} from 'react';
import o from './Posts.module.css'
import {Post} from './post/Post';
import {PostType} from '../../../../redux/store';


type PostsType = {
    data: PostType[];
    newText: string;
    onClick: () => void;
    onChange: (s: string) => void;
}

export function Posts({data, newText, onChange, onClick}: PostsType) {
    const mappedPosts = data.map(p => {
        return (
            <Post id={p.id} message={p.message} like={p.like}/>
        );
    });

    const onChange1 = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.currentTarget.value);
    };
    return (
        <div className={o.posts}>
            My posts:
            <div>
                <textarea value={newText}
                          onChange={onChange1}
                >
                </textarea>
                <button onClick={onClick}>add</button>
            </div>
            {mappedPosts}
        </div>
    );
}

