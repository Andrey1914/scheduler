import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

export const Svg = styled(BsGithub)`
  margin-left: 16px;
  color: #fff;
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
