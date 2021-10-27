import React from 'react';
import o from './ProfileInfo.module.css';
import img from './img/78809294.jpg';

export function ProfileInfo() {
    return (
        <div className={o.profile_info}>
            <div>
                <img
                    src={img}
                    alt="sea"/>
            </div>
            <div>
                ava+description

            </div>
        </div>
    );
}