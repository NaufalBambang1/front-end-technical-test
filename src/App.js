import React from "react";
import DeliveryPage from "./component/delivery/delivery.page";
import FinishPage from "./component/finish/finish.page";
import PaymentPage from "./component/payment/payment.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DeliveryPage />}></Route>
          <Route path="/payment" element={<PaymentPage />}></Route>
          <Route path="/finish" element={<FinishPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
