import React from 'react';
import o from './Block.module.css';

type PropsType = {
    name: string;
}
export const Block = ({name}: PropsType) => {
    return (
        <div className={o.block}>
            <div className={o.circle}></div>
            <div className={o.name}>{name}</div>
        </div>
    )
}