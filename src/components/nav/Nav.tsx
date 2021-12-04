import React from 'react';
import o from './Nav.module.css'
import {NavLink} from 'react-router-dom';
import {Block} from './block/Block';
import {MapDispatchType, MapStateType} from './NavContainer';

type PropsType = MapStateType & MapDispatchType;
export const Nav = ({data}: PropsType) => {

    const mappedBlock = data.friends.map((x) => <Block key={x.id} name={x.name}/>)
    return (<nav className={o.nav}>
            <div><NavLink to="/Profile" activeClassName={o.active
            }>Profile</NavLink></div>
            <div><NavLink to="/DialogsContainer" activeClassName={o.active
            }>Messages</NavLink></div>
            <div><NavLink to="/News" activeClassName={o.active
            }>News</NavLink></div>
            <div><NavLink to="/Settings" activeClassName={o.active
            }>Settings</NavLink></div>
            <h1>Friends</h1>
            <div className={o.friends}>
                {mappedBlock}
            </div>
        </nav>
    )
}
