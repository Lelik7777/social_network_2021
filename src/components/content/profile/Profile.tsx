import React from 'react';
import o from './Profile.module.css';
import {Posts} from './posts/Posts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {DataProfileType} from '../../../redux/state';

type ProfileType = {
    data: DataProfileType;
    newText: string;
    addPost: () => void;
    updateNewText: (t: string) => void;
}

export function Profile({data, addPost, newText, updateNewText}: ProfileType) {
    return (
        <div className={o.profile}>
            <ProfileInfo/>
            <Posts
                data={data.posts}
                newText={newText}
                addPost={addPost}
                updateNewText={updateNewText}
            />
        </div>
    );
}

