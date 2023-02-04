import React from 'react';
import { useForm } from 'react-hook-form';
import que  from './que.jsx';
import CoffeeQ1  from './coffee-q1';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import {AnswerButtonCollection, Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import ComicLightlargeBase from '../ui-components/ComicLightlargeBase';
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";


  export default function Result() {
    const locationSecond = useLocation();
    const result = locationSecond.state.state
    console.log(result)
    return (
    <>
  <div className="App">
    <Container className="justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
    <Container className="justify-content-center">
    <div class="web-header">
      <div className="p-4">さくらさんにぴったりなコーヒー豆は・・・</div>
      <Button className="btn-light btn-outline-dark p-3 disabled">FUKUSUKE BLEND</Button>
      <div class="p-2"></div>
      <center><img src="https://fukusukecoffee.com/wp-content/uploads/2022/12/2-1.png" alt="fukusukeblend" width="400px" /></center>
      <div class="p-2"></div>
      <center><div className="d-grid gap-2"><Link to={`/coffee-q1`}><Button className="btn-dark btn-lg">購入する</Button></Link></div></center>
      <Link to={`/`}><Back/></Link>
    <div class="p-4"></div>
    </div>
    </Container>
  </div>
    </>
  );
}