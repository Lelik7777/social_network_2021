import React from 'react';

type PropsType = {
    status: string;
}

export class ProfileStatus extends React.Component<PropsType, any> {
    state = {
        value: true,
    }
    setTrue = () => {
        this.setState({value: true});

    }
    setFalse = () => {
        this.setState({value: false});
    }

    render() {
        return (
            <div>
                {this.state.value
                    ? <div onDoubleClick={this.setFalse}>{this.props.status}</div>
                    : <div><input autoFocus={true} type="text" onBlur={this.setTrue}/></div>
                }
            </div>


        )
    }
};