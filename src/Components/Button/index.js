import React from 'react';
import * as S from './style';
import { useProvider } from '../../providers/provider';

const Button = ({ id, children, remove, details, edit, close, handle }) => {
  const {
    showDetails,
    setShowDetails,
    setEmployeeID,
    showDelete,
    setShowDelete,
    showEdit,
    setShowEdit,
  } = useProvider();

  return (
    <>
      <S.ButtonContent>
        <S.ButtonContentElement
          type="button"
          onClick={
            remove
              ? close
                ? () => {
                    setShowDelete(!showDelete);
                    handle ? handle() : null;
                  }
                : () => {
                    setEmployeeID(id);
                    setShowDelete(!showDelete);
                  }
              : details
              ? close
                ? () => {
                    setShowDetails(!showDetails);
                  }
                : () => {
                    setEmployeeID(id);
                    setShowDetails(!showDetails);
                  }
              : edit
              ? close
                ? () => {
                    handle ? handle() : setShowEdit(!showEdit);
                  }
                : () => {
                    setEmployeeID(id);
                    setShowEdit(!showEdit);
                  }
              : null
          }
        >
          {children}
        </S.ButtonContentElement>
      </S.ButtonContent>
    </>
  );
};

export default Button;
