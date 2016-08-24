import React, { Component } from 'react';
import ExternalFileInput from 'react-file-input';

export default class FileInput extends Component {
  componentDidUpdate(prevProps) {
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    // Dangerous: using setState of ref to reset file input text value
    if ((prevValue !== nextValue) && !nextValue) {
      this.input.setState({ value: `` });
    }
  }

  render() {
    return <ExternalFileInput {...this.props} ref={(e) => { this.input = e; }} />;
  }
}
