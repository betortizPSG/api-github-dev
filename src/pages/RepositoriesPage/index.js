import React, { useState } from 'react';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';
import { Container, Sidebar, Main } from './styles';
import { langColors } from '../../services/config';

export default function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState();

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
      language: 'Javascript',
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
      language: 'Javascript',
    },
    {
      id: '5',
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'PHP',
    },
    {
      id: '6',
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://github.com/betortiz/betortiz',
      language: 'Python',
    },
  ];

  let stats = repositories
    .map((repository) => repository.language)
    .reduce(
      (data, language) => ({
        ...data,
        [language]: (data[language] || 0) + 1,
      }),
      []
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((language) => ({
      name: language,
      count: stats[language],
      color: langColors[language.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <>
      <Container>
        <Sidebar>
          <Profile user={user} />
          <Filter
            languages={stats}
            currentLanguage={currentLanguage}
            onClick={onFilterClick}
          />
        </Sidebar>
        <Main>
          <Repositories
            repositories={repositories}
            currentLanguage={currentLanguage}
          />
        </Main>
      </Container>
    </>
  );
}
