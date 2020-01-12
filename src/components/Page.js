import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  black: '#333',
  red: '#eb1515',
  lightGray: '#cccaca',
  offWhite: '#ededed',
  maxWidth: '1000px',
};

const PageContent = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.lightGray};
    color: ${(props) => props.theme.black};
  }
  body {
    padding: 0,
    margin: 0,
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
`;

function Page(children) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContent />
    </ThemeProvider>
  );
}

export default Page;
