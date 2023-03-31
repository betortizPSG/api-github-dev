import React from 'react';
import { Container, Descricao, Footer, Lang, Link, Name } from './styles';

const Repository = () => (
  <Container color="#f37272">
    <Name>Repository Name</Name>
    <Descricao>Repository description</Descricao>
    <Footer color="#f37272">
      <Lang>Repository Lang</Lang>
      <Link href="http://www.psgtecnologia.com.br/" target="_blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

export default Repository;
