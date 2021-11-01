import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {MapStackProps} from '../../../helpers/ts-helpers/types';
import {useAppSelector} from '../../../hooks/reduxHooks';
import {IMarkerProps} from '../../../helpers/ts-helpers/interfaces';
import mapStyle from '../../geoTagScreen/mapStyle.json';
import {SIZES} from '../../../constants/theme';

const DefaultMapScreen = ({navigation: {navigate}}: MapStackProps) => {
  const {entries} = useAppSelector(state => state.personalDiary);
  const markersArr: IMarkerProps[] = [];
  const aspectRatio = SIZES.width / SIZES.height;

  useEffect(() => {
    entries.map(entry => markersArr.push(entry.marker));
    Geolocation.getCurrentPosition(position => {
      setGeolocation({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05 * aspectRatio,
        },
        marker: markersArr,
      });
      console.log(markersArr);
    });
  }, [entries]);

  const [geolocation, setGeolocation] = useState({
    region: {
      latitude: 37.4220228,
      longitude: -122.0841718,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05 * aspectRatio,
    },
    marker: markersArr,
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        showsMyLocationButton={true}
        toolbarEnabled={false}
        style={styles.map}
        region={geolocation.region}
        onPoiClick={e => console.log(e.nativeEvent.name)}
        showsBuildings={true}
        loadingEnabled
        loadingIndicatorColor="#eeeeee"
        loadingBackgroundColor="#666666">
        {geolocation.marker.map((geoTag, i) => {
          const {title, latitude, longitude} = geoTag;
          return (
            <Marker
              key={i}
              coordinate={{
                latitude,
                longitude,
              }}>
              <Callout>
                <Text>{title}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: SIZES.width,
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
