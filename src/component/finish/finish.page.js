import {
  Row,
  Card,
  LeftSide,
  RightSide,
  BackArrow,
  BackArrowP,
  SummaryInfo,
  SummaryTitle,
  SummaryItem,
  SummaryPriceCost,
  SummaryPriceDrop,
  SummaryTotal,
  Navbar,
  NavbarA,
  NavItem,
  IconRight,
  ActiveIcon,
  BorderShadow,
  SummaryBorder,
  SummaryShipmentItem,
  SummaryPriceShipment,
  SummaryBrand,
  SummaryPriceList,
  FinishContent,
  FinishTitle,
  FinishOrder,
  FinishInfo,
} from "./finish.styled";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../style.css";

const FinishPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar>
        <NavbarA href="/">
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
            <ActiveIcon>2</ActiveIcon>
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
            <ActiveIcon>3</ActiveIcon>
            Finish
          </NavItem>
        </NavbarA>
      </Navbar>
      {/* End Navbar */}
      <Card>
        <Row>
          <LeftSide>
            <FinishContent>
              <BorderShadow />
              <FinishTitle>
                <h1>Thank You</h1>
              </FinishTitle>
              <FinishOrder>
                <h4>Order ID: XXKYB</h4>
              </FinishOrder>
              <FinishInfo>
                <p>Your order will be delivered today with GO-SEND</p>
              </FinishInfo>
              <BackArrow href="/homepage">
                <AiOutlineArrowLeft />
                <BackArrowP>Back to Homepage</BackArrowP>
              </BackArrow>
            </FinishContent>
          </LeftSide>
          <RightSide>
            <SummaryInfo>
              <SummaryTitle>
                <h1>Summary</h1>
              </SummaryTitle>
              <SummaryItem>
                <p>10 items purchased</p>
                <SummaryBorder></SummaryBorder>
                <SummaryShipmentItem>
                  <h4>Delivery estimation</h4>
                  <p>today by GO-SEND</p>
                </SummaryShipmentItem>
                <SummaryBorder></SummaryBorder>
                <SummaryShipmentItem>
                  <h4>Payment Method</h4>
                  <p>Bank Transfer</p>
                </SummaryShipmentItem>
                <SummaryPriceList>
                  <SummaryPriceCost>
                    <p>Cost of goods</p>
                    <h4>500,000</h4>
                  </SummaryPriceCost>
                  <SummaryPriceDrop>
                    <p>Dropshipping Fee</p>
                    <h4>5,900</h4>
                  </SummaryPriceDrop>
                  <SummaryPriceShipment>
                    <SummaryBrand>
                      <h4>GO-SEND</h4>
                      <p>Shipment</p>
                    </SummaryBrand>
                    <h4>15,000</h4>
                  </SummaryPriceShipment>
                  <SummaryTotal>
                    <h1>Total</h1>
                    <h1>520,900</h1>
                  </SummaryTotal>
                </SummaryPriceList>
              </SummaryItem>
            </SummaryInfo>
          </RightSide>
        </Row>
      </Card>
    </>
  );
};

export default FinishPage;
