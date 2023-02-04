import  { useState, useRef } from "react";
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { Button } from 'react-bootstrap';

export function GetAge() {

  const ages = [
    { id: 1, name: '10代' },
    { id: 2, name: '20代' },
    { id: 3, name: '30代' },
    { id: 4, name: '40代' },
    { id: 5, name: '50代' },
    { id: 6, name: '60代' },
    { id: 7, name: '70代' },
    { id: 8, name: '80代以上' }
  ]

  const [age, setAge] = useState('');

  return (
    <>
     { ages.map((a, i) => (
      <div class="row justify-content-center p-4" key={ i }>
        <Button onClick={(e) => setAge(e.currentTarget.value)}  value={ a.id } className="btn-light btn-outline-dark p-3">
          {a.name}
        </Button>
      </div>
      ))}
      <input type="hidden"  value={ `${ age }` ? `${ age }` : 0 }></input>
    </>
  );
}