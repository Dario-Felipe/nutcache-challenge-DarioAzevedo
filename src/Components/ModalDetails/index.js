import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useProvider } from '../../providers/provider';
import Button from '../Button';
import Api from '../../services/api';

const ModalDetails = () => {
  const { showDetails, employeeID } = useProvider();
  const [employeeDetails, setEmployeeDetails] = useState({});

  const loadEmployee = async (id) => {
    const response = await Api.get(`/${id}`);
    const { data } = response;
    setEmployeeDetails(data);
  };

  useEffect(() => {
    loadEmployee(employeeID);
  }, [showDetails]);

  const {
    cpf,
    email,
    birthDay,
    gender,
    name,
    startDate,
    team,
  } = employeeDetails;
  return (
    <>
      <S.SectionModalDetails show={showDetails}>
        <S.ModalDetailsContent>
          <h3>Details</h3>
          <S.DetailsContentInfo>
            <span>
              <b>E-mail: </b>
              {email}
            </span>
            <span>
              <b>Name: </b>
              {name}
            </span>
            <span>
              <b>CPF: </b>
              {cpf}
            </span>
            <span>
              <b>Birth Day: </b>
              {birthDay}
            </span>
            <span>
              <b>Gender: </b>
              {gender}
            </span>
            <span>
              <b>Start Date: </b>
              {startDate}
            </span>
            <span>
              <b>Team: </b>
              {team}
            </span>
          </S.DetailsContentInfo>
          <S.DetailsContentFooter>
            <Button close>Close</Button>
          </S.DetailsContentFooter>
        </S.ModalDetailsContent>
      </S.SectionModalDetails>
    </>
  );
};

export default ModalDetails;
