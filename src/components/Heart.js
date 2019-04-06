import React from 'react';
import HeartSvg from './HeartSvg';
import styled from 'styled-components';
import { space } from 'styled-system';

export default function Heart(props) {
  const { likes } = props;
  return (
    <HeartFrame>
      <HeartSvg />
      <p>{likes}</p>
    </HeartFrame>
  );
}

const HeartFrame = styled.div`
  ${space}
  width: 30px;
  position: relative;

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 50%;
  }
`;
