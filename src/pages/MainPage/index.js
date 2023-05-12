import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import './index.css';
import { Container, Logo, Title, Form, Input, Button } from './styles';
import githubLogo from '../../assets/image/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="Procurar Github" />
      <Title>Procurar Github</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
      <footer>
        <div>&copy; 2023 Alberto Medeiros. Todos os direitos reservados.</div>
      </footer>
    </Container>
  );
};

export default MainPage;
