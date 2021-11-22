import {ActionType, DataProfileType} from './store';

export const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
export const ADD_POST = 'ADD-POST';
 export const profileReducer: (s: DataProfileType, a: ActionType) => DataProfileType = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let message = state.newText;
            state.posts.push({id: 4, message, like: 0});
            state.newText = '';
            return state;
        case UPDATE_NEW_TEXT:
            if (action.text !== undefined)
                state.newText = action.text;
            return state;
        default:
            return state;
    }
}
export const AddPostCreator: () => ActionType = () => ({type: ADD_POST});
export const updateNewTextCreator: (t: string) => ActionType = (t: string) => ({type: UPDATE_NEW_TEXT, text: t});
