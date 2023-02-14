import  { useState, useRef } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
// import { Button } from "@mui/material";


export function GetGender() {
  const genders = [
    { id: 1, name: '男性' },
    { id: 2, name: '女性' },
    { id: 3, name: 'その他' }
  ];

  const [ gender, setGender ] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const validForm = e.currentTarget;
    // console.log(validForm)
    if (validForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  }

  return (
    <>
      { genders.map((gen, i) => (
        <div className="col-3" key={ i }>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit" required feedbackType="invalid" onClick={(e) => setGender(e.currentTarget.value)} value={ gen.id } className="btn-light btn-outline-dark p-3">
              {gen.name}
            </Button>
          </Form>
        </div>
      ))}
      <input type="hidden"  value={ `${ gender }` ? `${ gender }` : '' }></input>
    </>
  );
}

