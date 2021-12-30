import React, {ChangeEvent} from 'react';
import o from './Dialogs.module.css';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {Mdtptype, MstpType} from './DialogsContainer';

type PropsType = MstpType & Mdtptype

export function Dialogs({data, updateNewMessage, addMessage}: PropsType) {

    const mappedDialogs = data.dialogs.map((d) => {
        return (
            <Dialog key={d.id} name={d.name} id={d.id} img={d.img}/>
        );
    });
    const mappedMessages = data.messages.map((m) => {
        return (
            <Message key={m.id} text={m.text}/>
        );
    });
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateNewMessage(e.currentTarget.value);
    };

    return (
        <div className={o.dialogs}>
            <div className={o.dialogs_items}>
                {mappedDialogs}
            </div>
            <div className={o.messages}>
                {mappedMessages}
                <input value={data.newMessage} onChange={onChange}/>
                <button onClick={addMessage}>+
                </button>
            </div>

        </div>
    );


}


//read about OwnProps for connect

