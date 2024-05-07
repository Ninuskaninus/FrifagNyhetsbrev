import React from "react";
import { CheckboxContainer, Card, CardInfo } from "./index.styles";
import Checkbox from "../checkbox";
import cards from "../cardsInfo";
import { useState, useEffect } from "react";

export default function Cards() {
  const [newsletter, setNewsletter] = useState([]);

  useEffect(() => {
    setNewsletter(cards);
  }, []);

  return (
    <>
      {newsletter.map((card) => (
        <Card key={card.id}>
          <card.image />
          <CardInfo>
            <card.description />
            <CheckboxContainer>
              <Checkbox text={card.release}  name={card.name} id={card.id} />
            </CheckboxContainer>
          </CardInfo>
        </Card>
      ))}
    </>
  );
}