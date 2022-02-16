import {ThunkType} from '../store';
import {profileAPI, userAPI} from '../../api/api';
import {Dispatch} from 'redux';

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
    status: string;
}

let initialState: DataProfileType = {
    posts: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!', like: 10},
        {id: 3, message: 'Lorem ipsum dolor sit amet,', like: 7},
    ],
    newText: '',

    profile: {} as ProfileType,
    status: 'status',
}


export type ActionProfileType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
export const profileReducer = (state = initialState, action: ActionProfileType): DataProfileType => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {id: 4, message: state.newText, like: 9};
            return {...state, posts: [...state.posts, newPost], newText: ''};
        case 'UPDATE_NEW_TEXT':
            //debugger
            return {...state, newText: action.payload.text};
        case 'SET_USER_PROFILE':
            return {...state, profile: action.payload.profile}
        case 'SET_STATUS':
            return {...state, status: action.status}
        default:
            return state;
    }
}
export const addPost = () =>
    ({
        type: 'ADD_POST',
    } as const);


export const updateNewText = (text: string) => (
    {
        type: 'UPDATE_NEW_TEXT',
        payload: {text},
    } as const);
export const setUserProfile = (profile: ProfileType) =>
    ({
        type: 'SET_USER_PROFILE',
        payload: {profile},
    } as const);

export const setStatus = (status: string) =>
    ({type: 'SET_STATUS', status} as const);

export const getProfile = (id: string) =>
    async (dispatch: Dispatch<ActionProfileType>) => {
        const res = await profileAPI.getProfile(id);
        dispatch(setUserProfile(res.data));
    };
export const getStatus = (id: string) =>
    async (dispatch: Dispatch<ActionProfileType>) => {
        const res = await profileAPI.getStatus(id);
        if (res) {
            console.log(res)
            dispatch(setStatus(res.data));
        }
    }




