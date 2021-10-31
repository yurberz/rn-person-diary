import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {GeoTagScreenProps} from '../../helpers/ts-helpers/types';
import IconButton from '../../components/iconButton/IconButton';
import {COLORS, SIZES} from '../../constants/theme';
import mapStyle from './mapStyle.json';

const GeoTagScreen = ({
  navigation: {goBack, navigate},
  route: {params},
}: GeoTagScreenProps) => {
  const {noteTitle} = params;
  const [geolocation, setGeolocation] = useState({
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.1,
    },
    marker: {
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      const aspectRatio = SIZES.width / SIZES.height;

      setGeolocation({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005 * aspectRatio,
        },
        marker: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        region={geolocation.region}
        loadingEnabled
        loadingIndicatorColor="#666666"
        loadingBackgroundColor="#eeeeee"
        onPress={e =>
          setGeolocation({
            region: {...geolocation.region},
            marker: {
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            },
          })
        }>
        {geolocation.marker ? (
          <Marker
            coordinate={geolocation.marker}
            title={noteTitle}
            onDragEnd={e =>
              setGeolocation({
                region: {...geolocation.region},
                marker: {
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                },
              })
            }
            draggable
          />
        ) : null}
      </MapView>

      <View style={styles.icons}>
        <IconButton
          onPress={() => goBack()}
          iconName="close"
          iconColor={COLORS.whiteColor}
          iconSize={40}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={'Submit'}
          onPress={() => {
            navigate('AddScreen', {marker: geolocation.marker, uri: ''});
          }}
        />
      </View>
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
    marginBottom: SIZES.padding20,
  },
});

export default GeoTagScreen;
