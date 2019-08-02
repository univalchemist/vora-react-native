import React, { Component } from 'react';
import { Icon } from 'native-base';
class SignInRightIcon extends Component {

    render() {
        const { type, name, focus } = this.props

        return (
            <Icon
                style={{
                    marginBottom: 5,
                    color: focus ? '#3498DB' : 'grey'
                }}
                type={type}
                name={name} />
        )
    }
}
export { SignInRightIcon }