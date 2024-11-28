import React from 'react';
import './dashboard-layout.scss';
import Logo from '../../assets/icons/Logo 2.svg';

const AuthLayout = ({ caption, headerText, children }) => {
  return (
    <div className="auth-layout">
      <div className="auth-layout__form">
        <div className="auth-layout__form__heading">
          <img src={Logo} alt="logo" />
          <h2>{headerText}</h2>
          <p>{caption}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
