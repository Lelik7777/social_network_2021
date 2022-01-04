import React from 'react';
import o from '../ProfileInfo.module.css';
import {ProfileType} from '../../../../../redux/profileReducer/profileReducer';
import {Contacts} from './contacts/Contacts';

export const BlogInfo = ({profile}: { profile: ProfileType }) => {
    console.log(profile.lookingForAJob)
    return <div className={o.blog_info}>
        <div className={o.left}>
            <div className={o.about}>' {profile.aboutMe} '</div>
            <div className={o.job}>
                <input type="checkbox" defaultChecked={profile.lookingForAJob}/>
                looking for job:
                ' {profile.lookingForAJobDescription
                ? profile.lookingForAJobDescription
                : 'yes - everyday'} '
            </div>
        </div>
        <Contacts profile={profile}/>
    </div>
}