import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-size: 16px;
  text-decoration: none;
  color: white;
  transition: opacity 250ms ease-in-out;
  :hover,
  :focus {
    opacity: 0.8;
  }
`;
