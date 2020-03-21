import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

const PageContent = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 10rem 2rem 2rem 2rem;
  text-align: center;
`;

const flashes = {
  success: ['you logged in!'],
  error: ['you failed to login!', 'uh-oh, something went wrong!'],
};

const Page = ({ children }) => (
  <div>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageContent>
        {children}
      </PageContent>
    </ThemeProvider>
    <ToastContainer />
  </div>
);

export default Page;
