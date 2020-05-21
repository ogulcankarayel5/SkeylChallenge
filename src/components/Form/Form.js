import React, { useContext } from "react";
import FormContext from "../../context/formContext/FormContext";
import ClipLoader from "react-spinners/ClipLoader";
import { Form, FormInput } from "./";
import { Button, Textarea } from "../../shared";
import { useForm } from "../../hooks";
import pet3 from "../../utils/pet3.json";

export const FormComponent = () => {
  const { jsonData, getValueFromJson, loading } = useContext(FormContext);

  console.log(jsonData);

  const initialState = {
    formInput: "",
  };

  const submit = () => {

    getValueFromJson(pet3, values.formInput);
    clearForm();
  };
  const { values, handleChange, handleSubmit, clearForm } = useForm(
    initialState,
    submit
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        value={values.formInput}
        name="formInput"
        placeholder="lütfen düzgün formatta bir değer giriniz (components.tags gibi)"
        onChange={handleChange}
        aria-label="form-input"
      />
      {loading ? <ClipLoader size={150} /> : <Button type="submit"/>}
      <Textarea
        placeholder="Butona bastıktan sonra değer burada gözükecek"
        value={jsonData ? jsonData : ""}
        marginTop={"2rem"}
      />
    </Form>
  );
};
