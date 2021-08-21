import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-native-maps';
import { getJobColor } from '../utils/collectionJobUtils';
import { CustomMapCallout } from './CustomMapCallout';

const CustomMapMarker = ({ collectionJob, index }) => (
  <Marker
    key={index}
    testID="custom-map-marker"
    pinColor={getJobColor(collectionJob)}
    coordinate={{
      latitude: collectionJob.latitude,
      longitude: collectionJob.longitude,
    }}
  >
    <CustomMapCallout collectionJob={collectionJob} />
  </Marker>
);

CustomMapMarker.propTypes = {
  collectionJob: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    reference: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.number,
    }),
    bestCounterOffer: PropTypes.shape({
      amount: PropTypes.number,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export { CustomMapMarker };
