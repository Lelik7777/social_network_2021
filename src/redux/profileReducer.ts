import {ActionType, DataProfileType} from './store';

export type UPDATE_NEW_TEXT_TYPE='UPDATE-NEW-TEXT';
export type ADD_POST_TYPE='ADD-POST';
export const profileReducer: (s: DataProfileType, a: ActionType) => DataProfileType = (state, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let message = state.newText;
            state.posts.push({id: 4, message, like: 0});
            state.newText = '';
            return state;
        case 'UPDATE-NEW-TEXT':
            if (action.text !== undefined)
                state.newText = action.text;
            return state;
        default:
            return state;
    }
}
export const AddPostCreator: () => ActionType = () => ({type: 'ADD-POST'});
export const updateNewTextCreator: (t: string) => ActionType = (t: string) => ({type:'UPDATE-NEW-TEXT', text: t});
