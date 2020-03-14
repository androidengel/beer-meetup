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
    margin: 2rem auto;
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
    max-width: 400px;
    background: #252628cc;
    padding: 5rem;
    border-radius: 1%;
    border: 1px solid #383a3d;
    box-shadow: 12px 12px 10px rgba(0,0,0,0.9);
    @media (max-width: 700px) {
      padding: 3rem;
    } 
  }
  .button {
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.black};
    font-weight: 900;
    width: 100%;
    min-width: 70px;
    margin: 2rem 2rem 2rem 0 ;
    border: 0;
    border-radius: 3%;
    padding: 1rem;
    &:hover {
      background: #d6ab1c;
      cursor: pointer;
    }
  }
  .whole-form {
    margin: 2rem auto;
  }
`;

export { GlobalStyles, theme };
