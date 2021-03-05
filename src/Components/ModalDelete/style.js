import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const SectionModalDelete = styled.div`
  background: rgba(0, 0, 0, 30%);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteContent = styled.div`
  background: ${colors.white};
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;

  h3 {
    width: 100%;
    text-align: center;
    font-size: ${fontSizes.xlarge}px;
    margin: 0;
    background: ${colors.textgrandiant};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${media.sm} {
    width: auto;
  }
`;

export const DeleteContentButtons = styled.div`
  margin-top: 15px;
  background: ${colors.white};
  display: flex;
  align-items: flex-end;
`;
