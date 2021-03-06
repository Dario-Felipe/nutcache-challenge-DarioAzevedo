import React, { useEffect } from 'react';
import Button from '../Button';
import * as S from './style';
import { useProvider } from '../../providers/provider';
import Api from '../../services/api';
import EmployeeCard from '../EmployeeCard/index';
import ModalDetails from '../ModalDetails/index';
import ModalDelete from '../ModalDelete/index';
import ModalEdit from '../ModalEdit/index';
import ModalCreate from '../ModalCreate/index';

const EmployeeList = () => {
  const {
    employees,
    setEmployees,
    showDetails,
    showDelete,
    showEdit,
    showCreate,
  } = useProvider();

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
                <Button create>Add new employee</Button>
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
      {showDelete ? <ModalDelete /> : null}
      {showEdit ? <ModalEdit /> : null}
      {showCreate ? <ModalCreate /> : null}
    </>
  );
};

export default EmployeeList;
