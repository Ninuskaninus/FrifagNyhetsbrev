import React from "react";
import Top from "../../components/heading";
import Frifag from "../../components/frifag";
import { Form } from "./index.styles";
import Top2 from "../../components/frifagSmall";
import Fagredaksjonene from "../../components/fagredaksjonene";
import Email from "../../components/email";
import Confirm from "../../components/confirmBtn";
import ConfirmMessage from "../../components/confirmMessage";
import CheckedList from "../../components/checkedList";

export default function Main() {
  return (
    <Form  id="postForm">
      <Top />
      <Frifag />
      <Top2 />
      <Fagredaksjonene />
      <ConfirmMessage />
      <CheckedList />
      <Email />
      <Confirm />
    </Form>
  );
}

