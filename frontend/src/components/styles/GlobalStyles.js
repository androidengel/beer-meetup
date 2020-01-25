import { createGlobalStyle } from 'styled-components';
import bg from '../../images/bg_home.jpg';

const theme = {
  black: '#333',
  red: '#eb1515',
  lightGray: '#cccaca',
  yellow: '#ffcd29',
  offWhite: '#ededed',
  maxWidth: '1000px',
};

const GlobalStyles = createGlobalStyle`
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
  form {
    
  }
`;

export { GlobalStyles, theme };