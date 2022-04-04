import React from 'react'
import styled from 'styled-components'

const Headers = styled.div`
width: 100vw;
height: 10vh;
background: black;
color: white;
display: flex;
justify-content: center;
align-items: center;


`

const LogoDiv = styled.div`
display: flex;

`

const Title = styled.h1`

`


const Header = () => {
  return (
    <Headers>   
      <LogoDiv>
        <Title>
          SPACE X
        </Title>
        
      </LogoDiv>

    </Headers>
  )
}

export default Header