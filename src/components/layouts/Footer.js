import React from 'react';
import styled from 'styled-components';
import { media } from '../../utilities/style-utils';

const year = new Date().getFullYear();
export default () => {
  return (
    <Container>
      <Copyright>&copy;{year}, Nancy Plank. All rights reserved.</Copyright>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
  ${media.m`
    margin-bottom: 0px;
  `};
`;

const Copyright = styled.div`
  display: flex;
  text-align: center;
  ${media.xs`
		font-size: .8rem;`};
  ${media.m`
		margin-bottom: 5px;
		font-size: 1rem;`};
`;
