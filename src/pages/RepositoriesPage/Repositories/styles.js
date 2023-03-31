import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 10px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: auto;
  }
`;
