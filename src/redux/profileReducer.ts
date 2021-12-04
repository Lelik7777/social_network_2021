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
        case 'ADD-POST':
            let newPost = {id: 4, message: state.newText, like: 9};
            return {...state, posts: [...state.posts, newPost], newText: ''};
        case 'UPDATE-NEW-TEXT':
            return {...state, newText: action.payload.text}
        default:
            return state;
    }
}
export type ActionProfileType = ReturnType<typeof addPostAC | typeof updateNewTextAC>
export const addPostAC = () => ({type: 'ADD-POST'}) as const;
export const updateNewTextAC = (text: string) => ({type: 'UPDATE-NEW-TEXT', payload: {text}}) as const;
