import React from "react"
import styled from "styled-components";
const Fase3 = styled.div`

button{
    display:none;
}
`



export default class Form3 extends React.Component {
    render() {
   
        return (
          <Fase3>
            <h1>FASE 3</h1>
            <div>
                <form>
                    <div>
                        <label />Por que você não terminou um curso de graduação?
                        <input type={"text"} />
                    </div>

                    <div>
                        <label /> Voce fez algum curso?
                            <input type = "checkbox" id = "nenhum" name = "nenhum" value = "nenhum"/>Nenhum
                            <input type = "checkbox" id = "ingles" name = "ingles" value = "ingles"/>Inglês
                            <input type = "checkbox" id = "tecnico" name = "tecnico" value = "tecnico"/>Tecnico
                    </div>
                </form>
            </div>

          </Fase3>
        );
      }
    }


