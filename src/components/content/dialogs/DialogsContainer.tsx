import {Dispatch} from 'redux';
import {ActionDialogsType, addMessage, DataDialogsType, updateNewMessage} from '../../../redux/dialogsReducer';
import {RootStateType} from '../../../redux/store';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';

export type MstpType = {
    data: DataDialogsType;
}
export type Mdtptype = {
    onClick: () => void
    onChange: (e: string) => void
}
//always accept global state
const mapStateToProps = (state: RootStateType): MstpType => {
    return {
        data: state.dataDialogs,
    }
}
//accept dispatch for branch
const mapDispatchToProps = (dispatch: Dispatch<ActionDialogsType>): Mdtptype => {
    return {
        onClick: () => dispatch(addMessage()),
        onChange: (e: string) => dispatch(updateNewMessage(e)),
    }
}
export const DialogsContainer = connect<MstpType, Mdtptype, any, RootStateType>(mapStateToProps, mapDispatchToProps)(Dialogs);
// этот вариант меннее предпочтителен
/* const DialogsContainer =connect(mapStateToProps,mapDispatchToProps);
export type TProps=ConnectedProps<typeof DialogsContainer>
 export default DialogsContainer(Dialogs);*/
