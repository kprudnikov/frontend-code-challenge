import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export default function ErrorMessage(props) {
  const {
    message,
  } = props;

  return (
    <div className='errorMessage' role='alert'>
      { message }
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
