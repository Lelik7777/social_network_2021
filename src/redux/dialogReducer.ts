import {ActionType, DataDialogsType} from './store';

export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
export const dialogReducer: (s: DataDialogsType, a: ActionType) => DataDialogsType = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            state.messages.push({id: 6, text: state.newMessage});
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            //debugger;
            if (action.text !== undefined)
                state.newMessage = action.text;
            // console.log(state.newMessage)
            return state;
        default:
            return state;
    }
}
export const addMessageCreator: () => ActionType = () => ({type: ADD_MESSAGE});
export const updateNewMessageCreator: (t: string) => ActionType = (t: string) => ({
    type: UPDATE_NEW_MESSAGE,
    text: t
});