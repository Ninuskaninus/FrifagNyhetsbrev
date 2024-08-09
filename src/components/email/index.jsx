import React from "react";
import {EmailContainer, EmailInput} from "./index.styles";

export default function Email() {
  return (
    <EmailContainer>
      <h3>Din e-postadresse <span>*</span></h3>
      <EmailInput>
        <label htmlFor="epost"></label>
        <input
          type="email"
          name="epost"
          id="epost" />
      </EmailInput>
    </EmailContainer>
  );
}