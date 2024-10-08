import React from "react";
import Images from "../images";
import Descriptions from "../descriptions";
import Checkbox from "../checkbox";
import { Card, CardInfo, ImageContainer } from "./index.styles";

const colors = [
  { backgroundColor: 'var(--rorslaRed)' },
  { backgroundColor: 'var(--beige)' },
  { backgroundColor: 'var(--green)' },
  { backgroundColor: 'var(--red)' },
];

export default function FrifagSmall() {
  return (
    <>
      <Card>
          <ImageContainer style={colors[0]}>
          <Images.Rorsla  />
          </ImageContainer>
      <CardInfo>
        <Descriptions.Rorsla />
          <Checkbox id="798" text="Annenhver uke" />
      </CardInfo>
      </Card>
      <Card>
        <ImageContainer style={colors[1]}>
          <Images.Utenriks />
        </ImageContainer>
        <CardInfo>
          <Descriptions.Utenriks />
            <Checkbox id="39517" text="Hver uke" />
        </CardInfo>
      </Card>
            <Card>
        <ImageContainer style={colors[3]}>
          <Images.Tillitsvalgt />
        </ImageContainer>
        <CardInfo>
          <Descriptions.Tillitsvalgte />
            <Checkbox id="50709" text="Hver uke" />
        </CardInfo>
      </Card>
      <Card>
        <ImageContainer style={colors[2]}>
          <Images.Lonnsoppgjør />
        </ImageContainer>
        <CardInfo>
          <Descriptions.AltOmLønnsoppgjøret />
            <Checkbox id="50708" text="" />
        </CardInfo>
      </Card>

    </>
  )
}