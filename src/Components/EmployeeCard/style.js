import styled from 'styled-components';
import { fontSizes } from '../../tokens';

export const EmployeeCardContent = styled.div`
  margin: 0 30px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background: #ccc;
    margin: 20px 0;
  }
`;

export const CardContentInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: ${fontSizes.medium}px;
  }
`;

export const CardContentButtons = styled.div`
  display: flex;
`;
