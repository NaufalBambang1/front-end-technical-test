import styled from "styled-components";
export const Navbar = styled.div`
  position: relative;
  display: block;
  display: flex;
  left: 38%;
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
export const IconNumber = styled.div`
  border-radius: 50%;
  padding: 0.1rem;
  background-color: #ff88002d;
  color: #ff8a00;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
`;

export const LeftSide = styled.div`
  grid-area: 1/1/2/2;
`;
export const RightSide = styled.div`
  grid-area: 1/2/2/3;
`;
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
  width: auto;
  heigth: auto;
  background-color: white;
  min-height: 75vh;
  transform: translateY(-2rem);
  border-radius: 10px;
  box-shadow: 7px 7px 14px #ff880017, -7px -7px 14px#ff880017;
  padding-left: 5rem;
  padding-top: 3rem;
`;
export const BackArrow = styled.a`
  display: flex;
  gap: 1rem;
  font-size: 1.7rem;
  text-decoration: none;
  width: 16%;
  height: 4%;
  color: #000000;
  @media (max-width: 1830px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1724px) {
    font-size: 1.1rem;
  }
  @media (max-width: 1491px) {
    width: 30%;
    height: 5%;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    width: 30%;
    font-size: 1rem;
  }
  @media (max-width: 724px) {
    width: 50%;
    font-size: 1rem;
  }
`;
export const BackArrowP = styled.p`
  transform: translateY(-2rem);

  @media (max-width: 1830px) {
    transform: translateY(-1.7rem);
  }
  @media (max-width: 1724px) {
    transform: translateY(-1.4rem);
  }
  @media (max-width: 1491px) {
    transform: translateY(-1.2rem);
  }
`;
export const BorderShadow = styled.div`
  border: 4px solid #cccccc77;
  width: 380px;
  transform: translateY(5rem);
  z-index: -2;

  @media (max-width: 1796px) {
    transform: translateY(3.8rem);
  }
  @media (max-width: 1724px) {
    width: 350px;
    transform: translateY(3.9rem);
  }
  @media (max-width: 1393px) {
    width: 300px;
    transform: translateY(2.6rem);
  }
  @media (max-width: 1241px) {
    width: 250px;
    transform: translateY(2.2rem);
  }
  @media (max-width: 1080px) {
    width: 215px;
  }
  @media (max-width: 1024px) {
    width: 200px;
  }
  @media (max-width: 724px) {
    width: 110px;
    border: 2px solid #cccccc77;
    transform: translateY(0.9rem);
  }
`;

export const DeliveryInfo = styled.div`
  position: relative;
  display: flex;
  gap: 32rem;
  transform: translateY(2rem);
  > h1 {
    color: #ff8a00;
    font-size: 50px;
    transform: translateY(-3rem);
    flex-wrap: nowrap;
  }
  @media (max-width: 1796px) {
    gap: 32rem;
    > h1 {
      font-size: 40px;
    }
  }
  @media (max-width: 1724px) {
    gap: 18rem;
    > h1 {
      font-size: 40px;
    }
  }
  @media (max-width: 1491px) {
    gap: 12rem;
  }
  @media (max-width: 1393px) {
    gap: 10rem;
    > h1 {
      font-size: 29px;
    }
  }
  @media (max-width: 1241px) {
    gap: 8rem;
    > h1 {
      font-size: 25px;
    }
  }
  @media (max-width: 1080px) {
    gap: 5rem;
    > h1 {
      font-size: 25px;
    }
  }
  @media (max-width: 1024px) {
    gap: 3rem;
    > h1 {
      font-size: 25px;
    }
  }
  @media (max-width: 724px) {
    gap: 1rem;
    > h1 {
      font-size: 15px;
    }
  }
`;
export const TitleCard = styled.h1`
  color: #ff8a00;
  font-size: 50px;
  transform: translateY(-3rem);
  flex-wrap: nowrap;
`;
export const Form = styled.form`
  transform: translateY(2rem);
`;
export const FormInfo = styled.div`
  margin-top: -1.2rem;
  grid-template-column: auto;
  width: auto;
  height: auto;
`;
export const FormGroup = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 724px) {
    display: inline;
  }
`;
export const FormItem = styled.div`
  position: relative;
  width: auto;
  height: auto;
  padding: 2px;

  > label {
    font-size: 20px;
    padding: 14px;
    position: absolute;
    top: 15px;
    left: 0;
    pointer-events: none;
    transition: 0.3s ease all;
  }
  > input {
    border: 1px solid #cccccc;
    border-radius: 5px;
    height: 80px;
    width: 500px;
    font-size: 20px;
    color: #00000061;
    padding-left: 20px;
    outline: none;
  }
  > textarea {
    resize: none;
    border: 1px solid #cccccc;
    border-radius: 5px;
    padding-top: 2rem;
    height: 150px;
    width: 500px;
    font-size: 20px;
    color: #00000061;
    padding-left: 20px;
    outline: none;
  }

  @media (max-width: 1796px) {
    > input {
      height: 80px;
      width: 470px;
      font-size: 18px;
    }
    & .textarea {
      height: 150px;
      width: 470px;
      font-size: 18px;
    }
  }
  @media (max-width: 1724px) {
    > input {
      height: 80px;
      width: 380px;
      font-size: 18px;
    }
    & .textarea {
      height: 150px;
      width: 380px;
      font-size: 18px;
    }
  }
  @media (max-width: 1582px) {
    > input {
      height: 80px;
      width: 350px;
      font-size: 18px;
    }
    & .textarea {
      height: 150px;
      width: 350px;
      font-size: 18px;
    }
  }
  @media (max-width: 1493px) {
    > input {
      height: 80px;
      width: 300px;
      font-size: 15px;
    }
    > label {
      font-size: 18px;
    }
    & .textarea {
      height: 150px;
      width: 300px;
      font-size: 15px;
    }
  }
  @media (max-width: 1393px) {
    > input {
      height: 80px;
      width: 246px;
      font-size: 15px;
    }
    > label {
      font-size: 18px;
    }
    & .textarea {
      height: 150px;
      width: 246px;
      font-size: 15px;
    }
  }
  @media (max-width: 1241px) {
    > input {
      height: 80px;
      width: 210px;
      font-size: 15px;
    }
    > label {
      font-size: 15px;
    }
    & .textarea {
      height: 150px;
      width: 210px;
      font-size: 15px;
    }
  }
  @media (max-width: 1080px) {
    > input {
      height: 80px;
      width: 190px;
      font-size: 15px;
    }
    > label {
      font-size: 15px;
    }
    & .textarea {
      height: 150px;
      width: 190px;
      font-size: 15px;
    }
  }
  @media (max-width: 1024px) {
    > input {
      height: 80px;
      width: 165px;
      font-size: 15px;
    }
    > label {
      font-size: 12px;
    }
    & .textarea {
      height: 150px;
      width: 165px;
      font-size: 15px;
    }
  }
`;

export const SummaryInfo = styled.div`
  border-left: 1px solid #ff8a00;
  min-height: 69vh;
  justify-content: center;
  @media (max-width: 724px) {
    min-height: 63vh;
  }
  @media (max-width: 375px) {
    min-height: 20vh;
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

export const SummaryPriceCost = styled.div`
  display: flex;
  gap: 17rem;
  transform: translateY(17rem);
  margin-bottom: -2rem;
  @media (max-width: 1629px) {
    transform: translateY(15rem);
  }
  @media (max-width: 1491px) {
    font-size: 14px;
  }
  @media (max-width: 1419px) {
    gap: 15.8rem;
  }
  @media (max-width: 1241px) {
    gap: 13.8rem;
  }
  @media (max-width: 1080px) {
    gap: 10rem;
    transform: translateY(16rem);
  }
  @media (max-width: 1024px) {
    gap: 9rem;
    transform: translateY(16rem);
  }
  @media (max-width: 724px) {
    font-size: 12px;
    gap: 4rem;
    h4 {
      transform: translateY(-0.2rem);
    }
  }
`;

export const SummaryPriceDrop = styled.div`
  display: flex;
  gap: 16.4rem;
  transform: translateY(17rem);

  @media (max-width: 1629px) {
    transform: translateY(15rem);
  }
  @media (max-width: 1491px) {
    font-size: 14px;
  }
  @media (max-width: 1419px) {
    gap: 15.4rem;
  }
  @media (max-width: 1241px) {
    gap: 13.4rem;
  }
  @media (max-width: 1080px) {
    gap: 9.5rem;
    transform: translateY(16rem);
  }
  @media (max-width: 1024px) {
    gap: 8.5rem;
    transform: translateY(16rem);
  }
  @media (max-width: 724px) {
    font-size: 12px;
    gap: 3.6rem;
    h4 {
      transform: translateY(-0.2rem);
    }
  }
`;
export const SummaryTotal = styled.div`
  color: #ff8a00;
  display: flex;
  gap: 15rem;
  transform: translateY(16rem);

  @media (max-width: 1629px) {
    transform: translateY(14rem);
  }
  @media (max-width: 1491px) {
    font-size: 14px;
  }
  @media (max-width: 1419px) {
    gap: 14rem;
  }
  @media (max-width: 1241px) {
    gap: 12.2rem;
  }
  @media (max-width: 1080px) {
    gap: 8.5rem;
    transform: translateY(15rem);
  }
  @media (max-width: 1024px) {
    gap: 7.4rem;
  }
  @media (max-width: 724px) {
    font-size: 10px;
    gap: 4rem;
    h4 {
      transform: translateY(-0.2rem);
    }
  }
`;

export const ButtonContinue = styled.div`
  transform: translateY(17rem);
  padding-left: 2rem;
  display: flex;

  > button {
    width: 435px;
    height: 103px;
    font-size: 25px;
    background-color: #ff8a00;
    color: white;
    border: 1px solid white;
    cursor: pointer;
  }

  @media (max-width: 1629px) {
    transform: translateY(13.4rem);
  }
  @media (max-width: 1491px) {
    width: 410px;
    transform: translateY(15.2rem);
  }
  @media (max-width: 1419px) {
    width: 400px;
    transform: translateY(16rem);
  }
  @media (max-width: 1241px) {
    width: 370px;
    transform: translateY(16rem);
  }
  @media (max-width: 1080px) {
    width: 305px;
    transform: translateY(17rem);
    button {
      font-size: 20px;
    }
  }
  @media (max-width: 1024px) {
    width: 300px;
    transform: translateY(17rem);
    button {
      font-size: 20px;
    }
  }
  @media (max-width: 724px) {
    width: 190px;
    height: 90px;
    transform: translateY(17rem);
    button {
      font-size: 16px;
    }
  }
`;
