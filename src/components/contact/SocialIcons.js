import React from 'react';
import styled from 'styled-components';
import instagramIcon from '../../svg/instagramIcon.svg';
import emailIcon from '../../svg/emailIcon.svg';

export const Instagram = props => (
  <SocialLink href="https://www.instagram.com/nplank/?hl=en" target="_blank">
    Instagram
    <Icons src={instagramIcon} onLoad={props.handleLoad} />
  </SocialLink>
);

export const Email = props => (
  <SocialLink href="mailto:nplank@me.com">
    NPlank@me.com
    <Icons src={emailIcon} onLoad={props.handleLoad} />
  </SocialLink>
);

const SocialLink = styled.a`
  display: flex;
  font-size: 2rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #747d7d;
  margin-left: 10px;
  margin-right: 10px;
`;

const Icons = styled.img`
  display: flex;
  height: 80px;
  width: 80px;
  justify-content: center;
  align-items: start;
  margin-top: 10px;
  margin-bottom: 20px;
`;
