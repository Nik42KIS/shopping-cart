import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const HeaderWrap = styled.header`
  padding:0 50px;
  height:80px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color:grey;
`;
const Input = styled.input`
  width:400px;
  height:30px;
  border-radius:5px;
  padding:5px;
  font-size:1.3rem;
  transition:.2s;
  &:focus{
    outline:none;
    width:600px;
  }
`

const Navigation = styled.nav`
  width:220px;
  display:flex;
  justify-content:space-between;
`
const NavLink = styled(Link)`
  text-decoration:none;
  color:#fdfdfd;
  font-size:1.8rem;
  &:hover{
    text-decoration:underline;
  }
`
const Logo = styled(NavLink)`
  font-size:2.3rem;
  font-weight:bold;
  color: #fdfdfd;
  &:hover{
    text-decoration:none;

  }
`
  return (
    <HeaderWrap>
      <Logo to='/'>LOGOSHOP</Logo>
      <Input type="text" />
      <Navigation>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='store'>Store</NavLink>
      </Navigation>
     
    </HeaderWrap>
  )
}
