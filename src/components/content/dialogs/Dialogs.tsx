import React, {ChangeEvent} from 'react';
import o from './Dialogs.module.css';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {MDTPType, MSTPType} from './DialogsContainer';
import {AddMessageForm} from './AddMessageForm';

type PropsType = MSTPType & MDTPType

export function Dialogs({data}: PropsType) {

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
   /* const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateNewMessage(e.currentTarget.value);
    };*/
    return (
        <div className={o.dialogs}>
            <div className={o.dialogs_items}>
                {mappedDialogs}
            </div>
            <div className={o.messages}>
                {mappedMessages}
               {/* <input value={data.newMessage} onChange={onChange}/>
                <button onClick={addMessage}>+</button>*/}
                <AddMessageForm/>
            </div>

        </div>
    );

}

//read about OwnProps for connect

