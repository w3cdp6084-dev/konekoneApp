import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.mainTitle}>KONEKONE</Text>
        <Image 
          source={require('./assets/brand_logo.png')}
          style={{ width: 200, height: 205 }}
        />
        <Text style={styles.profileTitle}>Bio.</Text>
        <Text style={styles.ptofileList}>1985 Born in Osaka. Japan.</Text>
        <Text style={styles.ptofileList}>2010 Designer/Developer. début.</Text>
        <Text style={styles.ptofileList}>1985 Works as a freelance.</Text>
        <Text style={styles.profileTitle}>Works.</Text>
        <Text style={styles.ptofileList}>I was designing and developing at a service company and a production company.</Text>
        <View style={styles.icon}>
          <Icon name="home" size={50}/>
        </View>
        <View>
          <Icon name="user" size={50}/>
        </View>
        <StatusBar style="auto" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: "Proxima Nova",
    color: '#515151'
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  profileTitle:{
    fontSize: 20,
    fontWeight: "bold"
  },
  ptofileList:{
    fontSize: 16,
    fontWeight: "normal"
  },
  icon: {
    borderRadius: 12,
    padding: 11,
  }

});
