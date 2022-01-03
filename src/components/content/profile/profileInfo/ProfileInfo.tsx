import React, {useState} from 'react';
import o from './ProfileInfo.module.css';
import img_small from './img/72032-200.png';
import img_big from './img/300px-IMG_1639.jpg';
import {ProfileType} from '../../../../redux/profileReducer/profileReducer';
import {PictureForProfile} from './pictureForProfile/PictureForProfile';
import {BlogInfo} from './blogInfo/BlogInfo';

export function ProfileInfo({profile}:{profile:ProfileType}) {
    const [toggle, setToggle] = useState(true);
    const onClick = () => setToggle(!toggle);
    return (
        <div className={o.profile_info}>
            <PictureForProfile/>
            <div className={o.blog}>
                <div className={o.blog_img}>
                    {toggle
                        ? <img src={profile.photos.small ? profile.photos.small : img_small}/>
                        : <img src={profile.photos.large ? profile.photos.large : img_big}/>
                    }
                    <br/>
                    <button
                        onClick={onClick}>{toggle
                        ? 'toggle to big picture'
                        : 'toggle to small picture'}
                    </button>
                    <br/>
                    <span>{profile.fullName}</span>
                </div>
                <BlogInfo profile={profile}/>
            </div>
        </div>
    );
}