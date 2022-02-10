import React from 'react'
import styled from 'styled-components';


const Header = styled.div`
    background: black;
    width: 90vw;
    height: 8vh;
    margin-bottom:10px;
    border-radius:10px;
    color:gold;
    text-align: center;
    justify-content:center;    
    border-top: solid gold thin;
    border-bottom: solid gold thin;

    p{
        color: gold;
        margin: auto;
        padding: 15px;
    }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  margin:auto;
  

`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin:auto;
  

`
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 80vh;
    border: solid gold thin;
    background-color: black;
    border-radius: 10px 10px 0 0 ;

`
const Contatos = styled.div`
    flex-direction: column
    display: flex   ;
    height: 10%;
    width: 90%;
    border: solid gold thin;
    background-color: black;
    border-radius: 10px ;
    margin: auto;
    max-width: 20vw;
    min-width:20vw;
    overflow:auto;
  
  &::-webkit-scrollbar { 
  display: none}
    


    h1{
        color: white;
        font-size: 1.0em;
        padding-left: 0.5vw;
        margin: auto;
        font-weight: 600;
        
    }

    p{
        color: white;
        font-size: 0.8em;
        padding-left: 2vw;
        margin: 5px 2px;
    }

    @media screen and (max-width: 590px) {
        
        p{
            font-size:0.5em;
  
        }

        h1{
            font-size:0.3em;

        }
    }


    @media screen and (max-width: 727px) {
        
        p{
            font-size:0.8em;
  
        }

        h1{
            font-size:0.8em;
        }
    }

    

`

const ChatVertical = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80vh;
  border: solid gold thin;
  background-color: black;
  border-radius: 10px 10px 0 0 ;
  overflow:auto;
  
  &::-webkit-scrollbar { 
  display: none;
}

  

    li{
    padding-left: 10px;
    word-wrap: break-word;
    list-style-type:none;
    color: gold;

    }
`

const Msg = styled.div`
    margin: 10px 10px;
    background-color: black;
    width: fit-content;
    border-radius: 3px;
    border: solid gold thin;
    border-image: linear-gradient(75deg, greenyellow, wheat, greenyellow) 0.5;
    padding: 5px 5px;
    

`


const ChatFooter = styled.div`
    display: flex;
    width: auto;
    height: fit-content;
    border: solid gold thin;
    flex: row;
    
    button{
        height: 25px;
        width: 10vw;
        border: solid gold thin;
        border-radius: 7%;
        color: gold;
        background: black;
        border-image: linear-gradient(75deg, greenyellow, wheat, greenyellow) 10;        
    }

    @media screen and (max-width: 726px) {
        flex-direction: column;
        
        button{
            flex:1;
            margin: auto;

        }
    }


`
const Input1 = styled.input`
    size: 12.5rem;
    flex: 0.6;
    font-weight: bold;   
    border-radius: 10px;
    background: black;
    color: orange;
    border-image: linear-gradient(75deg, greenyellow, wheat, greenyellow) 10;


`
const Input2 = styled.input`
    size: 12.5rem;
    flex: 1.4;
    font-weight: bold;   
    border-radius: 10px;
    background: black;
    color: orange;
    border-image: linear-gradient(75deg, greenyellow, wheat, greenyellow) 10;



`


function Title(props) {
  return <h1> {props.titulo} 
   </h1>;
}

function Subtitle (props) {
    return <p> {props.mensagem} 
     </p>;
  }

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
        this.setState({ inputNome: "", inputMsg:"" });
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
                    <Msg>
                    <li>
                        {mensagem.nome}:  {mensagem.msg}
                    </li>
                    </Msg>
            );
        });
        return(
            
            <Main>
                <Header>
                    <p>FALTAM 14 DIAS PARA O LANÇAMENTO</p>
                </Header>
                <Container>
                <ChatVertical>
                {msgList}
                
                </ChatVertical>
                <Sidebar>
                    <Contatos> 
                        <Title titulo="Nome do contato 1"  />
                        <Subtitle mensagem="Nossa que Fuxico..." />
                    </Contatos>
                    <Contatos> 
                    <Title titulo="Nome do contato 2"  />
                        <Subtitle mensagem="Compra pão..." />
                    </Contatos>
                    <Contatos> 
                        <Title titulo="Nome do contato 3"  />
                        <Subtitle mensagem="Bla Bla bla..." />
                    </Contatos>
                    <Contatos> 
                        <Title titulo="Nome do contato 4"  />
                        <Subtitle mensagem="Ipsun Lorem..." />
                    </Contatos>
                    <Contatos> 
                        <Title titulo="Nome do contato 5"  />
                        <Subtitle mensagem="www.google.com..." />
                    </Contatos>
                    <Contatos> 
                        <Title titulo="Nome do contato 6"  />
                         <Subtitle mensagem="www.google.com..." />
                    </Contatos>
                    <Contatos> 
                        <Title titulo="Nome do contato 7"  />
                        <Subtitle mensagem="Te enviou um vídeo..." />
                    </Contatos>
                    <Contatos> 
                        <Title titulo="Nome do contato 8"  />
                        <Subtitle mensagem="Oi sumido..." />
                    </Contatos>
                    <Contatos> 
                        <Title titulo="Nome do contato 9"  />
                        <Subtitle mensagem="Obrigado por..." />
                    </Contatos>

                </Sidebar>
                </Container>
                <ChatFooter> 
                    <Input1 
                    value={this.state.inputNome}
                    onChange={this.onChangeAddNome}
                    placeholder={"Digite seu nome"}
                    />
                    

                    <Input2 
                    value={this.state.inputMsg}
                    onChange={this.onChangeAddMsg}
                    placeholder={"Digite a sua mensagem"}
                    />
                    

                    <button
                     type='submit'
                     onClick={this.enviarMsg}>Enviar</button>   
                     </ChatFooter>   
                
            </Main>
        );
   }
}
export default Chat