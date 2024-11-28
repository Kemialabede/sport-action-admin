import classNames from 'classnames';
import React from 'react';
import styles from './button.module.scss';
import PropTypes from 'prop-types';

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  loader,
  theme,
  size,
  style,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={classNames(
        styles.btn,
        styles[`btn__${theme}`],
        styles[`btn__${theme}__${size}`],
        loading ? styles.loading : styles.btn
      )}
    >
      {loading ? (
        <div className="">
          <p>{loader ? loader : null}</p>{' '}
        </div>
      ) : (
        <>
          <span>
            <p>{children}</p>
          </span>
        </>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  loader: PropTypes.node,
  theme: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
