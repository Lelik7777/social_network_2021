import {ActionType, DataProfileType} from './store';

export type UpdateNewTextType = 'updateNewText';
export type AddPostType = 'addPost';
export const profileReducer: (s: DataProfileType, a: ActionType) => DataProfileType = (state, action) => {
    switch (action.type) {
        case 'addPost':
            let message = state.newText;
            state.posts.push({id: 4, message, like: 0});
            state.newText = '';
            return state;
        case 'updateNewText':
            if (action.text !== undefined)
                state.newText = action.text;
            return state;
        default:
            return state;
    }
}
export const AddPostCreator: () => ActionType = () => ({type: 'addPost'});
export const updateNewTextCreator: (t: string) => ActionType = (t: string) => ({type: 'updateNewText', text: t});
