"use client";
 
import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
 
interface InputPasswordProps {
  label: string;
  inputName: string;
  value?: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | undefined;
}
 
export function InputPassword(props: InputPasswordProps) {
  const { label, inputName, value, id, onChange, error } = props;
 
  return (
    <>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        id={id}
        type="password"
        name={inputName}
        value={value ?? ""}
        onChange={onChange}
        isInvalid={!!error}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </>
  );
}