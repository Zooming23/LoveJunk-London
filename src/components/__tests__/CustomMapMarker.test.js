import React from 'react';
import { render } from '@testing-library/react-native';
import { CustomMapCallout } from '../CustomMapCallout';

const mockData = {
  reference: 'A-2HYPIWLR',
  latitude: 51.441,
  offeredAt: '2021-08-21T11:47:01.103Z',
  url: 'https://elmer.anyjunk.co.uk/v1/elmer/customer-listings/11218?view=Expanded',
  price: { currency: 'GBP', amount: 25.0 },
  isJunkRecycled: false,
  longitude: -0.165,
  isReusable: true,
  id: 11218,
  meta: {
    selfUrl:
      'https://elmer.anyjunk.co.uk/v1/elmer/customer-listings/11218?view=Default',
  },
  startAt: '2021-08-21 15:00:00',
  isUlez: false,
  status: 'active',
  createdAt: '2021-08-21T11:26:19.438Z',
  isTrade: false,
  title: 'garden stuff',
  imageUrl:
    'https://lovejunk.imgix.net/elmer/images/20210821112619_qLd4mNgxKUdHLfngDv7G.jpg',
  postcodeDistrict: 'SW17',
  distance: { value: 4.9, unit: 'mile' },
  isJunkReused: false,
  endAt: '2021-08-21 17:00:00',
};

describe('CustomMapMarker', () => {
  describe('render', () => {
    it('renders the customMapCallout correctly', () => {
      const { getAllByTestId } = render(
        <CustomMapCallout collectionJob={mockData} />,
      );
      expect(getAllByTestId('custom-map-callout')).toHaveLength(1);
    });
  });
});
