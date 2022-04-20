import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function About() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
          <Text style={styles.mainTitle}>KONEKONE</Text>
          <Image 
            source={require('../assets/brand_logo.png')}
            style={{ width: 200, height: 205 }}
          />
          <Icon name="twitter" size={50}/>
          <Icon name="facebook" size={50}/>
          <Icon name="dribbble" size={50}/>
          <Icon name="github" size={50}/>
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
  
  });
