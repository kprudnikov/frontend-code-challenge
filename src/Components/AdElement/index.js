import React from 'react';

import adShape from './propTypesShapes';
import Label from '../Label';
import './styles.scss';

const AdElementPropTypes = {
  adData: adShape.isRequired,
};

export default function AdElement(props) {
  const getPrice = (purpose, price) => (purpose ? price.sellPrice : price.baseRent || 0);

  const getPurposeName = purpose => (purpose ? 'Kaufen' : 'Mieten');

  const getImageUrl = (assets) => {
    const titlePicture = [].slice.call(assets).find(el => el.titlePicture);
    if (titlePicture) return titlePicture.advertisementThumbnails.inventory_m.url;

    if (assets[0]) {
      return assets[0].advertisementThumbnails.inventory_m.url;
    }

    return assets.advertisementThumbnails && assets.advertisementThumbnails.inventory_m.url;
  };

  const getAddress = (address, userWishes) => {
    if (userWishes.visibleAddress && address.fullAddress) {
      return address.fullAddress;
    }

    return `${address.postalCode} ${address.city}`;
  };

  const {
    title,
    purpose,
    advertisementPrice,
    advertisementAssets,
    realestateSummary,
    userWishes,
  } = props.adData;

  const {
    address,
    space,
    numberOfRooms,
  } = realestateSummary;

  const price = getPrice(purpose, advertisementPrice);

  return (
    <div className='adElement'>
      <div className='headWrapper'>
        <div
          className='head'
          style={ { backgroundImage: `url(${getImageUrl(advertisementAssets)})` } }
        >
          <Label labelValue={ getPurposeName(purpose) } />
        </div>
      </div>
      <div className='description'>
        <div className='descriptionTop'>
          <span className='title'>{ title }</span>
          <address>{ getAddress(address, userWishes) }</address>
        </div>
        <div className='descriptionBottom'>
          { price && <strong className='price'>{ price }&euro;</strong> }
          <span>
            <span className='rooms'>{ numberOfRooms } Zimmer</span>
            <span className='space'>{ Math.round(space) } m<sup>2</sup></span>
          </span>
        </div>
      </div>
    </div>
  );
}

AdElement.propTypes = AdElementPropTypes;
