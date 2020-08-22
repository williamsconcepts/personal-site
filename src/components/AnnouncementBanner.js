import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 10px #353535;
  border-radius: 8px;
`;

const AnnouncementBanner = () => {
  return (
    <Wrapper>
      Improve Yourself Very Day!
      <br /> Feel free to Listen to {' '}
      <a href="https://anchor.fm/boobaeblog/">
      the podcast
      </a>{' '}
      for Daily Tips.
    </Wrapper>
  );
};

export default AnnouncementBanner;
