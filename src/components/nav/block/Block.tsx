import React from 'react';
import o from './Block.module.css';
import {BlockType} from '../../../redux/store';


export const Block = ({name,id,...props}: BlockType) => {
    return (
        <div className={o.block}>
            <div className={o.circle}></div>
            <div className={o.name}>{name}</div>
        </div>
    )
}