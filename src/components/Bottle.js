import React from 'react';

export default function Bottle(props) {
  const { name, likes } = props.bottle;
  return (
    <div>
      <h2>{name}</h2>
      <p>{likes}</p>
    </div>
  );
}
