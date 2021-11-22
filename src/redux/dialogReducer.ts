import {ActionType, DataDialogsType} from './store';

export type ADD_MESSAGE_TYPE='ADD-MESSAGE';
export type UPDATE_NEW_MESSAGE_TYPE='UPDATE-NEW-MESSAGE';
export const dialogReducer: (s: DataDialogsType, a: ActionType) => DataDialogsType = (state, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            state.messages.push({id: 6, text: state.newMessage});
            state.newMessage = '';
            return state;
        case 'UPDATE-NEW-MESSAGE':
            //debugger;
            if (action.text !== undefined)
                state.newMessage = action.text;
            // console.log(state.newMessage)
            return state;
        default:
            return state;
    }
}
export const addMessageCreator: () => ActionType = () => ({type:'ADD-MESSAGE'});
export const updateNewMessageCreator: (t: string) => ActionType = (t: string) => ({
    type: 'UPDATE-NEW-MESSAGE',
    text: t
});