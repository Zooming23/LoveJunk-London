import React from 'react';
import PropTypes from 'prop-types';
import { Callout, Marker } from 'react-native-maps';
import { Image, Text, View } from 'react-native';
import { format } from 'date-fns';
import { convertStatusToHumanReadable } from '../utils/collectionJobUtils';

const styles = {
  container: {
    width: 200,
  },
  titleText: {
    fontSize: 20,
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
  subText: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  subTitleText: {
    paddingTop: 10,
    fontSize: 17,
  },
};

const CustomMapCallout = ({ collectionJob }) => (
  <Callout testID="custom-map-callout">
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        testID="custom-map-view-image"
        source={{ uri: collectionJob.imageUrl }}
      />
      <Text style={styles.titleText}>{collectionJob.title}</Text>
      <Text style={styles.subText}>{collectionJob.reference}</Text>
      <Text style={styles.subTitleText}>
        Status: {convertStatusToHumanReadable(collectionJob.status)}
      </Text>
      <Text style={styles.subText}>
        Created:
        {format(new Date(collectionJob.createdAt), ' dd/MM/yyyy - H:maaa')}
      </Text>
      <Text style={styles.subTitleText}>
        Price: £{collectionJob.price.amount}
      </Text>
      <Text style={styles.subText}>
        Best Counter Offer: £{collectionJob.bestCounterOffer?.amount || 0}
      </Text>
    </View>
  </Callout>
);

CustomMapCallout.propTypes = {
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
};

export { CustomMapCallout };
