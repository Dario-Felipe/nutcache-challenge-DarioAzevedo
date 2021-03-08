import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const SectionModalCreate = styled.div`
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

export const ModalCreateContent = styled.div`
  background: ${colors.white};
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80%;

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
    width: 60%;
  }

  ${media.lg} {
    width: 30%;
  }
`;

export const CreateContentInfo = styled.form`
  width: 100%;
`;

export const CreateContentInfoGrid = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 5px;
  }

  input,
  select {
    outline: none;
    border-radius: 20px;
    border: none;
    background: #f0eded;
    padding: 10px;
  }
`;

export const CreateContentFooter = styled.div`
  margin-top: 15px;
  background: ${colors.white};
  display: flex;
  align-items: flex-end;
`;
