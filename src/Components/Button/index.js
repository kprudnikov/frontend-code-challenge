import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function Button(props) {
  const {
    labelValue,
    onClick,
  } = props;

  return (
    <button className='button' type='button' onClick={ onClick }>{ labelValue }</button>
  );
}

Button.propTypes = {
  labelValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
