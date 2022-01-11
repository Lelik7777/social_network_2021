import {addMessage, DataDialogsType, updateNewMessage} from '../../../redux/dialogsReducer';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';

export type MSTPType = {
    data: DataDialogsType;
    isAuth:boolean;
}
export type MDTPType = {
    addMessage: () => void;
    updateNewMessage: (e: string) => void;
}
//always accept global state
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        data: state.dataDialogs,
        isAuth:state.dataAuth.isAuth,
    }
}
//accept dispatch for branch

export const DialogsContainer =
    connect<MSTPType, MDTPType, any, RootStateType>
    (mapStateToProps, {addMessage,updateNewMessage})(Dialogs);
// этот вариант меннее предпочтителен
/* const DialogsContainer =connect(mapStateToProps,mapDispatchToProps);
export type TProps=ConnectedProps<typeof DialogsContainer>
 export default DialogsContainer(Dialogs);*/
