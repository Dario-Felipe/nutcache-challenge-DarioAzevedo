import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const SectionEmployeeList = styled.section`
  background: ${colors.white};
  border-radius: 50px;
  margin: 50px 15px;
  padding: 20px 0 10px;

  ${media.lg} {
    margin: 50px 150px;
    padding: 40px 0;
  }
`;

export const ListEmpety = styled.div`
  padding: 10px;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: ${fontSizes.xlarge}px;
    color: #ccc;
    text-align: center;
    margin-bottom: 20px;
  }

  ${media.lg} {
    height: auto;
    padding: 0;
  }
`;
