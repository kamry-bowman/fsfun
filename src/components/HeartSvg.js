import React from 'react';
import styled from 'styled-components';

export default function HeartSvg(props) {
  return (
    <StyledSvg
      viewBox="0 0 99 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.29 36.517c8.705 42.42 47.877 55.056 47.877 55.056S88.34 78.558 97.044 36.138c6.522-31.781-16.974-51.066-47.877-18.574C20.877-14.928-5.23 4.737 1.29 36.517z"
        fill="#961D4E"
      />
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  width: 100%;
  height: auto;
`;
