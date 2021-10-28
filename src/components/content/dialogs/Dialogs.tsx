import React from 'react';
import o from './Dialogs.module.css';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {DataDialogsType} from '../../../redux/state';

type DialogsType = {
    data: DataDialogsType;
}

export function Dialogs(props: DialogsType) {
    const mappedDialogs = props.data.dialogs.map(d => {
        return (
            <Dialog name={d.name} id={d.id} img={d.img}/>
        );
    });
    const mappedMessages = props.data.messages.map(m => {
        return (
            <Message id={m.id} text={m.text} />
        );
    });
    return (
        <div className={o.dialogs}>
            <div className={o.dialogs_items}>
                {mappedDialogs}
            </div>
            <div className={o.messages}>
                {mappedMessages}
            </div>

        </div>
    );


}