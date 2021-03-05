import React from 'react';
import * as S from './style';
import Button from '../Button';

const EmployeeCard = ({ id, email, name, startDate, team }) => (
  <>
    <S.EmployeeCardContent>
      <S.CardContentInfo>
        <span>
          <b>Name: </b>
          {name}
        </span>
        <span>
          <b>Email: </b>
          {email}
        </span>
      </S.CardContentInfo>
      <S.CardContentInfo>
        <span>
          <b>Start Date: </b>
          {startDate}
        </span>
        <span>
          <b>Team: </b>
          {team}
        </span>
      </S.CardContentInfo>
      <Button id={id}>Show more</Button>
    </S.EmployeeCardContent>
  </>
);

export default EmployeeCard;
