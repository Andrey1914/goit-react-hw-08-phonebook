import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 32px;
  flex-direction: row-reverse;
  margin: 0;
  padding: 20px;
  list-style: none;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 16px;
  color: white;
  text-decoration: none;
  transition: opacity 250ms ease-in-out;
  :hover,
  :focus {
    opacity: 0.8;
  }
`;
