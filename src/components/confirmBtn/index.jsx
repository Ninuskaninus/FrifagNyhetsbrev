import React from "react";
import {ConfirmContainer} from "./index.styles";

export default function Confirm() {

  const sucsess = document.getElementById("sucsess");
  const onClick = (e) => {
    sucsess.style.display = "block";
    setTimeout(() => {
      sucsess.style.display = "none";
    }, 3000);
  }


  return (
    <ConfirmContainer>
      <a target="_blank" href="https://personvern.lomedia.no/" rel="noreferrer">Personvernerklæring</a>
      <button onClick={onClick} type="button" id="confirm">Bekreft</button>
      <p><span>*</span> Når du oppgir adresse og klikker «bekreft», gir du samtykke til å motta nyhetsbrev på den oppgitte epostadressen.</p>
    </ConfirmContainer>
  );
}