import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../layouts';
import AnimatedContainer from '../components/animation/AnimatedContainer';
import YoutubePlayer from '../components/biography/YoutubePlayer';
import About from '../components/biography/About';
import { media } from '../utilities/style-utils';

export default ({
  data: {
    markdownRemark: { html }
  }
}) => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <AnimatedContainer>
            {({ handleLoad, renderAnimation }) =>
              renderAnimation(<YoutubePlayer handleLoad={handleLoad} />)
            }
          </AnimatedContainer>
        </Wrapper>
        <AnimatedContainer>
          {({ handleLoad, renderAnimation }) =>
            renderAnimation(<About html={html} handleLoad={handleLoad} />)
          }
        </AnimatedContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 98%;
  ${media.m`
    max-width: 900px;
`};
`;

export const pageQuery = graphql`
  query BiographyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
