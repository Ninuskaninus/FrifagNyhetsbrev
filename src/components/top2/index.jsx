import React from "react";
import Images from "../images";
import Descriptions from "../descriptions";
import Checkbox from "../checkbox";
import {Card, CardInfo} from "./index.styles";

export default function Top2() {
  return (
    <>
      <Card>
      <Images.Rorsla />
      <CardInfo>
        <Descriptions.Rorsla />
          <Checkbox id="798" text="Annenhver uke" />
      </CardInfo>
      </Card>
      <Card>
        <Images.Utenriks />
        <CardInfo>
          <Descriptions.Utenriks />
            <Checkbox id="39517" text="Hver uke" />
        </CardInfo>
      </Card>
        <Card>
        <Images.Lonnsoppgjør />
        <CardInfo>
          <Descriptions.AltOmLønnsoppgjøret />
            <Checkbox id="50708" text="Under lønnsoppgjøret" />
        </CardInfo>
      </Card>
    </>
  )
}