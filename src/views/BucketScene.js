import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Bottle from '../components/Bottle';
import BucketBackSvg from '../components/BucketBackSvg';
import BucketFrontSvg from '../components/BucketFrontSvg';

export default function BucketScene(props) {
  const { options, position, updateLikes } = props;
  const shownBottles = options.slice(position, position + 4);

  return (
    <Container mx={4}>
      <BottlesFrame>
        {shownBottles.map(bottle => (
          <Bottle key={bottle.id} bottle={bottle} updateLikes={updateLikes} />
        ))}
      </BottlesFrame>
      <BucketBackFrame>
        <BucketBackSvg />
      </BucketBackFrame>
      <BucketFrontFrame>
        <BucketFrontSvg />
      </BucketFrontFrame>
    </Container>
  );
}

const Container = styled.div`
  ${space}
  flex: 1 0 900px;
  position: relative;
`;

const BottlesFrame = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 140px;
  width: 100%;
`;

const BucketBackFrame = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  z-index: 0;
`;

const BucketFrontFrame = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  z-index: 2;
`;
