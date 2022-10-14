import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  color: #fff;
  @media (max-width: 567px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 32px;
  flex-direction: row-reverse;
  margin: 0;

  list-style: none;
  @media (max-width: 567px) {
    gap: 20px;
  }
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
  @media (max-width: 567px) {
    font-size: 14px;
    font-weight: 400;
  }
`;
