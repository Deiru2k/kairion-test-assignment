import React from 'react';

import { Row, Col } from 'react-bootstrap';
import FileSelect from './FileSelect';

export default ({ actions, state }) => (
  <Row>
    <Col md={12}>
      <FileSelect actions={actions} state={state} />
    </Col>
  </Row>
);
