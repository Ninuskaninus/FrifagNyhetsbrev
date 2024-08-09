import React from "react";
import { CheckboxContainer, FrifagInfo, FrifagItem, FrifagCard } from "./index.styles";
import Images from "../images";
import Descriptions from "../descriptions";
import Checkbox from "../checkbox";

export default function Frifag() {
  return (
    <FrifagItem>
      <h3>FriFagbevegelse</h3>
      <FrifagCard>
        <Images.Frifag />
        <FrifagInfo>
          <Descriptions.FriFagbevegelse />
          <CheckboxContainer>
            <Checkbox id="39475" text="Hver dag" />
            <Checkbox id="34592" text="Hver uke" />
          </CheckboxContainer>
        </FrifagInfo>
      </FrifagCard>
    </FrifagItem>
  );
}