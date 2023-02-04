import  { useState } from "react";
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
export const GetValue = () => {
  // useStateの初期値('')がtextに入る
  // setTextは値を更新する際に呼び出す
  const [text, setText] = useState('');
  // const {
  //    register,
  //    handleSubmit,
  //    formState: { errors }
  //    } = useForm();

  return (
    <>
      <input class="form-control" type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="" aria-label="default input example"></input>
    </>
  );
}




