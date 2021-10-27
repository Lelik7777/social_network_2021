import React from 'react';
import o from './Post.module.css';
import ava from './img/avatar.png';
import like from './img/like.jpeg';

type PostType = {
    message: string;
    like: number;
}

export function Post(props: PostType) {
    return (
        <div className={o.post}>
            <div className={o.block}>
                <img src={ava} alt="avatar"/>
                <span className={o.message}>{props.message}</span>
            </div>
            <div className={o.like}>
                <img src={like} alt="like"/>
                <span>{props.like}</span>
            </div>
        </div>
    )
}