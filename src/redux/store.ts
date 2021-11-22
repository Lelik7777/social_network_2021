import img_g from './img/ava_girl.jpeg';
import img_b from './img/ava_boy.jpeg';
import {ADD_MESSAGE_TYPE, dialogReducer, UPDATE_NEW_MESSAGE_TYPE} from './dialogReducer';
import {ADD_POST_TYPE, profileReducer, UPDATE_NEW_TEXT_TYPE} from './profileReducer';
import {navReducer} from './navReducer';

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
    newMessage: string;
}
export type DataProfileType = {
    posts: PostType[];
    newText: string;
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
export type StoreType = {
    _state: StateType;
    getState: () => StateType;
    _rerender: (s: StateType) => void;
    subscriber: (l: (s: StateType) => void) => void;
    dispatch: (a: ActionType) => void;
}
export type ActionType = {
    type: UPDATE_NEW_TEXT_TYPE| ADD_POST_TYPE  |ADD_MESSAGE_TYPE| UPDATE_NEW_MESSAGE_TYPE
    text?: string;
}
export const store: StoreType = {
    _state: {
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
            ],
            newMessage: '',
        },
        dataProfile: {
            posts: [
                {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius!', like: 10},
                {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing', like: 115},
                {id: 3, message: 'Lorem ipsum dolor sit amet,', like: 7},
            ],
            newText: '',
        },
        dataNav: {
            friends: [
                {id: 1, name: 'Bob'},
                {id: 2, name: 'Ann'},
                {id: 3, name: 'Sophia'},

            ]
        }
    },

    getState() {
        return this._state;
    },
    _rerender(s: StateType) {
    },
    subscriber(listener: (s: StateType) => void) {
        this._rerender = listener;
    },

    dispatch(action: ActionType) {
        dialogReducer(this._state.dataDialogs, action);
        profileReducer(this._state.dataProfile, action);
        navReducer(this._state.dataNav, action);
        this._rerender(this._state);
    }
}





