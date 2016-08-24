import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filesActions from 'actions/files';

import Form from 'components/Form';
import FileList from 'components/FileList';

const Uploader = ({ actions, state }) => (
  <section>
    <Form actions={actions} state={state} />
    <FileList state={state} />
  </section>
);

const pickState = ({ files }) => ({
  state: files,
});

const mapDispatch = (dispatch) => ({
  actions: bindActionCreators(filesActions, dispatch),
});

export default connect(pickState, mapDispatch)(Uploader);
