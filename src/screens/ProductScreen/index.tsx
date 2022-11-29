import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { ProductScreenProps } from 'src/app/api/types/navigation';

function ProductScreen({ navigation: { navigate } }: ProductScreenProps) {
  return (
    <View style={styles.main}>
      <Text>Product Screen</Text>
      <Button title="Go Home" onPress={() => navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default ProductScreen;
