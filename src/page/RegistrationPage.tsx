import React from "react";
import RegistrationForm from "../component/RegistrationForm";

function RegistrationPage() {
  return (
    <div className="access flex h-screen">
      <div className="form order-1">
        <RegistrationForm />
      </div>
      <div className="promo w-full bg-no-repeat bg-center" />
    </div>
  );
}

export default RegistrationPage;
