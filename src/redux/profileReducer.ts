import {ActionType, DataProfileType} from './store';

export type UpdateNewTextType = 'updateNewText';
export type AddPostType = 'addPost';

let initialState: DataProfileType = {
    posts: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!', like: 10},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', like: 115},
        {id: 3, message: 'Lorem ipsum dolor sit amet,', like: 7},
    ],
    newText: '',
}
export const profileReducer: (s: DataProfileType, a: ActionType) => DataProfileType = (state = initialState, action) => {
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
