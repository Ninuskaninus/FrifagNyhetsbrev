import React from "react";
import {Container} from "./index.styles";

export default function StickyMessage() {
  const scrolldown = () => {
    console.log("scrolling down")

  }

  return (
    <Container onClick={scrolldown}>
      <h5>⬇️ Husk å skrive inn eposten din for å melde deg på</h5>
    </Container>
  )
}