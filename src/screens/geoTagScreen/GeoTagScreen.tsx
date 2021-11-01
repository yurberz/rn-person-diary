import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  StatusBar,
  TouchableOpacity,
  Text,
  Platform,
  Alert,
} from 'react-native';
import IconButton from '../../components/iconButton/IconButton';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import mapStyle from './mapStyle.json';
import {GeoTagScreenProps} from '../../helpers/ts-helpers/types';
import {SafeAreaView} from 'react-native-safe-area-context';

const GeoTagScreen = ({
  navigation: {goBack, navigate},
  route: {params},
}: GeoTagScreenProps) => {
  const {noteTitle} = params;
  const {width, height} = Dimensions.get('window');
  const [geolocation, setGeolocation] = useState({
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.1,
    },
    marker: {
      title: noteTitle,
      latitude: 0,
      longitude: 0,
    },
  });

  const markerRef = useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const aspectRatio = width / height;
        setGeolocation({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005 * aspectRatio,
          },
          marker: {
            title: noteTitle,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      error => console.log('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <MapView
          showsMyLocationButton={true}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          style={styles.map}
          region={geolocation.region}
          toolbarEnabled={false}
          onPress={e =>
            setGeolocation({
              region: {...geolocation.region},
              marker: {
                title: noteTitle,
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              },
            })
          }>
          {geolocation.marker ? (
            <Marker
              coordinate={geolocation.marker}
              onDragEnd={e =>
                setGeolocation({
                  region: {...geolocation.region},
                  marker: {
                    title: noteTitle,
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  },
                })
              }
              draggable>
              <Callout>
                <Text>{noteTitle}</Text>
              </Callout>
            </Marker>
          ) : null}
        </MapView>
        <View style={styles.icons}>
          <IconButton
            onPress={() => goBack()}
            iconName="close"
            iconColor="white"
            iconSize={40}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigate('AddScreen', {marker: geolocation.marker, uri: ''})
            }>
            <Text style={styles.textStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  icons: {
    marginLeft: 10,
    flex: 1,
    width: 400,
    height: 20,
    ...Platform.select({
      android: {
        marginTop: 10,
      },
      ios: {
        marginTop: 35,
      },
    }),
  },
  buttonContainer: {
    width: 200,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  textStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
  safeView: {
    flex: 1,
  },
});

export default GeoTagScreen;
