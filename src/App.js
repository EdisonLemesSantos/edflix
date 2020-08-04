import React from 'react';
import styled from 'styled-components';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function App() {
  return (
    <AppWrapper>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"o que é Front-end? Trabalhando na área os termos HTML, CSS, JAVASCRIPT"}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer/>

      </AppWrapper>

  );
}

export default App;
