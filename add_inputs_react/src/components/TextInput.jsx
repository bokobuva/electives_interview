import React, { Component, forwardRef } from 'react';

class TextInput extends Component {
    render() {
        const textInputRef = this.props.inputRef(this);

        return (
            <input type={'text'} ref={(node) => textInputRef.current = node} name={this.props.name}/>
        );
    }
}

export default TextInput;