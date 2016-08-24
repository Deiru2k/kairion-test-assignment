import React from 'react';

import { ListGroupItem, Image } from 'react-bootstrap';

import s from './styles';

export default ({ filename, filetype, link }) => {
  const isImage = filetype.indexOf(`image`) > -1;

  return (
    <ListGroupItem href={link} rel="noopener noreferrer" target="_blank" header={filename}>
      {isImage && <Image src={link} responsive className={s.image} />}
    </ListGroupItem>
  );
};
