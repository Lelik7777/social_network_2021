import o from './Message.module.css';
import React from 'react';
import {MessageType} from '../../../../redux/state';


export function Message(props: MessageType) {
    return (
        <div className={o.wrapper}>
            <div className={o.corner}></div>
            <div className={o.message}>{props.text}</div>
        </div>
    )
}