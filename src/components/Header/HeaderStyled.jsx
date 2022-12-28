import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderElem = styled.header`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  background-color: transparent;
  border-bottom: 1px solid #a3a5a7;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;
  color: #1976d2;
  @media (max-width: 567px) {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;
  @media (max-width: 568px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 20px;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: 16px;
  /* color: white; */
  color: #1976d2;
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
