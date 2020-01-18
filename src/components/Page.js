import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import bg from '../images/bg_home.jpg';

const theme = {
  black: '#333',
  red: '#eb1515',
  lightGray: '#cccaca',
  yellow: '#ffcd29',
  offWhite: '#ededed',
  maxWidth: '1000px',
};

const PageContent = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
    background: black url(${bg}) no-repeat fixed center top;
    min-height: 700px
    color: ${(props) => props.theme.offWhite};
  }
  body {
    padding: 0,
    margin: 0,
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.offWhite};
  }
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <PageContent>
      {children}
    </PageContent>
  </ThemeProvider>
);

export default Page;
