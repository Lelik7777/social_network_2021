export type PostType = {
    id: number;
    message: string;
    like: number;
}
type ContactsType = {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
}
type PhotosType = {
    small: string | null;
    large: string | null;
}
export type ProfileType = {
    aboutMe: string | null;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    fullName: string | null;
    userId: number | null;
    photos: PhotosType;
}
export type DataProfileType = {
    posts: PostType[];
    newText: string;
    profile: ProfileType;
}

let initialState: DataProfileType = {
    posts: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!', like: 10},
        {id: 3, message: 'Lorem ipsum dolor sit amet,', like: 7},
    ],
    newText: '',

    profile: {} as ProfileType,

}

enum ProfileActions {
    ADD_POST = 'profileReducer/ADD_POST',
    UPDATE_NEW_TEXT = 'profileReducer/UPDATE_NEW_TEXT',
    SET_USER_PROFILE = 'profileReducer/SET_USER_PROFILE',
}

type AddPostType = {
    type: ProfileActions.ADD_POST;
}
type UpdateNewTextType = {
    type: ProfileActions.UPDATE_NEW_TEXT;
    payload: {
        text: string;
    };
}
type SetUserProfileType = {
    type: ProfileActions.SET_USER_PROFILE;
    payload: { profile: ProfileType; };

}
export type ActionProfileType = AddPostType | UpdateNewTextType | SetUserProfileType;
export const profileReducer = (state = initialState, action: ActionProfileType): DataProfileType => {
    switch (action.type) {
        case ProfileActions.ADD_POST:
            let newPost = {id: 4, message: state.newText, like: 9};
            return {...state, posts: [...state.posts, newPost], newText: ''};
        case ProfileActions.UPDATE_NEW_TEXT:
            //debugger
            return {...state, newText: action.payload.text};
        case ProfileActions.SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        default:
            return state;
    }
}
export const addPost = () => (
    {
        type: ProfileActions.ADD_POST,
    }
);

export const updateNewText = (text: string) => (
    {
        type: ProfileActions.UPDATE_NEW_TEXT,
        payload: {text},
    });
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: ProfileActions.SET_USER_PROFILE,
        payload: {profile},
    };
};
