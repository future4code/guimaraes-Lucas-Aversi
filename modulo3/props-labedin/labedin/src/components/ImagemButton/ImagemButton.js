import React from 'react';
import styled from 'styled-components'


const ImgButtonContainer = styled.div `
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 15px 30px;
margin: 10px auto;

    img {
    width: 30px;
    margin-right: 10px;
}
    &:hover{
        background-color: black;
        color: white;
        

        img{
            background-color: white;
        }
    }
`

function ImagemButton(props) {
    return (
        <ImgButtonContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImgButtonContainer>

    )
}

export default ImagemButton;