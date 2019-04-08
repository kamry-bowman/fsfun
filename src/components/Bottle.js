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
  flex-direction: column;
  width: 195px;
  height: 737px;
  z-index: 1;

  h2 {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 3.2rem;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
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
