import React from 'react';
import PropTypes from 'prop-types';
import { langColors } from '../../../../services/config';
import { Container, Descricao, Footer, Lang, Link, Name } from './styles';

const Repository = ({ repository }) => {
  const color =
    langColors[repository.language && repository.language.toLowerCase()];
  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Descricao>{repository.description}</Descricao>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
};

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
