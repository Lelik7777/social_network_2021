import React from 'react';
import o from './Profile.module.css';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsContainer} from './posts/PostsContainer';


export function Profile() {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
}

