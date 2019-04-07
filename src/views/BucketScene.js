import React from 'react';
import styled from 'styled-components';
import Bottle from '../components/Bottle';

export default function BucketScene(props) {
  const { options, position, updateLikes } = props;
  const shownBottles = options.slice(position, position + 4);

  return (
    <Frame>
      {shownBottles.map(bottle => (
        <Bottle key={bottle.id} bottle={bottle} updateLikes={updateLikes} />
      ))}
    </Frame>
  );
}

const Frame = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;
