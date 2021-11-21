import img_g from './img/ava_girl.jpeg';
import img_b from './img/ava_boy.jpeg';


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
    addMessage: (t: string) => void;
    addPost: () => void;
    updateNewText: (t: string) => void;
    _rerender: (s: StateType) => void;
    subscriber: (l: (s: StateType) => void) => void;
}
/*export const state: StateType = {
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
}
export const addPost = () => {
    // debugger;
    let message = state.dataProfile.newText;
    state.dataProfile.posts.push({id: 4, message, like: 0});
    state.dataProfile.newText = '';
    rerender(state);
}
export const addMessage = (text: string | undefined) => {

    state.dataDialogs.messages.push({id: 6, text});
    rerender(state);
}
export const updateNewText = (text: string) => {
    state.dataProfile.newText = text;
    rerender(state);
    //console.log(state.dataProfile.newText);
}
let rerender = (s: StateType) => {
}
export const subscriber = (listener: (s: StateType) => void) => {
    rerender = listener;
}*/
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
            ]
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
    addPost() {
        //debugger
        let message = this._state.dataProfile.newText;
        this._state.dataProfile.posts.push({id: 4, message, like: 0});
        this._state.dataProfile.newText = '';
        this._rerender(this._state);
    },
    getState() {
        return this._state;
    },
    addMessage(text: string) {

        this._state.dataDialogs.messages.push({id: 6, text});
        this._rerender(this._state);
    },
    updateNewText(text: string) {
        this._state.dataProfile.newText = text;
        this._rerender(this._state);
        //console.log(state.dataProfile.newText);
    },
    _rerender(s: StateType) {
    },
    subscriber(listener: (s: StateType) => void) {
        this._rerender = listener;
    },
}


