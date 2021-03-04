import { createGlobalStyle } from 'styled-components';
import { colors } from '../tokens';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.gradiant} center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

export default GlobalStyle;
