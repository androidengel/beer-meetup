import styled from 'styled-components';

const NavStyles = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2rem;
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    display: flex;
    margin: 0 2rem;
  }
  
  a {
    font-weight: 900;
    display: flex;
    margin: 0 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    transition: all .1s ease;
    &:hover {
      color: #ffcd29;
      border-bottom: 2px solid #ffcd29;
    }
    @media (max-width: 700px) {
      font-size: 1rem;
      letter-spacing: .2rem;
      margin: 0;
    }
  }
`;

export default NavStyles;
