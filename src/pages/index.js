import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import LandingImage from '../components/home/LandingImage';

export default ({
  data: {
    landingImage: {
      childImageSharp: { fluid }
    }
  }
}) => {
  return (
    <Section>
      <LandingImage fluid={fluid} />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const pageQuery = graphql`
  query LandingPageQuery {
    landingImage: file(relativePath: { eq: "lavendar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
