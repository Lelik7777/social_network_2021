import React, {ChangeEvent} from 'react';
import o from './Dialogs.module.css';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {ActionType,DataDialogsType} from '../../../redux/store';
import {addMessageCreator, updateNewMessageCreator} from '../../../redux/dialogReducer';

type DialogsType = {
    data: DataDialogsType;
    dispatch: (a: ActionType) => void;

}

export function Dialogs({data, dispatch}: DialogsType) {
    const mappedDialogs = data.dialogs.map(d => {
        return (
            <Dialog name={d.name} id={d.id} img={d.img}/>
        );
    });
    const mappedMessages = data.messages.map(m => {
        return (
            <Message id={m.id} text={m.text}/>
        );
    });
    const onClick = () => {
        dispatch(addMessageCreator());
    };
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageCreator(e.currentTarget.value))
    };
    return (
        <div className={o.dialogs}>
            <div className={o.dialogs_items}>
                {mappedDialogs}
            </div>
            <div className={o.messages}>
                {mappedMessages}
                <textarea value={data.newMessage}
                          onChange={onChange}/>
                <button onClick={onClick}>+
                </button>
            </div>

        </div>
    );


}