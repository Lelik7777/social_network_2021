import {ActionType, DataNavType} from './store';

let initialState: DataNavType = {
    friends: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Sophia'},

    ]
}
export const navReducer: (s: DataNavType, a: ActionType) => DataNavType = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}