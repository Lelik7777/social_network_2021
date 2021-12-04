import o from './Message.module.css';
import React from 'react';


type PropsType = {
    text: string;
}

export function Message({text}: PropsType) {
    return (
        <div className={o.wrapper}>
            <div className={o.corner}></div>
            <div className={o.message}>{text}</div>
        </div>
    )
}