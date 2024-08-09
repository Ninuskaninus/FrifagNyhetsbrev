import React from "react";
import {Confirmation, ErrorMessages} from "./index.styles";

export default function ConfirmMessage() {
  return (
    <>
    <Confirmation  id="sucsess">
      <h3>Takk for din interesse!</h3>
      <p>Du vil motta en epost med en bekreftelse på din påmelding.</p>
    </Confirmation>
      <ErrorMessages className="hide" id="error">
        <h3>Feil</h3>
        <p>Det oppstod en feil. Vennligst prøv igjen senere.</p>
      </ErrorMessages>
      </>
  );
}