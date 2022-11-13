import styled from "styled-components";
// container
export const LeftSide = styled.div`
  grid-area: 1/1/2/2;
`;
export const RightSide = styled.div`
  grid-area: 1/2/2/3;
`;
// end container

// Navbar
export const Navbar = styled.div`
  position: relative;
  display: block;
  display: flex;
  left: 38%;
  transform: translateX(-50%);
  transform: scale(1.5, 1.5);
  width: max-content;
  padding: 1rem 2rem;
  font-weight: 600;
  gap: 1rem;
  border-radius: 30px;
  margin-top: 2rem;
  z-index: 2;
  background-color: #fffae6;
  @media (max-width: 1629px) {
    left: 34%;
    transform: scale(1.4, 1.4);
  }
  @media (max-width: 1491px) {
    left: 34%;
    transform: scale(1.3, 1.3);
  }
  @media (max-width: 1393px) {
    left: 34%;
    transform: scale(1.2, 1.2);
  }
  @media (max-width: 1241px) {
    left: 30%;
    transform: scale(1, 1);
  }
  @media (max-width: 1080px) {
    left: 28%;
    transform: scale(1, 1);
  }
  @media (max-width: 1024px) {
    left: 25%;
    transform: scale(1, 1);
  }
  @media (max-width: 724px) {
    left: 13%;
    transform: scale(0.8, 0.8);
  }
`;
export const NavbarA = styled.a`
  text-decoration: none;
`;
export const NavItem = styled.div`
  display: flex;
  gap: 1rem;
  color: #ff8a00;
`;
export const IconRight = styled.div`
  transform: translateY(0.2rem);
`;
export const ActiveIcon = styled.div`
  border-radius: 50%;
  padding: 0.1rem;
  background-color: #ff8a00;
  color: white;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
`;
//Navbar

// Card conten
export const Row = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr;
  @media (max-width: 1796px) {
    grid-template-columns: 69% 31%;
  }
  @media (max-width: 1724px) {
    grid-template-columns: 65% 35%;
  }
  @media (max-width: 1589px) {
    grid-template-columns: 63% 37%;
  }
  @media (max-width: 1393px) {
    grid-template-columns: 58% 42%;
  }
  @media (max-width: 724px) {
    grid-template-columns: 50% 50%;
  }
`;

export const Card = styled.div`
  background-color: white;
  min-height: 75vh;
  transform: translateY(-2rem);
  border-radius: 10px;
  box-shadow: 7px 7px 14px #ff880017, -7px -7px 14px#ff880017;
  padding-left: 5rem;
  padding-top: 3rem;
`;
export const BorderShadow = styled.div`
  border: 4px solid #cccccc77;
  width: 380px;
  margin-left: -3rem;
  transform: translateY(8.3rem);
  z-index: -2;
  @media (max-width: 724px) {
    width: 200px;
    transform: translateY(4.4rem);
    margin-left: -5rem;
  }
`;
export const BackArrow = styled.a`
  display: flex;
  gap: 1rem;
  margin-left: -13rem;
  transform: translateY(-5rem);
  font-size: 1.4rem;
  text-decoration: none;
  color: #000000;
  @media (max-width: 724px) {
    font-size: 0.8rem;
    margin-left: -9.4rem;
    transform: translateY(-5rem);
  }
`;
export const BackArrowP = styled.p`
  transform: translateY(-1.7rem);
  @media (max-width: 724px) {
    transform: translateY(-1rem);
  }
`;

export const FinishContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(8rem);
`;
export const FinishTitle = styled.h1`
  color: #ff8a00;
  font-size: 30px;
  margin-left: -9rem;
  @media (max-width: 724px) {
    font-size: 15px;
  }
`;
export const FinishOrder = styled.h4`
  margin-left: -19rem;
  font-weight: 500;
  transform: translateY(-4rem);
  @media (max-width: 724px) {
    font-size: 12px;
    margin-left: -12rem;
    transform: translateY(-3rem);
  }
`;
export const FinishInfo = styled.p`
  margin-left: -5.2rem;
  transform: translateY(-8rem);
  @media (max-width: 724px) {
    font-size: 12px;
    margin-left: -1.6rem;
    transform: translateY(-6.5rem);
  }
`;

// Summary
export const SummaryInfo = styled.div`
  border-left: 1px solid #ff8a00;
  min-height: 69vh;
  justify-content: center;
  @media (max-width: 1241px) {
    min-height: 65vh;
  }
  @media (max-width: 724px) {
    min-height: 67vh;
  }
`;
export const SummaryTitle = styled.div`
  > h1 {
    color: #ff8a00;
    font-size: 40px;
    padding-left: 2rem;
    transform: translateY(1.6rem);
  }
  @media (max-width: 1491px) {
    > h1 {
      font-size: 37px;
    }
  }
  @media (max-width: 1419px) {
    > h1 {
      font-size: 30px;
    }
  }
  @media (max-width: 1241px) {
    > h1 {
      font-size: 25px;
    }
  }
  @media (max-width: 724px) {
    > h1 {
      font-size: 18px;
      transform: translateY(1rem);
    }
  }
`;
export const SummaryItem = styled.div`
  display: block;
  padding-left: 2rem;
  @media (max-width: 1241px) {
    transform: translateY(0.5rem);
  }
  @media (max-width: 1080px) {
    transform: translateY(0.4rem);
  }
  @media (max-width: 1024px) {
    transform: translateY(0.5rem);
  }
  @media (max-width: 724px) {
    font-size: 13px;
    transform: translateY(0.2rem);
  }
`;
export const SummaryBorder = styled.div`
  border-top: 1px solid #cccccc;
  width: 90px;
  @media (max-width: 1080px) {
    width: 80px;
  }
  @media (max-width: 1024px) {
    width: 70px;
  }
  @media (max-width: 724px) {
    width: 60px;
  }
`;
export const SummaryShipmentItem = styled.div`
  margin-top: -0.5rem;
  > h4 {
    font-weight: 500;
    font-size: 20px;
  }
  > p {
    color: #1bd97b;
    font-size: 20px;
    font-weight: 500;
    margin-top: -1.2rem;
  }
  @media (max-width: 1080px) {
    > p {
      font-size: 16px;
    }
  }
  @media (max-width: 1024px) {
    > p {
      font-size: 15px;
    }
  }
  @media (max-width: 724px) {
    > h4 {
      font-size: 13px;
    }
    > p {
      font-size: 13px;
    }
  }
`;
export const SummaryPriceList = styled.div`
  transform: translateY(9rem);
  @media (max-width: 1629px) {
    transform: translateY(6rem);
  }
  @media (max-width: 1491px) {
    font-size: 14px;
    transform: translateY(5rem);
  }
  @media (max-width: 1419px) {
    transform: translateY(4rem);
  }
  @media (max-width: 1080px) {
    transform: translateY(3.8rem);
  }
  @media (max-width: 1024px) {
    transform: translateY(4rem);
  }
  @media (max-width: 724px) {
    transform: translateY(15rem);
  }
`;
export const SummaryPriceCost = styled.div`
  display: flex;
  gap: 17rem;
  margin-bottom: -2rem;
  font-size: 18px;
  @media (max-width: 1491px) {
    gap: 14rem;
  }
  @media (max-width: 1419px) {
    gap: 12.5rem;
  }
  @media (max-width: 1241px) {
    gap: 11rem;
  }
  @media (max-width: 1080px) {
    gap: 8rem;
  }
  @media (max-width: 1024px) {
    gap: 6rem;
  }
  @media (max-width: 724px) {
    font-size: 13px;
    gap: 4rem;
    h4 {
      transform: translateY(-0.2rem);
    }
  }
`;

export const SummaryPriceDrop = styled.div`
  display: flex;
  gap: 16.4rem;
  font-size: 18px;
  @media (max-width: 1491px) {
    gap: 13.5rem;
  }
  @media (max-width: 1419px) {
    gap: 12rem;
  }
  @media (max-width: 1241px) {
    gap: 10.6rem;
  }
  @media (max-width: 1080px) {
    gap: 7.5rem;
  }
  @media (max-width: 1024px) {
    gap: 5.5rem;
  }
  @media (max-width: 724px) {
    font-size: 13px;
    gap: 3.6rem;
    h4 {
      transform: translateY(-0.2rem);
    }
  }
`;
export const SummaryPriceShipment = styled.div`
  display: flex;
  gap: 14.4rem;
  transform: translateY(-2rem);
  font-size: 20px;
  @media (max-width: 1491px) {
    gap: 11.5rem;
    h4 {
      font-size: 18px;
    }
  }
  @media (max-width: 1419px) {
    gap: 10.2rem;
  }
  @media (max-width: 1241px) {
    gap: 8.8rem;
  }
  @media (max-width: 1080px) {
    gap: 5.6rem;
  }
  @media (max-width: 1024px) {
    gap: 3.6rem;
  }
  @media (max-width: 724px) {
    gap: 2rem;
    h4 {
      font-size: 14px;
    }
  }
`;
export const SummaryBrand = styled.div`
  display: flex;
  gap: 0.5rem;
  > h4 {
    font-weight: 500;
    font-size: 18px;
  }
  > p {
    font-size: 18px;
    transform: translateY(0.3rem);
  }
  @media (max-width: 724px) {
    > h4 {
      font-weight: 500;
      font-size: 13px;
    }
    > p {
      font-size: 13px;
      transform: translateY(0.3rem);
    }
  }
`;
export const SummaryTotal = styled.div`
  color: #ff8a00;
  display: flex;
  gap: 15rem;
  transform: translateY(-3rem);
  font-size: 18px;
  @media (max-width: 1491px) {
    gap: 12rem;
  }
  @media (max-width: 1419px) {
    gap: 10.8rem;
  }
  @media (max-width: 1241px) {
    gap: 8.9rem;
  }
  @media (max-width: 1080px) {
    gap: 6rem;
  }
  @media (max-width: 1024px) {
    gap: 4rem;
  }
  @media (max-width: 724px) {
    font-size: 12px;
    gap: 3.4rem;
    h4 {
      transform: translateY(-0.2rem);
    }
  }
`;
//End Summary
