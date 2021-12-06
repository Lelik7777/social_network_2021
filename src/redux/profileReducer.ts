enum ACTIONS_TYPE {
    ADD_POST = 'DataProfile/ADD_POST',
    UPDATE_NEW_TEXT = 'DataProfile/UPDATE_NEW_TEXT',
}

export type PostType = {
    id: number;
    message: string;
    like: number;
}

export type DataProfileType = {
    posts: PostType[];
    newText: string;
}
let initialState: DataProfileType = {
    posts: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!', like: 10},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', like: 115},
        {id: 3, message: 'Lorem ipsum dolor sit amet,', like: 7},
    ],
    newText: '',
}
export const profileReducer = (state = initialState, action: ActionProfileType): DataProfileType => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            let newPost = {id: 4, message: state.newText, like: 9};
            return {...state, posts: [...state.posts, newPost], newText: ''};
        case ACTIONS_TYPE.UPDATE_NEW_TEXT:
            return {...state, newText: action.payload.text}
        default:
            return state;
    }
}
export type ActionProfileType = AddPostType | UpdateNewText;
type AddPostType = {
    type: ACTIONS_TYPE.ADD_POST;
}
type UpdateNewText = {
    type: ACTIONS_TYPE.UPDATE_NEW_TEXT;
    payload: {
        text: string,
    }
}
export const AddPost = (): AddPostType => (
    {
        type: ACTIONS_TYPE.ADD_POST,
    }
);
export const UpdateNewText = (text: string): UpdateNewText => (
    {
        type: ACTIONS_TYPE.UPDATE_NEW_TEXT,
        payload: {text},
    });
