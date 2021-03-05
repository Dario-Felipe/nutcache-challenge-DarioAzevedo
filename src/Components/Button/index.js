import React from 'react';
import * as S from './style';
import { useProvider } from '../../providers/provider';

const Button = ({ id, children, remove, details, close, handle }) => {
  const {
    showDetails,
    setShowDetails,
    setEmployeeID,
    showDelete,
    setShowDelete,
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
