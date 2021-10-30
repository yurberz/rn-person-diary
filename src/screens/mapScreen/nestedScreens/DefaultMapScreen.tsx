import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {MapStackProps} from '../../../helpers/ts-helpers/types';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {useAppSelector} from '../../../hooks/reduxHooks';
import Geolocation from '@react-native-community/geolocation';
import mapStyle from '../../geoTagScreen/mapStyle.json';
import {IMarkerProps} from '../../../helpers/ts-helpers/interfaces';
// import styles from './styles';

const DefaultMapScreen = ({navigation: {navigate}}: MapStackProps) => {
  const {entries} = useAppSelector(state => state.personalDiary);
  const markersArr: IMarkerProps[] = [];
  console.log(markersArr);

  useEffect(() => {
    entries.map(entry => markersArr.push(entry.marker));
    setGeolocation({
      region: {
        latitude: markersArr[0].latitude,
        longitude: markersArr[0].longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005 * aspectRatio,
      },
      marker: markersArr,
    });
  }, [entries]);

  const {width, height} = Dimensions.get('window');
  const aspectRatio = width / height;
  const [geolocation, setGeolocation] = useState({
    region: {
      latitude: 37.4220228,
      longitude: -122.0841718,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0922 * aspectRatio,
    },
    marker: markersArr,
  });

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(position => {
  //     const aspectRatio = width / height;
  //     setGeolocation({
  //       region: {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: 0.005,
  //         longitudeDelta: 0.005 * aspectRatio,
  //       },
  //       marker: [...markersArr],
  //     });
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        region={geolocation.region}
        onPoiClick={e => console.log(e.nativeEvent.name)}
        showsBuildings={true}
        loadingEnabled
        loadingIndicatorColor="#eeeeee"
        loadingBackgroundColor="#666666">
        {geolocation.marker.map((geoTag, i) => (
          <Marker key={i} coordinate={geoTag}>
            <Callout>
              <Text>adfsdfs</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  icons: {
    flex: 1,
    width: 400,
    height: 20,
  },
  buttonContainer: {
    width: 200,
    borderRadius: 40,
    overflow: 'hidden',
    marginBottom: 20,
  },
});

export default DefaultMapScreen;
