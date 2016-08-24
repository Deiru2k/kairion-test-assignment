import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Grid } from 'react-bootstrap';

import store from 'config/store';
import Uploader from 'containers/Uploader';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Grid>
          <Uploader />
        </Grid>
      </Provider>
    );
  }
}
