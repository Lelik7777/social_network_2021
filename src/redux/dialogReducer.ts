import {ActionType, DataDialogsType} from './store';
import img_b from './img/ava_boy.jpeg';
import img_g from './img/ava_girl.jpeg';

export type AddMessageType = 'addMessage';
export type UpdateNewMessageType = 'updateNewMessage';

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
export const dialogReducer: (s: DataDialogsType, a: ActionType) => DataDialogsType = (state = initialState, action) => {
    switch (action.type) {
        case 'addMessage':
            state.messages.push({id: 6, text: state.newMessage});
            state.newMessage = '';
            return state;
        case 'updateNewMessage':
            //debugger;
            if (action.text !== undefined)
                state.newMessage = action.text;
            // console.log(state.newMessage)
            return state;
        default:
            return state;
    }
}
export const addMessageCreator: () => ActionType = () => ({type: 'addMessage'});
export const updateNewMessageCreator: (t: string) => ActionType = (t: string) => ({
    type: 'updateNewMessage',
    text: t
});