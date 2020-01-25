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
  h2 {
    text-align: center;
    margin: 0;
    font-size: 3rem;
    letter-spacing .25rem;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.offWhite};
  }
  form {
    margin: 0 auto;
    width: 70%;
    text-align: left;

  }
  label {
    font-size: 1.6rem;
    letter-spacing: 1px;
    font-weight: 700;
  }
  input, textarea {
    box-sizing: border-box;
    width: 100%;
    padding: .5rem;
    margin: 1rem auto;
  }
  textarea {
    height: 9rem;
    overflow: auto;
    resize: none;
    font-family: arial;
  }
  .card {
    background: #252628;
    padding: 5rem;
    border-radius: 1%;
    border: 1px solid #383a3d;
    box-shadow: 0 12px 10px rgba(0,0,0,0.9);
    @media (max-width: 700px) {
      padding: 3rem;
    } 
  }
  .button {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.black};
    font-weight: 900;
    width: auto;
    border: 0;
    &:hover {
      background: #d6ab1c;
      cursor: pointer;
    }
  }
`;

export { GlobalStyles, theme };
