/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MaskedInput from 'react-text-mask';
import * as S from './style';
import { useProvider } from '../../providers/provider';
import Api from '../../services/api';
import Button from '../Button';

const ModalEdit = () => {
  const { employeeID } = useProvider();
  const [employeeInfo, setEmployeeInfo] = useState({});

  const loadEmployee = async (id) => {
    const response = await Api.get(`/${id}`);
    const {
      name,
      gender,
      email,
      birthDay,
      startDate,
      team,
      cpf,
    } = response.data;
    setEmployeeInfo({ name, gender, email, birthDay, startDate, team, cpf });
  };

  const putEmployee = async (id) => {
    try {
      const response = await Api.put(`/${id}`, employeeInfo);

      if (response.status === 200) {
        alert('The employeer was updated');
        document.location.reload();
      }
    } catch (error) {
      alert('Something was wrong, please try again');
    }
  };

  const validFields = ({ name, email, cpf, startDate }) => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      cpf.length === 0 ||
      startDate.length === 0
    ) {
      alert('Fill the required fields, please');
    } else {
      putEmployee(employeeID);
    }
  };

  useEffect(() => {
    loadEmployee(employeeID);
  }, []);

  return (
    <>
      <S.SectionModalEdit>
        <S.ModalEditContent>
          <h3>Edit Employee</h3>
          <S.EditContentInfo>
            <S.EditContentInfoGrid>
              <label>Name: </label>
              <input
                type="text"
                placeholder="Your name.:"
                defaultValue={employeeInfo.name}
                onChange={(e) => {
                  employeeInfo.name = e.target.value;
                }}
                required="required"
              />
            </S.EditContentInfoGrid>
            <S.EditContentInfoGrid>
              <label>E-mail: </label>
              <input
                type="text"
                placeholder="Your E-mail.:"
                defaultValue={employeeInfo.email}
                onChange={(e) => {
                  employeeInfo.email = e.target.value;
                }}
                required
              />
            </S.EditContentInfoGrid>
            <S.EditContentInfoGrid>
              <label>CPF: </label>
              <MaskedInput
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                ]}
                placeholder="Your CPF.:"
                defaultValue={employeeInfo.cpf}
                onChange={(e) => {
                  employeeInfo.cpf = e.target.value;
                }}
                required
              />
            </S.EditContentInfoGrid>
            <S.EditContentInfoGrid>
              <label>Birth Date: </label>
              <input
                type="date"
                defaultValue={employeeInfo.birthDay}
                onChange={(e) => {
                  employeeInfo.birthDay = e.target.value;
                }}
                required
              />
            </S.EditContentInfoGrid>
            <S.EditContentInfoGrid>
              <label>Start Date: </label>
              <MaskedInput
                mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                placeholder="Your Start Date.:"
                defaultValue={employeeInfo.startDate}
                onChange={(e) => {
                  employeeInfo.startDate = e.target.value;
                }}
              />
            </S.EditContentInfoGrid>
            <S.EditContentInfoGrid>
              <label>Gender: </label>
              <select
                onChange={(e) => {
                  employeeInfo.gender = e.target.value;
                }}
              >
                <option value={employeeInfo.gender} selected disabled hidden>
                  {employeeInfo.gender}
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </S.EditContentInfoGrid>
            <S.EditContentInfoGrid>
              <label>Team: </label>
              <select
                onChange={(e) => {
                  employeeInfo.team = e.target.value;
                }}
              >
                <option value={employeeInfo.team} selected disabled hidden>
                  {employeeInfo.team}
                </option>
                <option value="--">--</option>
                <option value="Mobile">Mobile</option>
                <option value="FemFrontendale">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
            </S.EditContentInfoGrid>
          </S.EditContentInfo>
          <S.EditContentFooter>
            <Button edit close>
              Close
            </Button>
            <Button edit close handle={() => validFields(employeeInfo)}>
              Save
            </Button>
          </S.EditContentFooter>
        </S.ModalEditContent>
      </S.SectionModalEdit>
    </>
  );
};

export default ModalEdit;
