import React from 'react';
import * as S from './style';
import { useProvider } from '../../providers/provider';
import Button from '../Button';
import Api from '../../services/api';

const ModalDelete = () => {
  const { employeeID } = useProvider();

  const deleteEmployee = async (id) => {
    try {
      const response = await Api.delete(`/${id}`);
      if (response.status === 200) {
        alert('The employee has been deleted');
        document.location.reload();
      }
    } catch (error) {
      alert('Something was wrong, please try again');
    }
  };

  return (
    <>
      <S.SectionModalDelete>
        <S.DeleteContent>
          <h3>Are you sure delete this employee?</h3>
          <S.DeleteContentButtons>
            <Button remove close>
              Cancel
            </Button>
            <Button remove close handle={() => deleteEmployee(employeeID)}>
              Confirm
            </Button>
          </S.DeleteContentButtons>
        </S.DeleteContent>
      </S.SectionModalDelete>
    </>
  );
};

export default ModalDelete;
