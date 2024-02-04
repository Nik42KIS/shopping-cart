import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorPage = () => {
  const ErrorPageWrapper = styled.div`
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background-color: #ffd1d1;
    flex-direction: column;
    h1 {
      margin-bottom: 20px;
    }
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        color: green;
      }
    }
  `;
  return (
    <ErrorPageWrapper>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">You can go back to the home page by clicking here, though!</Link>
    </ErrorPageWrapper>
  );
};
