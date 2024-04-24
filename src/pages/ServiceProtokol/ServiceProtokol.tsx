import React from "react";
import "./ServiceProtokol.scss";

const ServiceProtokol: React.FC = () => {
  return (
    <div className="Text2">
      <h1>Service Protokoll Sida</h1>
      <p>Här väljer du vilken service du behöver utföra!</p>
      <p>
        Efter avslutad service kommer det att finnas en knapp längst ner på
        sidan som heter
        ( Skicka till Förman ).
      </p>
      <p>
        Den kommer att samla all data som har skrivits eller klickats på och
        skicka den som ett e-postmeddelande.
      </p>
      <h3>Till förmannen, som får rapporten om ditt arbete...</h3>
    </div>
  );
};

export default ServiceProtokol;
