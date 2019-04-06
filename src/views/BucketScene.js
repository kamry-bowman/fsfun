import React from 'react';
import Bottle from '../components/Bottle';

export default function BucketScene(props) {
  const { options, position } = props;
  const shownBottles = options.slice(position, position + 4);

  return (
    <React.Fragment>
      {shownBottles.map(bottle => (
        <Bottle key={bottle.id} bottle={bottle} />
      ))}
    </React.Fragment>
  );
}
