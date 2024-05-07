import React from "react";
import Top from "../../components/top";
import Frifag from "../../components/frifag";
import { Form } from "./index.styles";
import Top2 from "../../components/top2";
import Fagredaksjonene from "../../components/fagredaksjon";
import Email from "../../components/email";
import Confirm from "../../components/confirm";
import form from "../../js/form.js";
import { useState } from "react";


export default function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkbox = document.querySelectorAll("input[type=checkbox]");
    const checked = Array.from(checkbox)
      .filter((box) => box.checked)
      .map((box) => box.id);

    const email = document.getElementById("epost").value;

    const formObject = {
      checked,
      email,
    };

    setIsLoading(true);
    try {
      await form(formObject);
      setSuccessMessage("Registration successful.");
    } catch (error) {
      setErrorMessage("An error occurred while registering.");
    }
    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit} id="postForm">
      <Top />
      <Frifag />
      <Top2 />
      <Fagredaksjonene />
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <Email />
      <Confirm />
    </Form>
  );
}

