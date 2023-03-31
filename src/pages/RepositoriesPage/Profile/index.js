import React from 'react';
import PropTypes from 'prop-types';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} />
        {user.following}&nbsp;<i>seguidores</i>&nbsp; &middot; &nbsp;{' '}
        {user.followers}
        <i>&nbsp;seguindo</i>
      </Data>
      <Data>
        <MdWork size={20} />
        {user.company}
      </Data>
      <Data>
        <MdLocationCity size={20} />
        {user.location}
      </Data>
      <Data>
        <MdLink size={20} />
        <a
          href="http://www.psgtecnologia.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          {user.company}
        </a>
      </Data>
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    blog: null,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
