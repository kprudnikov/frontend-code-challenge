import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectShowLoader,
  selectErrorMessage,
} from './selectors';

import { setErrorMessage } from './actions';

import LoadingIndicator from '../../Components/LoadingIndicator';
import ErrorMessage from '../../Components/ErrorMessage';
import './styles.scss';

export class AppComponent extends Component {
  constructor() {
    super();

    this.handleEscapePress = this.handleEscapePress.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keyup', this.handleEscapePress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleEscapePress);
  }

  handleEscapePress(e) {
    const { handleHideError, errorMessage } = this.props;

    if (e.keyCode === 27 && errorMessage) {
      handleHideError();
    }
  }

  render() {
    const {
      showLoader,
      errorMessage,
      children,
    } = this.props;

    return (
      <Fragment>
        { showLoader && <LoadingIndicator /> }
        { errorMessage && <ErrorMessage message={ errorMessage } /> }
        <main className='mainContainer'>
          { children }
        </main>
      </Fragment>
    );
  }
}

AppComponent.propTypes = {
  children: PropTypes.node,
  showLoader: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  handleHideError: PropTypes.func.isRequired,
};

AppComponent.defaultProps = {
  children: PropTypes.element,
};

const mapStateToProps = createStructuredSelector({
  showLoader: selectShowLoader(),
  errorMessage: selectErrorMessage(),
});

const mapDispatchToProps = dispatch => ({
  handleHideError: () => {
    dispatch(setErrorMessage(''));
  },
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
