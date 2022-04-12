import React from 'react';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsContainer} from './posts/PostsContainer';
import {ProfileType} from '../../../redux/profileReducer/profileReducer';

type PropsType={
    profile:ProfileType;
}
export function Profile({profile,...props}:PropsType) {
    return(
        <div>
            <ProfileInfo profile={profile}/>
            <PostsContainer/>
        </div>
    )
}

