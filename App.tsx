import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello PersonDiary RN-App</Text>
      <Ionicons name="code-slash" size={30} color="#000000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default App;
