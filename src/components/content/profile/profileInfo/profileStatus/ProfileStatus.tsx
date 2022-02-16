import React from 'react';
import {connect} from 'react-redux';
import {RootStateType} from '../../../../../redux/store';

type PropsType = MSTPType & MDTPType;

class ProfileStatus extends React.Component<PropsType, any> {
    state = {
        value: true,
    }
    switchOnEdit = () => {
        this.setState({value: false});

    }
    switchOffEdit = () => {
        this.setState({value: true});
    }

    render() {
        return (
            <div>
                {this.state.value
                    ? <div onDoubleClick={this.switchOnEdit}>{this.props.status}</div>
                    : <div><input autoFocus={true} type="text" onBlur={this.switchOffEdit}/></div>
                }
            </div>


        )
    }
};
type MSTPType = {
    status: string;
}
type MDTPType = {}
const mapStateToProps = (state: RootStateType): MSTPType =>
    ({status: state.dataProfile.status});

export default connect<MSTPType, MDTPType, any, RootStateType>(mapStateToProps, {})(ProfileStatus)