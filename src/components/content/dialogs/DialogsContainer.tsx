import {addMessage, DataDialogsType, updateNewMessage} from '../../../redux/dialogsReducer';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';
import {withAuthRedirectMy} from '../../../hoc/withAuthRedirectMy';
import {compose} from 'redux';
import React from 'react';

export type MSTPType = {
    data: DataDialogsType;
}
export type MDTPType = {
    addMessage: () => void;
    updateNewMessage: (e: string) => void;
}
//always accept global state
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        data: state.dataDialogs,
    }
}
//accept dispatch for branch

export const DialogsContainer = compose<React.ComponentType>(
    connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, {addMessage, updateNewMessage}),
    withAuthRedirectMy,
)(Dialogs);
/* export const DialogsContainer= withAuthRedirectMy( connect<MSTPType, MDTPType, any, RootStateType>
   (mapStateToProps, {addMessage,updateNewMessage})(Dialogs));*/
// этот вариант меннее предпочтителен
/* const DialogsContainer =connect(mapStateToProps,mapDispatchToProps);
export type TProps=ConnectedProps<typeof DialogsContainer>
 export default DialogsContainer(Dialogs);*/
