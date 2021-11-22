import {ActionType, DataDialogsType} from './store';

export type AddMessageType = 'addMessage';
export type UpdateNewMessageType = 'updateNewMessage';
export const dialogReducer: (s: DataDialogsType, a: ActionType) => DataDialogsType = (state, action) => {
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