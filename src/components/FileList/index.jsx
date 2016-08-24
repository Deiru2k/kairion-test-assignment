import React from 'react';

import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import Item from './Item';

export default ({ state }) => {
  const items = state.list || [];
  return (
    <Row>
      <Col xs={12}>
        <ListGroup>
          {!!items.length && items.map((file) => <Item key={file.link} {...file} />)}
          {!items.length && <ListGroupItem>Upload files using form above</ListGroupItem>}
        </ListGroup>
      </Col>
    </Row>
  );
};
