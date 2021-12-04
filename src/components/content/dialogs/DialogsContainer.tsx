import {Dispatch} from 'redux';
import {ActionDialogsType, addMessageAC, DataDialogsType, updateNewMessageAC} from '../../../redux/dialogsReducer';
import {ReducersType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dialogs} from './Dialogs';

export type MstpType = {
    data: DataDialogsType;
}
export type Mdtptype = {
    onClick: () => void
    onChange: (e: string) => void
}
const mapStateToProps = (state: ReducersType): MstpType => {
    return {
        data: state.dataDialogs,
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionDialogsType>): Mdtptype => {
    return {
        onClick: () => dispatch(addMessageAC()),
        onChange: (e: string) => dispatch(updateNewMessageAC(e)),
    }
}
export const DialogsContainer = connect<MstpType, Mdtptype, any, ReducersType>(mapStateToProps, mapDispatchToProps)(Dialogs);