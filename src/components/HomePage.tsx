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
    display:block;
    margin-top:15px;
    font-size: 1.2rem;
    font-weight:bold;
  }
  a{
    display:block;
    font-size:1.2rem;
    text-align:center;
    width:130px;
    padding:10px;
    border: 1px solid black;
    border-radius:14px;
    cursor: pointer;
    margin-top:30px;
    text-decoration:none;
    background-color: #101010;
    color: #fdfdfd;
    &:hover{
      background-color:#1b1b1b;
    }
  }
  `

 

  return (
    <HomeWrap>
        <div>
          <h1>Best In Computer <br /> Collection<br /> For You</h1>
          <hr />
          <span>We craft the, we wont say the best,<br />But through 70 years of experience in the industry</span>
          <Link to='store'>Pre-order Now</Link>
        </div>
        <img src="https://media.istockphoto.com/id/1304220446/vector/laptop-tablet-phone-devices.jpg?s=612x612&w=0&k=20&c=edikHqWV2JO9ZvVsBTeKTdrqlyx0KPIyQIKAkpCt_18=" alt="main image" />
    </HomeWrap>
  )
}
