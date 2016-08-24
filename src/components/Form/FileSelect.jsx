import React, { Component } from 'react';

import { Row, Col, Form, FormGroup, Button, HelpBlock, Image } from 'react-bootstrap';
import Spinner from 'react-spinkit';

import { successMessage  } from 'constants/files/messages';
import FileInput from './FileInput';
import spinnerImg from 'images/loading.gif';
import s from './styles';

export default class FileSelect extends Component {
  constructor() {
    super();

    this.handleOnChange = this.handleOnChange.bind(this);
    this.upload = this.upload.bind(this);
  }

  handleOnChange(event) {
    const [file] = event.target.files;
    this.props.actions.setFile(file);
  }

  upload() {
    this.props.actions.uploadFile(this.props.state.file);
  }

  render() {
    const { file, isUploading, errors, isSuccess, isError } = this.props.state;

    return (
      <Row>
        <Col xs={4}>
          <Form inline>
            <FormGroup className={s.fileInputGroup} validationState={(isSuccess && `success`) || (isError && `error`) || undefined}>
              <FileInput value={file} placeholder="Click to select file" onChange={this.handleOnChange} className={s.fileInput} />
              <HelpBlock>{(isSuccess && successMessage) || (isError && errors)}</HelpBlock>
            </FormGroup>
            <FormGroup>
              <Button onClick={this.upload} disabled={!file || isUploading} kind="success">Upload</Button>
              <HelpBlock>{' '}</HelpBlock>
            </FormGroup>
          </Form>
        </Col>
        <Col xs={2}>
          {isUploading &&
            <Image src={spinnerImg} width={50} height={50} />
          }
        </Col>
      </Row>
    );
  }
}
