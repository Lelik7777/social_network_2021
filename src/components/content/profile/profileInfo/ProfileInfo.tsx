import React from 'react';
import o from './ProfileInfo.module.css';
import img from './img/78809294.jpg';
import {ProfileType} from '../../../../redux/profileReducer/profileReducer';
import {Preloader} from '../../../../common components/preloader/Preloader';

type PropsType={
    profile:ProfileType;
}
export function ProfileInfo({profile}:PropsType) {
    if(profile){
       <Preloader/>
    }
    return (
        <div className={o.profile_info}>
            <div>
                <img className={o.img_profile}
                    src={img}
                    alt="sea"/>
            </div>
            <div>
                ava+description

            </div>
        </div>
    );
}