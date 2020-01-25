import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';

const PageContent = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 10rem 2rem 2rem 2rem;
  text-align: center;
`;

const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <PageContent>
      {children}
    </PageContent>
  </ThemeProvider>
);

export default Page;
