import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from './Filter';
import Profile from './Profile';
import Repositories from './Repositories';
import { Loading, Container, Sidebar, Main } from './styles';
import { getUser, getRepos, getLangsFrom } from '../../services/api';

export default function RepositoriesPage() {
  const { login } = useParams();

  const [currentLanguage, setCurrentLanguage] = useState();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, RepositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setRepositories(RepositoriesResponse.data);
      setUser(userResponse.data);
      setLoading(false);
    };

    loadData();
  }, []);

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return (
      <Loading>
        <p>Loading...</p>
      </Loading>
    );
  }

  return (
    <>
      <Container>
        <Sidebar>
          <Profile user={user} />
          <Filter
            languages={languages}
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
