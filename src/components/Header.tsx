import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CART_IMG from '../assets/icons/shopping-cart.png';
interface HeaderProps {
  isCartActive: boolean;
  setIsCartActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ isCartActive, setIsCartActive }: HeaderProps) => {
  const showCart = () => {
    setIsCartActive(true);
  };

  const HeaderWrap = styled.header`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 50px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;
    text-align: center;
    background-color: white;
  `;
  const Input = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 14px;
    padding: 5px;
    font-size: 1.3rem;
    transition: 0.2s;
    &:focus {
      outline: none;
      width: 600px;
    }
  `;

  const Navigation = styled.nav`
    width: 220px;
    display: flex;
    justify-content: space-between;
  `;
  const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 1.8rem;
    color: #0a0a0a;

    &:hover {
      text-decoration: underline;
    }
  `;
  const Logo = styled(NavLink)`
    font-size: 2.3rem;
    font-weight: bold;
    color: #0a0a0a;

    &:hover {
      text-decoration: none;
      // scale: 1.1;
      color: #404040;
    }
  `;
  const CartBtn = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 12px;
    transition: all 0.2s;
    &:hover {
      scale: 1.2;
    }
  `;

  return (
    <HeaderWrap>
      <Logo to="/">GadgetGalaxy</Logo>
      <Input type="text" />
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="store">Store</NavLink>
        <CartBtn onClick={showCart}>
          <img src={CART_IMG} alt="Cart" />
        </CartBtn>
      </Navigation>
    </HeaderWrap>
  );
};
