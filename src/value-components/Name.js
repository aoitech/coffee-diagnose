import React,  { useState } from "react";
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "../App.css";


export const GetValue = () => {
  const [text, setText] = useState('');
  const [nameValidated, setNameValidated] = useState(false);

  const handleNameSubmit = (e) => {
    const validNameForm = e.currentTarget;
    console.log(validNameForm)
    if (validNameForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setNameValidated(true);
  }

  return (
    <>
    <Form noValidate validated={nameValidated} onSubmit={handleNameSubmit}>
      <Form.Group as={Col}  controlId="validationCustom03"  >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" value={ text } onChange={(e) => setText(e.target.value)}  required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid city.
        </Form.Control.Feedback>
        {/* <input class="form-control" required  type="text" value={ text } onChange={(e) => setText(e.target.value)}  placeholder=""  /> */}
      </Form.Group>
    </Form>
    </>
  );
}




