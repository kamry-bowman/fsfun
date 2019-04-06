import React from 'react';
import BottleSvg from './BottleSvg';
import Heart from './Heart';
import styled from 'styled-components';
import { space } from 'styled-system';

export default function Bottle(props) {
  const { name, likes } = props.bottle;
  const px = 3;
  return (
    <BottleFrame px={px}>
      <BottleSvg />
      <DataContainer px={px}>
        <h2>{name}</h2>
        <Heart likes={likes} />
      </DataContainer>
    </BottleFrame>
  );
}

const BottleFrame = styled.div`
  ${space}
  position: relative;
  display: flex;
`;

const DataContainer = styled.div`
  ${space}
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 60%;
  left: 0;
  right: 0;
  width: 100%;
`;
