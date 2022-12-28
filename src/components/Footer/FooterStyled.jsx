import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

export const FooterElem = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: 'transparent';
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #a3a5a7;
`;

export const Svg = styled(BsGithub)`
  margin-left: 16px;
  color: #1976d2;
  width: 32px;
  height: 32px;
  transform: scale(1);
  transition: all 250ms;
  :hover,
  :focus {
    opacity: 0.8;
    transform: scale(0.92);
  }
`;
