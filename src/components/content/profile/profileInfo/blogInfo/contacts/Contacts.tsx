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
    //console.log(profile.contacts.website)
    return <div className={o.right}>
        {/* block 1*/}
        <div className={o.block1}>
            <div>
                <img src={img_vk} alt="vk"/>
                <a href={profile.contacts.vk
                    ? profile.contacts.vk
                    : 'https://vk.com/'}
                   target="_blank" rel={'noreferrer'}>
                    {profile.contacts.vk ? profile.contacts.vk : 'vk'}</a>
            </div>
            <div>
                <img src={img_yout} alt="youtube"/>
                <a href={profile.contacts.youtube
                    ? profile.contacts.youtube
                    : 'https://www.youtube.com/'}
                   target="_blank"
                   rel={'noreferrer'}>{profile.contacts.youtube
                    ? profile.contacts.youtube : 'youtube'}</a>
            </div>
            <div>
                <img src={img_inst} alt="instagram"/>
                <a href={profile.contacts.instagram
                    ? profile.contacts.instagram
                    : 'https://www.instagram.com/'}
                   target="_blank"
                   rel={'noreferrer'}>
                    {profile.contacts.instagram
                        ? profile.contacts.instagram : 'instagram'}</a>
            </div>
            <div>
                <img src={img_twit} alt="twitter"/>
                <a href={profile.contacts.twitter
                    ? profile.contacts.twitter
                    : 'https://twitter.com/?lang=ru'}
                   target={'_blank'}
                   rel={'noreferrer'}>
                    {profile.contacts.twitter
                        ? profile.contacts.twitter : 'twitter'}</a>
            </div>
        </div>
        {/* //block 2*/}
        <div className={o.block2} style={{overflow: 'auto'}}>
            <div>
                <img src={img_git} alt="github"/>
                <a href={profile.contacts.github
                    ? profile.contacts.github
                    : 'https://github.com/'}
                   target={'_blank'}
                   rel={'noreferrer'}>
                    {profile.contacts.github
                        ? profile.contacts.github : 'github'}</a>
            </div>
            <div>
                <img src={img_face} alt="facebook"/>
                <a href={profile.contacts.facebook
                    ? profile.contacts.facebook
                    : 'https://www.facebook.com/'}
                   target={'_blank'}
                   rel={'noreferrer'}>
                    {profile.contacts.facebook
                        ? profile.contacts.facebook : 'facebook'}</a>
            </div>
            <div>
                <span> website: </span>
                <span style={{paddingLeft: '3px'}}>
                    <a href={profile.contacts.website
                        ?  profile.contacts.website
                        : 'https://it-incubator.by/'}
                       target={'_blank'}
                       rel={'noreferrer'}>
                        {profile.contacts.website
                            ? profile.contacts.website : 'it-kamasutra'}</a>
                </span>
            </div>
            <div>
                <span>main Link:</span>
                <span style={{paddingLeft: '3px'}}>
                    <a href={profile.contacts.mainLink
                        ? profile.contacts.mainLink
                        : 'https://joblink.maine.gov/'}
                       target={'_blank'}
                       rel={'noreferrer'}>
                        {profile.contacts.mainLink
                            ? profile.contacts.mainLink : 'main link'}</a>
                </span>
            </div>
        </div>

    </div>
}