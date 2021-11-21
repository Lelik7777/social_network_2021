import React from 'react';
import o from './Profile.module.css';
import {Posts} from './posts/Posts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {StoreType} from '../../../redux/state';

type ProfileType = {
    /* data: DataProfileType;
     newText: string;
     addPost: () => void;
     updateNewText: (t: string) => void;*/
    store: StoreType;
}

export function Profile({store}: ProfileType) {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
            <Posts
                data={store.getState().dataProfile.posts}
                newText={store.getState().dataProfile.newText}
                addPost={store.addPost.bind(store)}
                updateNewText={store.updateNewText.bind(store)}

            />
        </div>
    );
}

