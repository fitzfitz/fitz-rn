import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetailScreen() {
  return (
    <View style={styles.main}>
      <Text>Product Detail Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default DetailScreen;
