import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const HeaderWrap = styled.header`
  padding:0 20px;
  height:80px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color:grey;
`;
const Logo = styled.a`
  font-size:2rem;
  font-weight:bold;
  color: #fdfdfd;
`
  return (
    <HeaderWrap>
      <Logo>LOGOSHOP</Logo>
      <input type="text" />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='store'>Store</Link>
      </nav>
     
    </HeaderWrap>
  )
}
