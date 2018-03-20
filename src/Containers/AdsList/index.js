import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadAdsListSend } from '../App/actions';
import { loadNext } from './actions';
import { selectAds } from './selectors';
import AdElement from '../../Components/AdElement';
import Button from '../../Components/Button';
import './styles.scss';

const AdsListPropTypes = {
  handleLoadAdsListSend: PropTypes.func.isRequired,
  handleLoadNext: PropTypes.func.isRequired,
  ads: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export class AdsListComponent extends Component {
  constructor() {
    super();

    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentWillMount() {
    const { handleLoadAdsListSend } = this.props;
    handleLoadAdsListSend();
  }

  handleLoadMore() {
    this.props.handleLoadNext(10);
  }

  render() {
    const { ads } = this.props;

    return (
      <div className='listWrapper'>
        <ul className='adsList'>
          {
            ads.map(ad => <li key={ ad.additionalId } ><AdElement adData={ ad } /></li>)
          }
        </ul>
        <Button labelValue='Load more' onClick={ this.handleLoadMore } />
      </div>
    );
  }
}

AdsListComponent.propTypes = AdsListPropTypes;

const mapDispatchToProps = dispatch => (
  {
    handleLoadAdsListSend: () => {
      dispatch(loadAdsListSend());
    },
    handleLoadNext: (count) => {
      dispatch(loadNext(count));
    },
    dispatch,
  }
);

const mapStateToProps = createStructuredSelector({
  ads: selectAds(),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdsListComponent);
