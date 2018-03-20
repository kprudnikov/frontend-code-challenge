import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function Label(props) {
  const {
    labelValue,
  } = props;

  return (
    <div className='rentalLabel'>{ labelValue }</div>
  );
}

Label.propTypes = {
  labelValue: PropTypes.string.isRequired,
};
