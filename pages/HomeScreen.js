import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, InteractionManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="sun" size={50}/>
      </View>
      <Text style={styles.baseText}>
        <Text style={styles.mainTitle}>KONEKONE</Text>
        <View style={styles.imageOuter}>
        <View style={styles.imageInner}>
          <Image 
            source={require('../assets/brand_logo.png')}
            style={ styles.logoImage }
          />
        </View>
        </View>
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
  },
  imageOuter: {
    backgroundColor: '#EDF2F7',
    shadowColor:'#ffffff',
    borderRadius: 200,
    shadowOffset: {width: 6, height: 6},
    shadowColor: '#FFFFFF',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    width:320,
    height:320,
  },
  imageInner: {
    width:300,
    height:300,
    backgroundColor: '#EDF2F7',
    borderRadius: 200,
    shadowOffset: {width: -12, height: -12},
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 50,
  },
  logoImage: {
    width: 200,
    height: 205,
    padding: 0,
  },

});
