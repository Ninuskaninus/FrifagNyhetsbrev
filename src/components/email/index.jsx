import React from "react";
import {EmailContainer, EmailInput} from "./index.styles";

const handleForm = () => {
  alert("Du er nå påmeldt!");
  window.location("https://www.frifagbevegelse.no");
}

export default function Email() {
  return (
    <EmailContainer>
      <h3>Din e-postadresse<span>*</span></h3>
      <EmailInput>
        <label htmlFor="epost"></label>
        <input
          type="email"
          name="epost"
          id="epost" />
      </EmailInput>
      <button onClick={handleForm} type="button" id="confirm">Meld meg på</button>
    </EmailContainer>
  );
}