import img_g from './img/ava_girl.jpeg';
import img_b from './img/ava_boy.jpeg';
import {rerender} from '../rerender';

export type DialogType = {
    id: number;
    name: string;
    img: string;
}
export type MessageType = {
    id: number;
    text: string | undefined;
}
export type PostType = {
    id: number;
    message: string | undefined;
    like: number;
}
export type DataDialogsType = {
    dialogs: DialogType[];
    messages: MessageType[];
}
export type DataProfileType = {
    posts: PostType[]
}
export type BlockType = {
    id: number;
    name: string;
}
export type DataNavType = {
    friends: BlockType[];
}
export type StateType = {
    dataDialogs: DataDialogsType;
    dataProfile: DataProfileType;
    dataNav: DataNavType;
}
export const state: StateType = {
    dataDialogs: {
        dialogs: [
            {id: 1, name: 'Bob', img: img_b},
            {id: 2, name: 'Tom', img: img_b},
            {id: 3, name: 'Ann', img: img_g},
            {id: 4, name: 'Emma', img: img_g},
            {id: 5, name: 'Sophia', img: img_g},
            {id: 6, name: 'Nick', img: img_b},
        ],
        messages: [
            {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, neque.'},
            {id: 2, text: 'Lorem ipsum dolor sit amet.'},
            {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat.'},
            {id: 4, text: 'Lorem ipsum dolor sit amet.'},
            {
                id: 5,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur explicabo natus!'
            },
        ]
    },
    dataProfile: {
        posts: [
            {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!', like: 10},
            {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', like: 115},
            {id: 3, message: 'Lorem ipsum dolor sit amet,', like: 7},
        ]
    },
    dataNav: {
        friends: [
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Ann'},
            {id: 3, name: 'Sophia'},

        ]
    }
}
export const addPost = (message: string | undefined) => {
    // debugger;
    state.dataProfile.posts.push({id: 4, message, like: 0});
    rerender(state);
}
export const addMessage = (text: string | undefined) => {

    state.dataDialogs.messages.push({id: 6, text});
    rerender(state);
}


