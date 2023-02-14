import React, { useState, useEffect } from 'react';
import que  from './que.jsx';
import CoffeeQ1  from './coffee-q1';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import {Back, ClickButton, Generation, NameForm, NextButton, Question, Title} from '../ui-components'
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';
import { Link, useLocation, useParams } from "react-router-dom";


export  const testdesu = (passData2) => {
  if ( passData2[1] == 3) {
   return <> <center><div className="d-grid gap-2"><Link to={`/result`} state={{ state: passData2 }}><Button variant="contained" className="btn-dark btn-lg">次へ</Button></Link></div></center><Link to={`/`}><Back /></Link></>
  } else {
    return <> <Link to={`/`}><Back/></Link> </>
  }
}

// 値の中身確認用
export default function TestResult() {
  const location = useLocation();
  const passData2 = location.state.state
  return (
    <>
    <div>
    {passData2.map((pD, index) => (
        <p key={ index }>{ pD }だよ</p>
      ))}
      {testdesu(passData2)}
    </div>
    </>
  )
}