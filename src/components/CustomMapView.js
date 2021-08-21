import _ from 'lodash';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MapView from 'react-native-maps';
import { CustomMapMarker } from './CustomMapMarker';

const CustomMapView = ({ data }) => {
  const mapRef = useRef(null);

  const onMapReady = () => {
    mapRef.current.fitToElements(true);
  };

  const setMapRef = (ref) => {
    mapRef.current = ref;
  };

  return (
    <MapView style={{ flex: 1 }} ref={setMapRef} onMapReady={onMapReady}>
      {_.map(data, (collectionJob, index) => (
        <CustomMapMarker
          key={index}
          index={index}
          collectionJob={collectionJob}
        />
      ))}
    </MapView>
  );
};

CustomMapView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { CustomMapView };
