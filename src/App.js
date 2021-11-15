import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCode/QRCodeCanvas';
import Header from './header/Header';

function App() {

  // A gente começa com estado vazio
  const[text, setText] = useState("")
  return (
    <>
      <Header />
      <div className="App">
        {/* value={text} -> o meu input é o valor desse estado no caso vazio*/}
        {/*  onChange={(element) => {setText(element.target.value)}} -> aqui é pra falar que quando o meu input modificar eu preciso atualizar o estado do meu input*/}
        <input placeholder="Digite para montar o QrCode" onChange={(element) => {setText(element.target.value)}} value={text}></input>
        <QRCodeCanvas text={text}></QRCodeCanvas>
    </div>
    </>
  );
}

export default App;
