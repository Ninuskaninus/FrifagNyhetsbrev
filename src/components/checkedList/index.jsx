import React from "react";
import {Container} from "./index.styles";

export default function CheckedList() {
  return (
    <Container>
      <h3>Disse nyhetsbrevene er valgt:</h3>
      <ul>
        <li><p>NFF-magasinet - Hver uke</p><button type="button">Angre</button></li>
        <li><p>NFF-magasinet - Hver uke</p><button type="button">Angre</button></li>
        <li><p>NFF-magasinet - Hver uke</p><button type="button">Angre</button></li>
      </ul>
    </Container>
  );
}