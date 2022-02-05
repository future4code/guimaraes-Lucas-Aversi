import React from 'react'
/* import styled from 'styled-components'
 */

class Chat extends React.Component{
    state ={
        chatmsg:  [],

        inputNome: "",
        inputMsg:""       
    };

    enviarMsg = () =>{
        const novaMsg = {
            nome: this.state.inputNome,
            msg: this.state.inputMsg
        };
        
        const addNovaMsg = [...this.state.chatmsg, novaMsg
        ];

        this.setState({chatmsg: addNovaMsg});   
    };

    onChangeAddNome = (e) => {
        this.setState({inputNome: e.target.value});       
    };

    onChangeAddMsg = (e) => {
        this.setState({inputMsg: e.target.value});
    };
    
        render(){

        const msgList = this.state.chatmsg.map((mensagem) =>{
            return (
                    <li>
                        {mensagem.nome} - {mensagem.msg}
                    </li>
            );
        });
        return(
            <div className='Chat'>
                <div>
                    <input
                    value={this.state.inputNome}
                    onChange={this.onChangeAddNome}
                    placeholder={"Nome"}
                    />

                    <input
                    value={this.state.inputMsg}
                    onChange={this.onChangeAddMsg}
                    placeholder={"Digite a sua mensagem"}
                    />

                    <button
                     onClick={this.enviarMsg}>Enviar</button>      
                </div>
                <div className='Chat__Vertical'>{msgList}</div>

            </div>
        );
   }
}
export default Chat