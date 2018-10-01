import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  margin-top: 8px;

  color: white;
  font-size: 24px;
  letter-spacing: 8px;

  text-align: center;
  vertical-align: middle;
  background: transparent;
`;

export const HDivider = () => <H1>|||</H1>;
