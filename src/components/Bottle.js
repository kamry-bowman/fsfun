import React from 'react';
import BottleSvg from './BottleSvg';
import styled from 'styled-components';
import { space } from 'styled-system';

export default React.memo(function Bottle({ children, tilt }) {
  return (
    <BottleFrame mx={3} tilt={tilt}>
      <BottleSvg />
      <DataContainer>{React.Children.toArray(children)}</DataContainer>
    </BottleFrame>
  );
});

const BottleFrame = styled.div`
  ${space}
  position: relative;
  display: flex;
  flex-direction: column;
  width: 195px;
  height: 737px;
  z-index: 1;
  transform: rotate(
    ${props =>
      props.tilt === 'left'
        ? '-5deg'
        : props.tilt === 'right'
        ? '5deg'
        : '0deg'}
  );
`;

const DataContainer = styled.div`
  ${space}
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  top: 384px;
  left: 0;
  right: 0;
  width: 100%;
  height: 302px;
`;
