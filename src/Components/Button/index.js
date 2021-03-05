import React from 'react';
import * as S from './style';
import { useProvider } from '../../providers/provider';

const Button = ({ id, children, close }) => {
  const { showDetails, setShowDetails, setEmployeeID } = useProvider();

  return (
    <>
      <S.ButtonContent>
        <S.ButtonContentElement
          type="button"
          onClick={
            close
              ? () => {
                  setShowDetails(!showDetails);
                }
              : () => {
                  setEmployeeID(id);
                  setShowDetails(!showDetails);
                }
          }
        >
          {children}
        </S.ButtonContentElement>
      </S.ButtonContent>
    </>
  );
};

export default Button;
