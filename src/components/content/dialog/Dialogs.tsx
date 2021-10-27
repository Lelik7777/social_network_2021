import React from 'react';
import {NavLink} from 'react-router-dom';
import o from './Dialogs.module.css';

export type DialogType = {
    name: string;
    id: number;
}

export function Dialog(props: DialogType) {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={o.dialog}>
            <NavLink to={path} activeClassName={o.active}>{props.name}</NavLink>
        </div>
    )
}

export type MessageType = {
    text: string;
}

export function Message(props: MessageType) {
    return (
        <div className={o.wrapper}>
            <div className={o.corner}></div>
            <div className={o.message}>{props.text}</div>
        </div>
    )
}

export function Dialogs() {
    return (
        <div className={o.dialogs}>
            <div className={o.dialogs_items}>
                <Dialog name={'Nick'} id={1}/>
                <Dialog name={'Bob'} id={2}/>
                <Dialog name={'Ann'} id={3}/>
                <Dialog name={'Sophia'} id={4}/>
                <Dialog name={'Emma'} id={5}/>
            </div>
            <div className={o.messages}>
                <Message text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda\n' +
                '                        cumque doloremque ducimus eius enim illum laudantium, minima nam nisi officiis'}/>
                <Message text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid\n' +
                '                        asperiores ea eum, iusto odit quasi saepe suscipit tempore. Ea earum ex facere laboriosam\n' +
                '                        laudantium magni officiis quisquam quod repellendus tempore'}/>
                <Message text={'Lorem ipsum dolor sit amet'}/>
                <Message text={'Lorem ipsum dolor sit amet.'}/>
            </div>

        </div>
    )
}