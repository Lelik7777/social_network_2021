import React from 'react';
import o from './Block.module.css';
import {BlockType} from '../../../redux/state';


export const Block = (props: BlockType) => {
    return (
        <div className={o.block}>
            <div className={o.circle}></div>
            <div className={o.name}>{props.name}</div>
        </div>
    )
}