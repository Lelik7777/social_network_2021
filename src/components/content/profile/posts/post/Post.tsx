import React from 'react';
import o from './Post.module.css';
import ava from './avatar.png';

type PostType = {
    message: string;
    like: number;
}

export function Post(props: PostType) {
    console.log(props)
    return (
        <div className={o.post}>
            <div className={o.block}>
                <img
                    src={ava}
                    alt="avatar"/>
                <span className={o.message}>{props.message}</span>
            </div>
            <div className="like">like:{props.like}</div>
        </div>
    )
}