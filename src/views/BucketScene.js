import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import Bottle from '../components/Bottle';
import BucketBackSvg from '../components/BucketBackSvg';
import BucketFrontSvg from '../components/BucketFrontSvg';
import arrow from '../images/arrow.svg';

export default function BucketScene(props) {
  const { options, position, updateLikes, selectLeft, selectRight } = props;
  const shownBottles = options.slice(position, position + 4);

  return (
    <Container mx={4}>
      <BottlesFrame>
        <button type="button" onClick={selectLeft}>
          <img src={arrow} className="inverted" alt="left arrow" />
        </button>
        {shownBottles.map(bottle => (
          <Bottle key={bottle.id} bottle={bottle} updateLikes={updateLikes} />
        ))}
        <button>
          <img
            src={arrow}
            type="button"
            onClick={selectRight}
            alt="right arrow"
          />
        </button>
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

  button {
    align-self: center;
    img {
      transition: transform 0.4s;
    }

    &:hover {
      img {
        transform: scale(1.1);

        &.inverted {
          transform: scale(1.1) rotate(180deg);
        }
      }

      img {
        transition: transform 0.4s;
      }
    }

    .inverted {
      transform: rotate(180deg);
    }
  }
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
  pointer-events: none;
`;
