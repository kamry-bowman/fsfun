import React from 'react';
import HeartSvg from './HeartSvg';
import styled from 'styled-components';
import { space, color } from 'styled-system';

export default function Heart(props) {
  const { likes } = props;
  return (
    <HeartFrame onClick={props.onClick}>
      <HeartSvg />
      <LikesCount color="offWhite">{likes}</LikesCount>
    </HeartFrame>
  );
}

const HeartFrame = styled.div`
  ${space}
  width: 100%;
  position: relative;
  display: flex;
  padding-bottom: 14px;
`;

const LikesCount = styled.p`
  ${color}
  ${space}
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  opacity: 0.8;
  padding-bottom: 14px;
`;
