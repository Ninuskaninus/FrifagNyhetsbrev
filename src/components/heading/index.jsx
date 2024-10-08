import React from "react";
import {TopItem, TopInfo} from "./index.styles";
import Descriptions from "../descriptions";


export default function Top() {
  return (
    <TopItem>
      <h1>Abonner på våre nyhetsbrev!</h1>
      <TopInfo>
        <Descriptions.Top />
      </TopInfo>
    </TopItem>
  );
}