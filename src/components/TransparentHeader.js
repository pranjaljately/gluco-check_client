import React from 'react';
import { Header, Body, Title } from 'native-base';
import PropTypes from 'prop-types';

const TransparentHeader = ({ title }) => (
  <Header transparent style={{ marginBottom: 10 }}>
    <Body style={{ alignItems: 'center' }}>
      <Title
        style={{
          fontSize: 25,
          color: '#FF3A79',
          textTransform: 'uppercase',
          letterSpacing: 3,
        }}
      >
        {title}
      </Title>
    </Body>
  </Header>
);

TransparentHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
export default TransparentHeader;
