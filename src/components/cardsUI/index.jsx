import React from "react";
import { ImageContainer, CheckboxContainer, Card, CardInfo } from "./index.styles";
import Checkbox from "../checkbox";
import cards from "../cardsInfo";
import { useState, useEffect } from "react";

export default function Cards() {
  const [newsletter, setNewsletter] = useState([]);

  useEffect(() => {
    setNewsletter(cards);
  }, []);

  const color = [
    { backgroundColor : "var(--blue)" },
    { backgroundColor : "var(--yellow)" },
    { backgroundColor : "var(--teal)" },
    { backgroundColor : "var(--green)" },
    { backgroundColor : "var(--beige)" },
    { backgroundColor : "var(--rose)" },
    { backgroundColor : "var(--red)" },
  ]

  return (
    <>
      {newsletter.map((card, index) => (
        <Card key={card.id}>
          <ImageContainer style={color[index % color.length]}>            <card.image />
          </ImageContainer>
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