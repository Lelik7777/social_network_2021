import React from 'react';
import o from './Profile.module.css';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsContainer} from './posts/PostsContainer';
import {ProfileType} from '../../../redux/profileReducer/profileReducer';
import {Preloader2} from '../../../common components/preloader/Preloader2';

type PropsType={
    profile:ProfileType;
}
export function Profile({profile,...props}:PropsType) {
    debugger
    if(profile.fullName){
        return (
            <div className={o.profile}>
                <ProfileInfo profile={profile}/>
                <PostsContainer/>
            </div>
        );
    }
    else {
     return <Preloader2/>
    }
}

