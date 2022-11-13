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
  ButtonContinue,
  Navbar,
  NavbarA,
  NavItem,
  IconRight,
  ActiveIcon,
  IconNumber,
  BorderShadow,
  BorderShadowBottom,
  ShipmentInfo,
  ButtonShipmentGroup,
  PaymentInfo,
  ButtonPaymentGroup,
  SummaryBorder,
  SummaryShipmentItem,
  SummaryPriceShipment,
  SummaryBrand,
} from "./payment.styled";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../style.css";

const PaymentPage = () => {
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
            <IconNumber>3</IconNumber>
            Finish
          </NavItem>
        </NavbarA>
      </Navbar>
      {/* Navbar End */}

      {/* Card */}
      <Card>
        <Row>
          {/* Left Side */}
          <LeftSide>
            <BackArrow href="/">
              <AiOutlineArrowLeft />
              <BackArrowP>Back to delivery</BackArrowP>
            </BackArrow>
            <BorderShadow />
            <ShipmentInfo>
              <h1>Shipment</h1>
            </ShipmentInfo>

            {/*Button Shipment*/}
            <ButtonShipmentGroup>
              <div className="input-container">
                <input id="gosend" type="radio" name="shipment" />
                <div className="button-item">
                  <label>GO-SEND</label>
                  <h4>15,000</h4>
                </div>
              </div>
              <div className="input-container">
                <input id="JNE" type="radio" name="shipment" />
                <div className="button-item">
                  <label>JNE</label>
                  <h4>9,000</h4>
                </div>
              </div>
              <div className="input-container">
                <input id="gosend" type="radio" name="shipment" />
                <div className="button-item">
                  <label>Personal Courier</label>
                  <h4>29,000</h4>
                </div>
              </div>
            </ButtonShipmentGroup>

            {/* Button Payment */}
            <BorderShadowBottom />
            <PaymentInfo>
              <h1>Payment</h1>
            </PaymentInfo>
            <ButtonPaymentGroup>
              <div className="input-container">
                <input id="ewallet" type="radio" name="payment" />
                <div className="button-item">
                  <label>e-Wallet</label>
                  <h4>1,500,000 left</h4>
                </div>
              </div>
              <div className="input-container">
                <input id="bank" type="radio" name="payment" />
                <div className="button-item">
                  <label>Bank Transfer</label>
                  <h4>BCA</h4>
                </div>
              </div>
              <div className="input-container">
                <input id="va" type="radio" name="payment" />
                <div className="button-item">
                  <label>Virtual Account</label>
                  <h4>-</h4>
                </div>
              </div>
            </ButtonPaymentGroup>
          </LeftSide>
          {/* End Left Side */}

          {/* Right Side */}
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
              </SummaryItem>
              <ButtonContinue>
                <button>pay with e-Wallet</button>
              </ButtonContinue>
            </SummaryInfo>
          </RightSide>
          {/* End Right Side */}
        </Row>
      </Card>
      {/* End Card */}
    </>
  );
};
export default PaymentPage;
