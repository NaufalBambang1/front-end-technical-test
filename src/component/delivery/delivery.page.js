import "../style.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Row,
  Card,
  BackArrow,
  BackArrowP,
  DeliveryInfo,
  Form,
  FormInfo,
  FormGroup,
  FormItem,
  LeftSide,
  RightSide,
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
} from "./delivery.styled";
import { useForm } from "react-hook-form";
import { useState } from "react";

const DeliveryPage = () => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [checkBoxValue, setCheckBoxValue] = useState(true);
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setCheckBoxValue(false);
    } else {
      setCheckBoxValue(true);
    }
  };
  return (
    <div className="container">
      <Navbar>
        <NavbarA href="/ ">
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
      {/* Card */}
      <Card>
        <Row>
          <LeftSide>
            <BackArrow href="/cart">
              <AiOutlineArrowLeft />
              <BackArrowP>Back to Cart</BackArrowP>
            </BackArrow>
            <BorderShadow />
            <DeliveryInfo>
              <h1>Delivery Details</h1>
              <div className="checkbox-container">
                <input type="checkbox" id="checkdrop" onChange={handleCheckbox} />
                <label> Send as dropshipper</label>
              </div>
            </DeliveryInfo>
            {/* Form */}
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormInfo>
                <FormGroup>
                  <FormItem>
                    <input
                      type="email"
                      className={"form-control " + (errors.email ? "invalid" : "valid")}
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
                        },
                      })}
                      // required
                      onKeyUp={() => {
                        trigger("email");
                      }}
                      placeholder="Email"
                    />
                    {/* <label>Email</label> */}
                  </FormItem>
                  <FormItem>
                    <input type="text" className="form-control" required disabled={checkBoxValue} onChange={handleCheckbox} />
                    <label>Dropshipper name</label>
                  </FormItem>
                </FormGroup>
                <FormGroup>
                  <FormItem>
                    <input
                      type="text"
                      className={"form-control " + (errors.phone ? "invalid" : "valid")}
                      {...register("phone", {
                        required: true,
                        pattern: {
                          value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                        },
                      })}
                      // required
                      onKeyUp={() => {
                        trigger("phone");
                      }}
                      placeholder="Phone Number"
                    />
                    {/* <label>Phone Number</label> */}
                  </FormItem>
                  <FormItem>
                    <input type="text" className="form-control" required disabled={checkBoxValue} onChange={handleCheckbox} />
                    <label>Dropshipper phone number</label>
                  </FormItem>
                </FormGroup>
                <FormItem>
                  <textarea type="text" className="textarea" required />
                  <label>Delivery Address</label>
                </FormItem>
              </FormInfo>
            </Form>
          </LeftSide>
          <RightSide>
            <SummaryInfo>
              <SummaryTitle>
                <h1>Summary</h1>
              </SummaryTitle>
              <SummaryItem>
                <p>10 items purchased</p>
                <SummaryPriceCost>
                  <p>Cost of goods</p>
                  <h4>500,000</h4>
                </SummaryPriceCost>
                <SummaryPriceDrop>
                  <p>Dropshipping Fee</p>
                  <h4>5,900</h4>
                </SummaryPriceDrop>
                <SummaryTotal>
                  <h1>Total</h1>
                  <h1>505,900</h1>
                </SummaryTotal>
              </SummaryItem>
              <ButtonContinue>
                <button type="submit">Continue to Payment</button>
              </ButtonContinue>
            </SummaryInfo>
          </RightSide>
        </Row>
      </Card>
    </div>
  );
};

export default DeliveryPage;
