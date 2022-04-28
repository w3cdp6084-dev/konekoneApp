import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, InteractionManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
  return (
    <ScrollView>
    <View style={styles.contaIner}>

      <View style={styles.boxContentHead}>
        
        <Text style={styles.mainTitle}>KONEKONE</Text>
        
        <View style={styles.darkModeBtn}>
          <View style={styles.darkModeBtnInner}>
            <Icon style={styles.iconInner} name="sun" size={22}/>
          </View>
        </View>

      </View>

      <View style={styles.boxContentImage}>
        <View style={styles.imageOuter}>
          <View style={styles.imageInner}>
            <Image 
                source={require('../assets/brand_logo.png')}
                style={ styles.logoImage }
            />
          </View>
        </View>
      </View>

      <View style={styles.boxContentLine}>
        <Text style={styles.profileTitle}>Bio.</Text>
        <Text style={styles.ptofileList}>1985 Born in Osaka. Japan.</Text>
        <Text style={styles.ptofileList}>2010 Designer/Developer. début.</Text>
        <Text style={styles.ptofileList}>2020 Works as a freelance.</Text>
      </View>

      <View style={styles.boxContentLine}>
        <Text style={styles.profileTitle}>Works.</Text>
        <Text style={styles.ptofileList}>I was designing and developing at a service company and a production company.</Text>
      </View>
      
      
        <View style={styles.boxContentIcon}>
          <View style={styles.icon}>
            <Icon name="home" size={22}/>
          </View>
          <View>
            <Icon name="user" size={22}/>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({

  contaIner: {
    flexDirection: "column",
    backgroundColor: '#EDF2F7',
  },
  boxContentHead:{
    width:'100%',
    flexDirection:'row', 
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom:24,
  },
  boxContentImage:{
    width:'100%',
    flexDirection:'row', 
    backgroundColor: '#fff000',
  },

  boxContentLine:{
    width:'100%',
    backgroundColor: '#dd0000',
  },
  boxContentIcon:{

  },






  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#4a4a4a',
  },
  iconInner:{
    paddingBottom:12,
    paddingTop:12,
    paddingLeft:12,
    paddingRight:12,
  },
  darkModeBtn:{
    backgroundColor: '#EDF2F7',
    borderRadius: 200,
    shadowOffset: {width: 6, height: 6},
    shadowColor: '#ffffff',
    shadowOpacity: 0.08,
    shadowRadius: 5,
 
  },
  darkModeBtnInner:{
    backgroundColor: '#EDF2F7',
    borderRadius: 200,
    shadowOffset: {width: -12, height: -12},
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 50,
  },




  profileTitle:{
    textAlign: 'left',
    fontSize: 20,
    fontWeight: "bold",
    color: '#4a4a4a',
    marginTop: 40,
  },
  ptofileList:{
    textAlign: 'left',
    fontSize: 16,
    fontWeight: "normal",
    color: '#4a4a4a',
  },
  icon: {
    borderRadius: 12,
  },
  imageOuter: {
    backgroundColor: '#EDF2F7',
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
  },

  iconOuter:{
    flexDirection:'row', 
    // marginTop: 44, 
    // marginBottom: 32, 
  },
});
