import React from 'react';
import o from './Profile.module.css';
import {Posts} from './posts/Posts';
import {ProfileInfo} from './profileInfo/ProfileInfo';


export function Profile() {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
}

