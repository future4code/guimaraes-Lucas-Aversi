import React from 'react'
import axios from 'axios'

export default class Form extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };
  addNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  addEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };
  addUser = () => {
    const body = {
      nome: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        
        {
          headers: {
            Authorization: "lucas-aversi-guimaraes",
          },
        }
      )
      .then((res) => {
        console.log(res.data.result.list)

/*         alert("Usuário criado com sucesso!"); */
      })
      .catch((err) => {
/*         alert("Erro ao criar o usuário!");
 */      });
  };
  
  render() {
    return (
      <div>
        <button onClick={this.props.onClickirEdição}>Ir para edição</button>
        <label>Nome: </label>
        <input
            placeholder="insira seu nome"
            value={this.state.inputNome}
            onChange={this.addNome}
          />
          <label>Nome: </label>
          <input
            placeholder="insira seu email"
            value={this.state.inputEmail}
            onChange={this.addEmail}
          />
          <button onClick={this.addUser}> Adicionar Usuário </button>
        </div>
    );
  }
}