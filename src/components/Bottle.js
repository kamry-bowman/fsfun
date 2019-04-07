import React from 'react';
import BottleSvg from './BottleSvg';
import Heart from './Heart';
import styled from 'styled-components';
import { space } from 'styled-system';

export default React.memo(function Bottle(props) {
  const { name, likes } = props.bottle;
  const mx = 3;

  const updateThisBottle = () => {
    props.updateLikes(props.bottle);
  };
  return (
    <BottleFrame mx={mx}>
      <BottleSvg />
      <DataContainer>
        <h2>{name}</h2>
        <Heart likes={likes} onClick={updateThisBottle} />
      </DataContainer>
    </BottleFrame>
  );
});

const BottleFrame = styled.div`
  ${space}
  position: relative;
  display: flex;

  h2 {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 4.2rem;
    text-align: center;
  }
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
