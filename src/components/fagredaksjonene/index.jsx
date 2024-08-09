import React from "react";
import Cards from "../cardsUI";
import {CardContainer, Container} from "./index.styles";

export default function Fagredaksjonene() {
  return (
    <CardContainer>
      <h3>Fagredaksjonene</h3>
      <Container>
        <Cards />
      </Container>
    </CardContainer>

  );
}