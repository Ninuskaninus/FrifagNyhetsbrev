import React from "react";
import Top from "../../components/heading";
import Frifag from "../../components/frifag";
import { Form } from "./index.styles";
import FrifagSmall from "../../components/frifagSmall";
import Fagredaksjonene from "../../components/fagredaksjonene";
import Email from "../../components/email";


export default function Main() {
  return (
    <Form  id="postForm">
      <Top />
      <Frifag />
      <FrifagSmall />
      <Fagredaksjonene />
      <Email />
    </Form>
  );
}

