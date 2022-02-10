import React from "react"
import styled from "styled-components";
import './App.css';
import Form1 from "./Components/Form1"
import Form2 from "./Components/Form2"
import Form3 from "./Components/Form3"
import Agradecimentos from "./Components/Agradecimentos"





export default class App extends React.Component {

  state= {
    etapa:1,
    ensinosuperior:true,

  }
  onClickEtapa = () => {
    this.setState({etapa: this.state.etapa +1})    
  }

  onClickVoltaEtapa = () =>{
    this.setState({etapa: this.state.etapa -1})
  }
  onChangeSuperior = () => {
    this.setState({ensinosuperior: false})
  }



/*   
  proximaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
       return <Form1 />;
      case 2:
        if(ensinosuperior===true){
          return <Form2 />
        }else{

       return <Form3 />;
        }   
      case 3:
       return <Agradecimentos />;
      default:
        console.log("Invalido");
        break;
    }
  } */




  proximaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
       return <Form1 />;
      case 2:
       return <Form2 />;   
      case 3:
        return <Form3 />;
      case 4:
       return <Agradecimentos />;
      default:
        console.log("Invalido");
        break;
    }
  }
    

  render(){
  return (
    <div>
     {Form1}
     { this.proximaEtapa()}
     <button onClick={this.onClickVoltaEtapa}>Anterior</button>
     <button onClick={this.onClickEtapa}>Próximo</button>
   
    </div>
  );
}
}
