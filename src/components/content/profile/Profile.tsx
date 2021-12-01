import React from 'react';
import o from './Profile.module.css';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {ActionType, DataProfileType} from '../../../redux/store';
import {PostsContainer} from './posts/PostsContainer';

type ProfileType = {
    data: DataProfileType;
    dispatch: (action: ActionType) => void;
}

export function Profile({data, dispatch}: ProfileType) {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
          <PostsContainer data={data} dispatch={dispatch} />
        </div>
    );
}

