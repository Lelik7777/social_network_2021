import img_g from './img/ava_girl.jpeg';
import img_b from './img/ava_boy.jpeg';

const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
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
    type: typeof UPDATE_NEW_TEXT | typeof ADD_POST | typeof ADD_MESSAGE | typeof UPDATE_NEW_MESSAGE;
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
        switch (action.type) {
            case ADD_POST:
                let message = this._state.dataProfile.newText;
                this._state.dataProfile.posts.push({id: 4, message, like: 0});
                this._state.dataProfile.newText = '';
                this._rerender(this._state);
                break;
            case UPDATE_NEW_TEXT:
                if (action.text !== undefined)
                    this._state.dataProfile.newText = action.text;
                this._rerender(this._state);
                break;
            case ADD_MESSAGE:
                this._state.dataDialogs.messages.push({id: 6, text:this._state.dataDialogs.newMessage});
                this._rerender(this._state);
                this._state.dataDialogs.newMessage = '';
                break;
            case UPDATE_NEW_MESSAGE:
                //debugger;
                if (action.text !== undefined)
                    this._state.dataDialogs.newMessage = action.text;
                this._rerender(this._state);
                console.log(this._state.dataDialogs.newMessage)
                break;
        }
    }
}

export const AddPostCreator: () => ActionType = () => ({type: ADD_POST});
export const updateNewTextCreator: (t: string) => ActionType = (t: string) => ({type: UPDATE_NEW_TEXT, text: t});
export const addMessageCreator: () => ActionType = () => ({type: ADD_MESSAGE});
export const updateNewMessageCreator: (t: string) => ActionType = (t: string) => ({
    type: UPDATE_NEW_MESSAGE,
    text: t
});



