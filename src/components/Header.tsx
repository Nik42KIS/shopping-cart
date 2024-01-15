import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const HeaderWrap = styled.header`
  height:120px;
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  background-color:grey;
`;
  return (
    <HeaderWrap>
      <Link to='store'>store</Link>
    </HeaderWrap>
  )
}
