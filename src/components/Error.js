import React from 'react';
import styled from 'styled-components';
import { color, space } from 'styled-system';
import check from '../images/check.svg';

export default function Error({ error, clearError }) {
  return (
    <Container bg="warning" color="warningAccent" px={3} mb={3}>
      <p>{error}</p>
      <button type="button" onClick={clearError}>
        <img src={check} alt="Clear Error" />
      </button>
    </Container>
  );
}

const Container = styled.div`
  ${space}
  ${color}
  display: flex;
  width: 600px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;
