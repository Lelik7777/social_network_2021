import React from 'react';
import o from './Profile.module.css';
import {Posts} from './posts/Posts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {StoreType} from '../../../redux/store';

type ProfileType = {
    store: StoreType;
}

export function Profile({store}: ProfileType) {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
            <Posts
                data={store.getState().dataProfile.posts}
                newText={store.getState().dataProfile.newText}
                dispatch={store.dispatch.bind(store)}
            />
        </div>
    );
}

