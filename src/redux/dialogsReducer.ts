import img_b from './img/ava_boy.jpeg';
import img_g from './img/ava_girl.jpeg';

enum ACTIONS_TYPE {
    ADD_MESSAGE = 'DataDialogs/ADD_MESSAGE',
    UPDATE_NEW_MESSAGE = 'DataDialogs/UPDATE_NEW_MESSAGE',
}

export type DialogType = {
    id: number;
    name: string;
    img: string;
}
export type MessageType = {
    id: number;
    text: string;
}
export type DataDialogsType = {
    dialogs: DialogType[];
    messages: MessageType[];
    newMessage: string;
}
let initialState: DataDialogsType = {
    dialogs: [
        {id: 1, name: 'Bob', img: img_b},
        {id: 2, name: 'Tom', img: img_b},
        {id: 3, name: 'Ann', img: img_g},
        {id: 4, name: 'Emma', img: img_g},
        {id: 5, name: 'Sophia', img: img_g},
        {id: 6, name: 'Nick', img: img_b},
    ],
    messages: [
        {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, neque.'},
        {id: 2, text: 'Lorem ipsum dolor sit amet.'},
        {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat.'},
        {id: 4, text: 'Lorem ipsum dolor sit amet.'},
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur explicabo natus!'
        },
    ],
    newMessage: '',
}
export const dialogsReducer = (state = initialState, action: ActionDialogsType): DataDialogsType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_MESSAGE:
            const newMessage = {id: 6, text: state.newMessage}

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessage: ''
            }

        case ACTIONS_TYPE.UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessage: action.payload.text
                //...action.payload,
            }
        default:
            return state;
    }
}

export type ActionDialogsType =AddMessageType|UpdateNewMessageType;

type AddMessageType = {
    type: ACTIONS_TYPE.ADD_MESSAGE;
}
type UpdateNewMessageType = {
    type: ACTIONS_TYPE.UPDATE_NEW_MESSAGE;
    payload: {
        text: string;
    }
}

export const addMessage = (): AddMessageType => ({type: ACTIONS_TYPE.ADD_MESSAGE,});

export const updateNewMessage = (text: string): UpdateNewMessageType => ({
    type: ACTIONS_TYPE.UPDATE_NEW_MESSAGE,
    payload: {text},
});