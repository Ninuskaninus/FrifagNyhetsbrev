import React from "react";
import {ConfirmContainer} from "./index.styles";

export default function Confirm() {




  return (
    <ConfirmContainer>
      <p><span>*</span> Når du oppgir adresse og klikker «bekreft», gir du samtykke til å motta nyhetsbrev på den oppgitte epostadressen.</p>
      <a target="_blank" href="https://personvern.lomedia.no/" rel="noreferrer">LO Media og personvern</a>
    </ConfirmContainer>
  );
}