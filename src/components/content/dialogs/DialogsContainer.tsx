import {addMessage, DataDialogsType, updateNewMessage} from '../../../redux/dialogsReducer';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';

export type MstpType = {
    data: DataDialogsType;
}
export type Mdtptype = {
    addMessage: () => void
    updateNewMessage: (e: string) => void
}
//always accept global state
const mapStateToProps = (state: RootStateType): MstpType => {
    return {
        data: state.dataDialogs,
    }
}
//accept dispatch for branch

export const DialogsContainer =
    connect<MstpType, Mdtptype, any, RootStateType>
    (mapStateToProps, {addMessage,updateNewMessage})(Dialogs);
// этот вариант меннее предпочтителен
/* const DialogsContainer =connect(mapStateToProps,mapDispatchToProps);
export type TProps=ConnectedProps<typeof DialogsContainer>
 export default DialogsContainer(Dialogs);*/
