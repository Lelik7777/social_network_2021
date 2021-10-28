import React from 'react';
import o from './Profile.module.css';
import {Posts} from './posts/Posts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {DataProfileType} from '../../../redux/state';

type ProfileType = {
    data: DataProfileType
}

export function Profile(props: ProfileType) {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
            <Posts data={props.data.posts}/>
        </div>
    );
}

