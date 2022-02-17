import React, {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../../../redux/store';
import o from '../ProfileInfo.module.css';
import {updateStatus} from '../../../../../redux/profileReducer/profileReducer';
import {RequestStatusType} from '../../../../../redux/appReducer';
import {Preloader} from '../../../../../common components/preloader/Preloader';

type PropsType = MSTPType & MDTPType;

class ProfileStatus extends React.Component<PropsType, any> {
    state = {
        value: true,
        valueInput: '',
    }


    switchOnEdit = () => {
        this.setState({value: false});

    }
    switchOffEdit = () => {
        if (this.state.valueInput.trim()) {
            this.props.updateStatus(this.state.valueInput)
        }
        this.setState({value: true, valueInput: ''});

    }
    onChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({valueInput: (e.currentTarget.value)});

    }

    render() {
        console.log(this.props.status)
        return (
            this.props.requestStatus === 'loaded'
                ? <Preloader/>
                : <div className={o.profile_status}>

                    <span>status:</span><br/>
                    {this.state.value
                        ? <div
                            onDoubleClick={this.switchOnEdit}>' {this.props.status ? this.props.status : 'status is none'} '</div>
                        : <div>
                            <input
                                   value={this.state.valueInput}
                                   onChange={this.onChange}
                                   type="text"
                                   onBlur={this.switchOffEdit}/>
                        </div>
                    }
                </div>


        )
    }
};
type MSTPType = {
    status: string;
    requestStatus: RequestStatusType;
}
type MDTPType = {
    updateStatus: (status: string) => void;
}
const mapStateToProps = (state: RootStateType): MSTPType =>
    ({status: state.dataProfile.status, requestStatus: state.dataApp.requestStatus});
export default connect <MSTPType, MDTPType, any, RootStateType>
(mapStateToProps, {updateStatus})(ProfileStatus);
