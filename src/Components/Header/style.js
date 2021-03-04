import styled from 'styled-components';
import { colors, fontSizes, fontFamilies, media } from '../../tokens';

export const SectionHeader = styled.header`
  background: ${colors.white};
  padding: 10px 0;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: ${fontFamilies.primary};
    font-size: ${fontSizes.xxlarge}px;
    background: ${colors.textgrandiant};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
    margin: 0;
  }

  ${media.lg} {
    h1 {
      font-size: ${fontSizes.xxxlarge}px;
    }
  }
`;
