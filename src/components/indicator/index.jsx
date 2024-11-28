import classNames from 'classnames';
import styles from './indicator.module.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Indicator = ({ status, statusIndicator }) => {
  return (
    <div className={classNames(styles.indicator, `${styles[statusIndicator]}`)}>
      <span>{status}</span>
    </div>
  );
};

Indicator.propTypes = {
  status: PropTypes.string,
  statusIndicator: PropTypes.string,
};
export default Indicator;
