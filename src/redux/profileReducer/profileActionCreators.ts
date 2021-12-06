export const AddPost = () => (
    {
        type: 'ADD_POST',
    }
)as const;

export const UpdateNewText = (text: string) => (
    {
        type:'UPDATE_NEW_TEXT',
        payload: {text},
    })as const;



