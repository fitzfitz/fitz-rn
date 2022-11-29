import * as React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { HomeScreenProps } from 'src/app/api/types/navigation';

const { height, width } = Dimensions.get('screen');

function HomeScreen({ navigation: { navigate } }: HomeScreenProps) {
  return (
    <>
      <View style={styles.topLayout} />
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>Wear by TheMonograf</Text>
        </View>
        <Button title="Products" onPress={() => navigate('Product')} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topLayout: {
    backgroundColor: '#8a50ff',
    position: 'absolute',
    height: height / 4,
    width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    color: '#FFF',
    top: 0,
  },
  main: {
    marginTop: 52,
    paddingHorizontal: 24,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 6,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
