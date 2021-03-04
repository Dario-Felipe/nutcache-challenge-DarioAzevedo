import React from 'react';
import * as S from './style';

const Header = () => (
  <>
    <S.SectionHeader>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <S.HeaderContent>
              <h1>Nutcache Employee</h1>
            </S.HeaderContent>
          </div>
        </div>
      </div>
    </S.SectionHeader>
  </>
);

export default Header;
