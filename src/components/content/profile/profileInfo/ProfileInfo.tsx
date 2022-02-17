import React, {useState} from 'react';
import o from './ProfileInfo.module.css';
import img_small from './img/72032-200.png';
import img_big from './img/300px-IMG_1639.jpg';
import {ProfileType} from '../../../../redux/profileReducer/profileReducer';
import {PictureForProfile} from './pictureForProfile/PictureForProfile';
import {BlogInfo} from './blogInfo/BlogInfo';
import ProfileStatusContainer from './profileStatusContainer/ProfileStatusContainer';
import {Preloader2} from '../../../../common components/preloader/Preloader2';

export function ProfileInfo({profile}: { profile: ProfileType }) {
    const [toggle, setToggle] = useState(true);
    const onClick = () => setToggle(!toggle);
    if (!profile) return <Preloader2/>
    return (
        <div className={o.profile_info}>
            <PictureForProfile/>
            <div className={o.blog}>
                <div className={toggle ? o.blog_img : o.blog_img_big}>
                    {toggle
                        ? <img src={profile.photos?.small ? profile.photos.small : img_small} alt={'avatar-small'}/>
                        : <img src={profile.photos.large ? profile.photos.large : img_big} alt={'avatar-big'}/>
                    }
                    <br/>
                    <button
                        onClick={onClick}>{toggle
                        ? 'toggle to big'
                        : 'toggle to small'}
                    </button>
                    <br/>
                    <span style={{color: 'darkblue', marginLeft: '10%', fontSize: '1.3rem'}}>{profile.fullName}</span>

                </div>

                <BlogInfo profile={profile}/>
            </div>
            <ProfileStatusContainer/>
        </div>
    );
}

