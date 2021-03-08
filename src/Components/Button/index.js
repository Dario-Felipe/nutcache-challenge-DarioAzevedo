import React from 'react';
import * as S from './style';
import { useProvider } from '../../providers/provider';

const Button = ({
  id,
  children,
  fixed,
  remove,
  details,
  edit,
  create,
  close,
  handle,
}) => {
  const {
    showDetails,
    setShowDetails,
    setEmployeeID,
    showDelete,
    setShowDelete,
    showEdit,
    setShowEdit,
    showCreate,
    setShowCreate,
  } = useProvider();

  return (
    <>
      <S.ButtonContent fixed={fixed}>
        <S.ButtonContentElement
          type="button"
          fixed={fixed}
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
              : create
              ? close
                ? () => {
                    handle ? handle() : setShowCreate(!showCreate);
                  }
                : () => {
                    setShowCreate(!showCreate);
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
