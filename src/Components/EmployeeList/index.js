/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import * as S from './style';
import { useProvider } from '../../providers/provider';
import Api from '../../services/api';
import EmployeeCard from '../EmployeeCard/index';
import ModalDetails from '../ModalDetails/index';

const EmployeeList = () => {
  const { employees, setEmployees, showDetails } = useProvider();

  const loadEmployees = async () => {
    const response = await Api.get();
    const { data } = response;
    setEmployees(data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <>
      <S.SectionEmployeeList>
        <div className="container">
          <div className="row">
            {employees.length === 0 ? (
              <S.ListEmpety>
                <span>There is not any Employees ☹, can you add?</span>
              </S.ListEmpety>
            ) : (
              employees.map((item) => (
                <div className="col-12 col-sm-6" key={item._id}>
                  <EmployeeCard
                    id={item._id}
                    cpf={item.cpf}
                    email={item.email}
                    birthDay={item.birthDay}
                    gender={item.gender}
                    name={item.name}
                    startDate={item.startDate}
                    team={item.team}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </S.SectionEmployeeList>
      {showDetails ? <ModalDetails /> : null}
    </>
  );
};

export default EmployeeList;
