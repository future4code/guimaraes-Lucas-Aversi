import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Form from './Components/form'
import Lista from './Components/lista'


export default class App extends React.Component {
  state = {
    page: false
  };

  irEdição = () => {
    this.setState({ page: true });
  };

  irForm = () => {
    this.setState({ page: false });
  };

  render() {

    let pagina = this.state.page ? (
      <Form onClickirEdição={this.irForm} />
    ) : (
      <Lista onClickirForm={this.irEdição} />
    );

    return (
      <div>{pagina}</div>
    )
  }
}
