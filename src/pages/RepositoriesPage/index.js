import React from 'react';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';

export default function RepositoriesPage() {
  const user = {
    login: 'betortiz',
    name: 'Alberto Cabral Ortiz de Medeiros',
    avatar_url: 'https://avatars.githubusercontent.com/u/66643506?v=4',
    company: 'PSG Tecnologia',
    location: 'Campo Grande - MS',
    blog: null,
    followers: 5,
    following: 2,
  };

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'JavaScript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'C#',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'PHP',
    },
    {
      id: '4',
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'JavaScript',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'Python',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'Java',
    },
  ];

  const languages = [
    { name: 'Javascript', count: 4, color: '#f1c40f' },
    { name: 'C#', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 1, color: '#3498db' },
    { name: 'Java', count: 1, color: '#9b59b6' },
  ];

  return (
    <>
      <Container>
        <Sidebar>
          <Profile user={user} />
          <Filter languages={languages} />
        </Sidebar>
        <Main>
          <Repositories repositories={repositories} />
        </Main>
      </Container>
    </>
  );
}
