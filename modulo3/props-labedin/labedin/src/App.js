import React from 'react';
import styled, {createGlobalStyle} from 'styled-components'
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

//GLOBAL STYLING

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`

//STYLED-COMPONENTS 

const Wpp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const SectionContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
`
const Titulos = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`  

function App() {
  return (
    
    <Wpp>
      <GlobalStyle />
      <SectionContainer>
        <Titulos />Dados pessoais
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Lucas Aversi" 
          descricao="Oi, eu sou o Lucas, estudo desenvolvimento no labenu e trabalho na secretária de uma escola municipal."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/4350/4350028.png" 
          texto="Email: "
          texto2="@gmail.com"
        />

        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png" 
          texto="Endereço: "
          texto2="Rua dos bobos nº 0"

        />


      </SectionContainer>

      <SectionContainer>
        <Titulos />Experiências profissionais
        <CardGrande 
          imagem="https://projeto-cdn.infra.grancursosonline.com.br/prefeitura-municipal-de-itapecerica-da-serra-sp.png" 
          nome="Prefeitura de Itapecerica da Serra" 
          descricao="Secretário de Escola" 
        />
        
        <CardGrande 
          imagem="https://analise-asset.s3.us-east-2.amazonaws.com/dna-logo-site/2000158-23227-2217-61-2000158-1601305390.png" 
          nome="Marcelo Tostes Advogados" 
          descricao="Assistente administrativo" 
        />
      </SectionContainer>

      <SectionContainer>
        <Titulos />Minhas redes sociais
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </SectionContainer>
    </Wpp>
    
  );
}

export default App;
