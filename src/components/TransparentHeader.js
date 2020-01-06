import React from 'react';
import { Header, Body, Title } from 'native-base';
import PropTypes from 'prop-types';

const TransparentHeader = ({ title }) => (
  <Header transparent>
    <Body style={{ alignItems: 'center' }}>
      <Title style={{ fontSize: 25, color: '#FF3A79' }}>{title}</Title>
    </Body>
  </Header>
);

TransparentHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default TransparentHeader;
