export type BlockType = {
    id: number;
    name: string;
}
export type DataNavType = {
    friends: BlockType[];
}
let initialState: DataNavType = {
    friends: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Sophia'},

    ]
}
export const navReducer= (state = initialState, action:any):DataNavType => {
    switch (action.type) {
        default:
            return state;
    }
}