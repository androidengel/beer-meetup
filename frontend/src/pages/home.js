import React from 'react';
import styled from 'styled-components';

const HomeText = styled.div`
  text-align: left;
`;

const GozillaTitle = styled.h1`
  font-size: 14rem;
  line-height: 15rem;
  margin: 0;
  @media (max-width: 700px) {
    font-size: 9rem;
    line-height: 10rem;
    letter-spacing: .2rem;
    margin: 0;
  }
  & span {
    display: block;
    color: #ffcd29;
  }
`;

const SubTitle = styled.h6`
  margin-top: 1.5rem;
  line-height: 0;
  letter-spacing: .47rem;
  color: #de371d;
  font-size: 2rem;
  font-weight: 700;
  @media (max-width: 700px) {
    margin-top: 1rem;
    font-size: 1.1rem;
    letter-spacing: .4rem;
    font-weight: 700;
  }
`;

function home() {
  return (
    <HomeText>
      <GozillaTitle>
        <span>DON&apos;T.</span>
        <span>DRINK.</span>
        <span>ALONE.</span>
      </GozillaTitle>
      <SubTitle>Networking, with Interesting Beers</SubTitle>
    </HomeText>
  );
}

export default home;
