import {connect} from 'react-redux';
import {Posts} from './Posts';
import {RootStateType} from '../../../../redux/store';
import {PostType} from '../../../../redux/profileReducer/profileReducer';


export type MapStateType = {
    posts:PostType[];
}
export type MapDispatchType = {
}
const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        posts: state.dataProfile.posts,
    }
}
export const PostsContainer =
    connect<MapStateType, MapDispatchType, any, RootStateType>
    (mapStateToProps,{})(Posts);