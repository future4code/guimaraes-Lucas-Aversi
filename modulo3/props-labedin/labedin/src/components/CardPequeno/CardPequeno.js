import React from 'react';
import styled from 'styled-components'

const LittleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;

    img {
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
}
    span {
    margin-bottom: 15px;
    font-weight:bold;
    margin-right: 10px;
}
    p {
    margin-bottom: 15px;
}
    div {
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
}


`


function CardPequeno(props) {
    return (
        <LittleCardContainer>
            <img src={ props.imagem } />
            <div>
                <span>{ props.texto }</span>
                <p>{ props.texto2 }</p>
            </div>
        </LittleCardContainer>
    )
}


export default CardPequeno;