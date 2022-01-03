import React from 'react';
import img_yout from './img/youtube (1).png';
import img_face from './img/facebook.png';
import img_vk from './img/vk.png';
import img_twit from './img/twiter.png';
import img_inst from './img/instagram.jpeg';
import img_git from './img/github (1) (1).png';
import {ProfileType} from '../../../../../../redux/profileReducer/profileReducer';
import o from '../../ProfileInfo.module.css';

export const Contacts = ({profile}: { profile: ProfileType }) => {
    return <div className={o.right}>
        {/* block 1*/}
        <div style={{overflow:'auto'}}>
            <div>
                <img src={img_vk} alt="vk"/>
                {profile.contacts.vk}
            </div>
            <div>
                <img src={img_yout} alt="youtube"/>
                {profile.contacts.youtube}
            </div>
            <div>
                <img src={img_inst} alt="instagram"/>
                {profile.contacts.instagram}
            </div>
            <div>
                <img src={img_twit} alt="twitter"/>
                {profile.contacts.twitter}
            </div>
        </div>
        {/* //block 2*/}
        <div className={o.block2} style={{overflow:'auto'}}>
            <div>
                <img src={img_git} alt="github"/>
                {profile.contacts.github}
            </div>
            <div>
                <img src={img_face} alt="facebook"/>
                {profile.contacts.facebook}
            </div>
            <div>
                <span> website: </span>
                <span style={{paddingLeft: '3px'}}> {profile.contacts.website}</span>
            </div>
            <div>
                <span >main Link:</span>
                <span style={{paddingLeft: '3px'}}>{profile.contacts.mainLink}</span>
            </div>
        </div>

    </div>
}