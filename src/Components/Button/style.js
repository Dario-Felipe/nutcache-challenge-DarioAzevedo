import styled from 'styled-components';
import { colors } from '../../tokens';

export const ButtonContent = styled.div`
  margin: ${(props) => (props.fixed ? '0' : '10px 0 0 10px')};
`;

export const ButtonContentElement = styled.button`
  border-radius: ${(props) => (props.fixed ? '100px' : '40px')};
  border: none;
  padding: ${(props) => (props.fixed ? '10px 10px' : '5px 10px')};
  background: ${colors.white};
  box-shadow: 10px 10px 33px -14px rgba(0, 0, 0, 0.75);
  background: ${colors.textgrandiant};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  transition: all 0.6s;

  &:hover {
    background: ${colors.red};
    -webkit-text-fill-color: ${colors.white};
  }

  img {
    width: 40px;
    height: 40px;
  }
`;
