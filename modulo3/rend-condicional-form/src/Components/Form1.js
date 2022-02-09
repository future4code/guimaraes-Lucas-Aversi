import React from "react"
import styled from "styled-components";



export default class Form1 extends React.Component {
    render() {
  
        return (
          <div>
            <h1>FASE 1</h1>
            <div>
                <form>
                    <div>
                        <label />Qual o seu nome?  
                        <input type={"text"} />
                    </div>

                    <div>
                        <label />Qual a sua idade?
                        <input type={"text"} />
                    </div>

                    <div>
                        <label />Qual o seu email?
                        <input type={"email"} />
                    </div>

                    <div>
                        <label /> Qual a sua escolaridade?
                        <select name="Idade">
                            <option value="" selected></option>
                            <option value="medioincompleto" >Médio Incompleto</option>
                            <option value="mediocompleto">Médio Completo</option>
                            <option value="superiorincompleto">Superior Incompleto</option>
                            <option value="superiorcompleto">Superior Completo</option>
                        </select>
                    </div>
                </form>
            </div>

          </div>
        );
      }
    }


