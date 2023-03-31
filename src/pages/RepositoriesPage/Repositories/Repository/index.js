import React from 'react';
import PropTypes from 'prop-types';
import { Container, Descricao, Footer, Lang, Link, Name } from './styles';

const Repository = ({ repository }) => (
  <Container color="#f37272">
    <Name>{repository.name}</Name>
    <Descricao>{repository.description}</Descricao>
    <Footer color="#f37272">
      <Lang>{repository.language}</Lang>
      <Link href={repository.html_url} target="_blank">
        Ver
      </Link>
    </Footer>
  </Container>
);

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};

export default Repository;
