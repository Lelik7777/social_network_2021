import o from './Message.module.css';
import React from 'react';
import {MessageType} from '../../../../redux/state';


export function Message({id, text}: MessageType) {
    return (
        <div className={o.wrapper}>
            <div className={o.corner}></div>
            <div className={o.message}>{text}</div>
        </div>
    )
}