import { Link } from "react-router-dom"
import styled from "styled-components"



export const HomePage = () => {

  const HomeWrap = styled.main`
  margin-left:45px;
  height:680px;
  display: grid;
  grid-template-columns:1fr 1fr;
  justify-content:center;
  align-items:center;
  h1{
    font-size:4.9rem;
  }
  div{
    
  }
  img{
    height: 560px;

  }
  span{
    font-size: 1.1rem;
  }
  
  `

  const LinkToShop = styled.a`
  display:block;
  font-size:1.2rem;
  text-align:center;
  width:130px;
  padding:10px;
  border: 1px solid black;
  border-radius:8px;
  cursor: pointer;
  margin-top:30px;
  text-decoration:none;
  background-color: #ebebeb;
  `

  return (
    <HomeWrap>
        <div>
          <h1>Best In Computer <br /> Collection<br /> For You</h1>
          <span>We craft the, we wont say the best,<br />But through 70 years of experience in the industry</span>
          <hr />
          <LinkToShop href='store'>Pre-order Now</LinkToShop>
        </div>
        <img src="https://media.istockphoto.com/id/1304220446/vector/laptop-tablet-phone-devices.jpg?s=612x612&w=0&k=20&c=edikHqWV2JO9ZvVsBTeKTdrqlyx0KPIyQIKAkpCt_18=" alt="main image" />
    </HomeWrap>
  )
}
