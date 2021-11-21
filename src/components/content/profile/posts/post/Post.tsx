import React from 'react';
import o from './Post.module.css';
import ava from './img/avatar.png';
import like_img from './img/like.jpeg';
import {PostType} from '../../../../../redux/state';


export function Post({message, id, like,}: PostType) {
    return (
        <div className={o.post}>
            <div className={o.block}>
                <img src={ava} alt="avatar"/>
                <span className={o.message}>{message}</span>
            </div>
            <div className={o.like}>
                <img src={like_img} alt="like"/>
                <span>{like}</span>
            </div>
        </div>
    )
}