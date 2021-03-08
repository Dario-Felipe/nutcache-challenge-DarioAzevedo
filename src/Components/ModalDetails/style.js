import styled from 'styled-components';
import { colors } from '../../tokens';

export const SectionModalDetails = styled.div`
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

export const ModalDetailsContent = styled.div`
  background: ${colors.white};
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h3 {
    width: 100%;
    text-align: center;
    margin: 0;
    background: ${colors.textgrandiant};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const DetailsContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;

  span {
    margin-top: 10px;
  }
`;

export const DetailsContentFooter = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
