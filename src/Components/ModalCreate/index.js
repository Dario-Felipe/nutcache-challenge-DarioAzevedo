import React from 'react';
import MaskedInput from 'react-text-mask';
import * as S from './style';
import Button from '../Button';
import Api from '../../services/api';

const ModalCreate = () => {
  const employeeInfo = {
    name: '',
    gender: '',
    email: '',
    birthDay: '',
    startDate: '',
    team: '',
    cpf: '',
  };

  const createEmployee = async () => {
    try {
      const response = await Api.post('', employeeInfo);

      if (response.status === 201) {
        alert('The employeer was created');
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
      createEmployee();
    }
  };

  return (
    <>
      <S.SectionModalCreate>
        <S.ModalCreateContent>
          <h3>Create Employee</h3>
          <S.CreateContentInfo>
            <S.CreateContentInfoGrid>
              <label>Name: </label>
              <input
                type="text"
                placeholder="Exemple.: Dário Felipe"
                onChange={(e) => {
                  employeeInfo.name = e.target.value;
                }}
                required="required"
              />
            </S.CreateContentInfoGrid>
            <S.CreateContentInfoGrid>
              <label>E-mail: </label>
              <input
                type="text"
                placeholder="exemple@exemple.com"
                onChange={(e) => {
                  employeeInfo.email = e.target.value;
                }}
                required
              />
            </S.CreateContentInfoGrid>
            <S.CreateContentInfoGrid>
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
                placeholder="Exemple.: 123.456.789-99"
                onChange={(e) => {
                  employeeInfo.cpf = e.target.value;
                }}
                required
              />
            </S.CreateContentInfoGrid>
            <S.CreateContentInfoGrid>
              <label>Birth Date: </label>
              <input
                type="date"
                min="1966-12-12"
                max="2003-12-12"
                onChange={(e) => {
                  employeeInfo.birthDay = e.target.value;
                }}
                required
              />
            </S.CreateContentInfoGrid>
            <S.CreateContentInfoGrid>
              <label>Start Date: </label>
              <MaskedInput
                mask={[/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                placeholder="Exemple.: 03/2021"
                onChange={(e) => {
                  employeeInfo.startDate = e.target.value;
                }}
              />
            </S.CreateContentInfoGrid>
            <S.CreateContentInfoGrid>
              <label>Gender: </label>
              <select
                onChange={(e) => {
                  employeeInfo.gender = e.target.value;
                }}
              >
                <option selected disabled hidden>
                  --
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </S.CreateContentInfoGrid>
            <S.CreateContentInfoGrid>
              <label>Team: </label>
              <select
                onChange={(e) => {
                  employeeInfo.team = e.target.value;
                }}
              >
                <option value="--">--</option>
                <option value="Mobile">Mobile</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
              </select>
            </S.CreateContentInfoGrid>
          </S.CreateContentInfo>
          <S.CreateContentFooter>
            <Button create close>
              Close
            </Button>
            <Button create close handle={() => validFields(employeeInfo)}>
              Save
            </Button>
          </S.CreateContentFooter>
        </S.ModalCreateContent>
      </S.SectionModalCreate>
    </>
  );
};

export default ModalCreate;
