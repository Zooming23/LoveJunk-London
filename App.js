import React, { useState, useEffect } from 'react';
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { getLondonJobsApi } from './src/api/collectionJobApi';
import { CustomMapView } from './src/components/CustomMapView';

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const payload = getLondonJobsApi();
    setData(payload.body.entities);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.containerStyle}
        forceInset={{ bottom: 'never' }}
      >
        <CustomMapView data={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
