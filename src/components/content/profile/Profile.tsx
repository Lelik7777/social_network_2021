import React from 'react';
import o from './Profile.module.css';
import {Posts} from './posts/Posts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionType, DataProfileType} from '../../../redux/store';

type ProfileType = {
    data: DataProfileType;
    dispatch: (action: ActionType) => void;
}

export function Profile({data, dispatch}: ProfileType) {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
            <Posts
                data={data.posts}
                newText={data.newText}
                dispatch={dispatch}
            />
        </div>
    );
}

