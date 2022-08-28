import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, Image, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {
  const appTextMargin = Platform.select({
    ios: {
      marginTop: 30
    },
    android: {
      marginTop: 30
    },
    web: {
      marginTop: 10
    }
  });
  return (
    <View style={styles.container}>
      <Text style={appTextMargin}>Water intake Tracker</Text>
      <TouchableOpacity>
        <Text style={styles.plusButton}>+</Text>
      </TouchableOpacity>
      <Image source={require('./assets/glass-of-water.jpg')} style={styles.mainAppImage} />
      <TouchableOpacity>
        <Text style={{marginTop: 400}}>-</Text>
      </TouchableOpacity>
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mainAppImage: {
    width: '50%',
    height: '50%',
    marginTop: 100,
    position: 'absolute',
    resizeMode: 'cover'
  },
  plusButton: { marginTop: 40 }
});
