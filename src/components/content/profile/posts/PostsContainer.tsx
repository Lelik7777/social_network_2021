import {connect} from 'react-redux';
import {Posts} from './Posts';
import {RootStateType} from '../../../../redux/store';
import {addPost, PostType, updateNewText} from '../../../../redux/profileReducer/profileReducer';


export type MapStateType = {
    posts:PostType[];
    newText:string;
}
export type MapDispatchType = {
    addPost: () => void;
    updateNewText: (e: string) => void;
}
const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        posts: state.dataProfile.posts,
        newText:state.dataProfile.newText,
    }
}
export const PostsContainer =
    connect<MapStateType, MapDispatchType, any, RootStateType>
    (mapStateToProps,{addPost,updateNewText})(Posts);