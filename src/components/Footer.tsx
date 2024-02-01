import React from 'react'
import styled from 'styled-components'

import GH_LOGO from '../assets/icons/github.png'

export const Footer = () => {

  const Footer = styled.footer`
    background-color: #050505;
    height:70px;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size:1.5rem;
    a{
      text-decoration:none;
      color: #fdfdfd;
display: flex;
align-items:center;
      img{
        height:40px;
      }
    }
    a:hover{
      text-decoration:underline;
    }
  `
  
  return (
    <Footer>
     
         <a href="https://github.com/Nik42KIS">

         <img src={GH_LOGO} />
         <span>GitHub</span>
         </a>

    </Footer>
  )
}
