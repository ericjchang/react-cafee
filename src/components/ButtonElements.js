import styled from 'styled-components';
import { Link } from 'react-scroll'


export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#a0583c' : '#212123')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border:none;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#a0583c')};
    color: ${({ dark }) => (dark ? '#212123' : '#fff')};
  }
`