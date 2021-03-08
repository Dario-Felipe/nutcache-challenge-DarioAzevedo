import React from 'react';
import Button from '../Button';
import * as S from './style';
import addEmployee from '../../image/AddFigure/addEmployee.svg';

const FixedCreate = () => (
  <>
    <S.SectionFixedCreate>
      <Button create fixed>
        <img src={addEmployee} alt="AddEmployeFigure" />
      </Button>
    </S.SectionFixedCreate>
  </>
);

export default FixedCreate;
