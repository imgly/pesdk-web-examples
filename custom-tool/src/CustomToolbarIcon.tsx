import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  fill: currentcolor;
`;

export const CustomToolbarIcon: React.FC = () => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
    >
      <path fill="none" d="M0 0H24V24H0z" />
      <path d="M20 7L20.94 4.94 23 4 20.94 3.06 20 1 19.06 3.06 17 4 19.06 4.94z" />
      <path d="M8.5 7L9.44 4.94 11.5 4 9.44 3.06 8.5 1 7.56 3.06 5.5 4 7.56 4.94z" />
      <path d="M20 12.5L19.06 14.56 17 15.5 19.06 16.44 20 18.5 20.94 16.44 23 15.5 20.94 14.56z" />
      <path d="M17.71 9.12l-2.83-2.83c-.2-.19-.45-.29-.71-.29-.26 0-.51.1-.71.29L2.29 17.46a.996.996 0 000 1.41l2.83 2.83c.2.2.45.3.71.3s.51-.1.71-.29l11.17-11.17c.39-.39.39-1.03 0-1.42zm-3.54-.7l1.41 1.41L14.41 11 13 9.59l1.17-1.17zM5.83 19.59l-1.41-1.41L11.59 11 13 12.41l-7.17 7.18z" />
    </SVG>
  );
};
