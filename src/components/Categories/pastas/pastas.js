import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import pastaIcon from '../../assets/pastai.webp'
import Bebidas from '../../assets/solda.webp'
import postre from '../../assets/dessert.jpg'
import { useNavigation } from "@react-navigation/native";
import tagliatellie from '../../assets/tagliatelli.jpg'
import noqui from '../../assets/noqui.jpg'
import oriental from '../../assets/oriental.jpg'
import conchiglie from '../../assets/conchiglie.jpg'

export default function PastasScreen() {

  

 
 

    return (
      <View  style={{backgroundColor: '#fff'}}>
       <SafeAreaView style={styles.safeArea}>
            <Mask route={'Home'} category={'Bebidas'} picture={Bebidas}/>
            <Mask route={'Home'} category={'Postres'} picture={postre}/>
            <Mask route={'Home'} category={'Especiales'} picture={pastaIcon}/>
       </SafeAreaView>
       <ScrollView contentContainerStyle={styles.scroll}>
        <Pastas image={tagliatellie}/>
        <Pastas image={conchiglie}/>
        <Pastas image={oriental}/>
        <Pastas image={noqui}/>
        <Pastas image={tagliatellie}/>
        <Pastas image={tagliatellie}/>
        <Pastas image={tagliatellie}/>
       </ScrollView>
      </View>
    );
  }


function Pastas({image}){

  const navigation = useNavigation();
  const detailRoute = () => navigation.navigate('Details')

  return(
    <Pressable onPress={detailRoute} style={styles.pastaViewMain}>
      
        <View  style={styles.pastaView}>
           <SafeAreaView style={styles.cardSafeArea}>
            <Text style={styles.cardTitle}>Pasta</Text>
            <Text style={styles.description}>Pasta con hasta dos salsas a eleccion</Text>
            <Text style={styles.cardPrice}>$950,00</Text>
           </SafeAreaView>
        <Image style={styles.pastaImage}  source={image}/>
      </View>
    </Pressable>
  )
}

export function Mask ({route, picture, category}) {

  const navigation = useNavigation();
  
    return(
        <Pressable style={styles.pressable} onPress={() => navigation.navigate(route)} >
            <Image  style={styles.image} source={picture}/>
            <Text  style={styles.text}>{category}</Text>
        </Pressable >
    )
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    safeArea: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 20
    },
    pressable: {
      display: 'flex',
      alignItems : 'center',
      justifyContent: 'center',
      margin: 5,
      elevation: 5
    }, 
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      elevation: 10
    },
    text: {
        paddingTop: 15
    },
    pastaViewMain: {
      display: 'flex',
      alignItems : 'center',
      justifyContent: 'center',
      marginTop: 5
    },
    pastaView: {
      width: 350,
      height: 130,
      borderBottomWidth: 1,
      borderColor: '#f6e4d3',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      
    },
    safeAreaPastas: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    pastaImage: {
      width: '40%',
      height: 100,
      borderRadius: 30
    },
    cardSafeArea: {
      width: '60%'
    },
    cardPrice: {
      fontWeight: 'bold',
      marginTop: 12
    },
    description: {
      width: '100%',
    },
    scroll: {
      paddingBottom: 200
    }
  });