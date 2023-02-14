import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GetValue }  from '../value-components/Name.js';
import { GetGender } from '../value-components/Gender.js';
import { onClick }  from '../value-components/Gender.js';
import { GetAge }  from '../value-components/Age.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import "../App.css";
import {Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { renderHook } from '@testing-library/react';

export default function que() {
  const form = GetValue();
  const getGender = GetGender();
  const getAge = GetAge();
  // const formValue = form.props.children.props.value
  const formValue = form.props.children.props.children.props.children[1].props.value
  console.log(formValue)
  const genderId = getGender.props.children[1].props.value
  const ageId = getAge.props.children[1].props.value
  const queValue = [];
  // スプレッド構文
  const addQueValue = [...queValue, formValue, genderId, ageId];


  return (
    <>
  <div className="App">
      <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
      <Container className="justify-content-center">
      <div class="web-header">
        <div className="p-4">お名前(ニックネーム)</div>
        { form }
        <div className="p-4">性別</div>
          <Container className="p-4">
          <div class="row justify-content-center" >
              { getGender }
          </div>
          </Container>
        <div className="p-4">年代</div>
        <div class="row justify-content-center p-4" >
        {getAge}
        </div>
          <div class="p-2"></div>
        { genderId == 1 ?
          <center><div className="d-grid gap-2 p-4"><Link to={`/coffee-q1`} state={{ state: addQueValue }}><Button  className="btn-dark btn-lg" type="submit">次へ</Button></Link></div></center> :
          <center><div className="d-grid gap-2"><Link to={`/test-result`} state={{ state: addQueValue }}><Button  className="btn-dark btn-lg" type="submit">テスト次へ</Button></Link></div></center>
        }
        <Link to={`/`}><Back/></Link>
      <div class="p-4"></div>
      </div>
      </Container>
  </div>
    </>
  );
}