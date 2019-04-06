import React from 'react';
import styled from 'styled-components';

export default function Bottle(props) {
  return (
    <StyledSvg
      viewBox="0 0 196 738"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M195.626 367.92v361.134a8.816 8.816 0 0 1-8.816 8.816H9.608a8.816 8.816 0 0 1-8.816-8.816V367.639c0-1.362.263-2.712.775-3.974l36.045-88.91c.271-.67.438-1.377.495-2.098l19.77-252.072h74.459l20.397 251.897c.068.835.283 1.651.637 2.41l41.266 88.56a10.58 10.58 0 0 1 .99 4.468z"
        fill="#360A14"
      />
      <path
        d="M138.018 23.067H48.472c-.974 0-1.764-.79-1.764-1.763V7.28c0-.903.682-1.66 1.579-1.754L93.678.75c.125-.013.25-.013.374 0l44.156 4.774a1.764 1.764 0 0 1 1.574 1.753v14.028c0 .974-.79 1.763-1.764 1.763z"
        fill="#360A14"
      />
      <path
        d="M138.018 23.067H48.472c-.974 0-1.764-.79-1.764-1.763V7.28c0-.903.682-1.66 1.579-1.754L93.678.75c.125-.013.25-.013.374 0l44.156 4.774a1.764 1.764 0 0 1 1.574 1.753v14.028c0 .974-.79 1.763-1.764 1.763z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M1.233 385.873h192.711V687.79H1.233V385.873z"
        fill="#E7E7E7"
        stroke="#AC510B"
        strokeWidth="0.882"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="93.245"
          y1="0.729"
          x2="93.245"
          y2="23.067"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#292F36" />
          <stop offset="0.885" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </StyledSvg>
  );
}

const StyledSvg = styled.svg`
  width: 100%;
  vertical-align: bottom;
`;
