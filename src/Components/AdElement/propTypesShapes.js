import PropTypes from 'prop-types';

const estateSummaryShape = PropTypes.shape({
  address: PropTypes.object.isRequired,
  numberOfRooms: PropTypes.number.isRequired,
  space: PropTypes.number.isRequired,
});

const advertisementPriceShape = PropTypes.shape({
  baseRent: PropTypes.number,
  sellPrice: PropTypes.number,
});

const adShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  additionalId: PropTypes.number.isRequired,
  realestateSummary: estateSummaryShape.isRequired,
  advertisementPrice: PropTypes.oneOfType([PropTypes.array, advertisementPriceShape]).isRequired,
  purpose: PropTypes.number.isRequired,
});

export default adShape;
