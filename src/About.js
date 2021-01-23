import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  //grid-template-columns: repeat(12, 1fr);
  //grid-auto-rows: minmx(25px, auto);
`; 
export const About = () => (
  <GridWrapper>
    <h2>About Page</h2>
    <p>Why should you use GAMEIFY? After countless times of being bamboozled by sponsored companies’ reviews, we decided to create our own review website. Unlike businesses like Gamestop and IGN who are compensated for their reviews and used for publicity, when you use GAMEIFY, you can view reviews knowing that these are honest reviews from actual players. </p>
  </GridWrapper>
)