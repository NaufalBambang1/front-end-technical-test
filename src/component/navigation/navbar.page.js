import "../style.css";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";

const Navbar = () => {
  const Navbar = styled.div`
    position: relative;
    display: block;
    display: flex;
    left: 38%;
    transform: translateX(-50%);
    transform: scale(1.5, 1.5);
    width: max-content;
    padding: 1rem 2rem;
    gap: 1rem;
    border-radius: 30px;
    margin-top: 2rem;
    z-index: 2;
    background-color: #fffae6;
  `;
  const NavbarA = styled.a`
    text-decoration: none;
  `;
  const NavItem = styled.div`
    display: flex;
    gap: 1rem;
    color: #ff8a00;
  `;
  const IconRight = styled.div`
    transform: translateY(0.2rem);
  `;
  const ActiveIcon = styled.div`
    border-radius: 50%;
    padding: 0.1rem;
    background-color: #ff8a00;
    color: white;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
  `;
  const IconNumber = styled.div`
    border-radius: 50%;
    padding: 0.1rem;
    background-color: #ff88002d;
    color: #ff8a00;
    height: 25px;
    width: 25px;
    display: flex;
    justify-content: center;
  `;
  return (
    <Navbar>
      <NavbarA href="/delivery">
        <NavItem>
          <ActiveIcon>1</ActiveIcon>
          Delivery
        </NavItem>
      </NavbarA>
      <NavItem>
        <IconRight>
          <AiOutlineRight />
        </IconRight>
      </NavItem>
      <NavbarA href="/payment">
        <NavItem>
          <IconNumber>2</IconNumber>
          Payment
        </NavItem>
      </NavbarA>
      <NavItem>
        <IconRight>
          <AiOutlineRight />
        </IconRight>
      </NavItem>
      <NavbarA href="/finish">
        <NavItem>
          <IconNumber>3</IconNumber>
          Finish
        </NavItem>
      </NavbarA>
    </Navbar>
  );
};

export default Navbar;
