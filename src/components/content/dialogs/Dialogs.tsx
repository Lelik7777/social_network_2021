import React from 'react';
import o from './Dialogs.module.css';
import {Dialog} from './dialog/Dialog';
import {Message} from './message/Message';
import {ActionType, createActionAddMessage, DataDialogsType} from '../../../redux/state';

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
    const ref = React.createRef<HTMLTextAreaElement>();

    const onClick = () => {
        //undefined
        if(ref.current!==null)
        dispatch(createActionAddMessage(ref.current.value));
    };
    return (
        <div className={o.dialogs}>
            <div className={o.dialogs_items}>
                {mappedDialogs}
            </div>
            <div className={o.messages}>
                {mappedMessages}
                <textarea ref={ref}/>
                <button onClick={onClick}>+</button>
            </div>

        </div>
    );


}