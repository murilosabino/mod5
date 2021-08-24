import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from '../src/header/Header'
import Formulario from '../src/formulario/Formulario';
import Footer from '../src/footer/Footer';

class App extends React.Component {
  render(){
  return(
    <div className="grid-container">
      <Header></Header>
      <Formulario></Formulario>
      <Footer></Footer>
    </div>
  )
}
}
export default App;