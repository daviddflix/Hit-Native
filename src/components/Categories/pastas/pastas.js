import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import pastaIcon from '../../assets/pastai.webp'
import Bebidas from '../../assets/solda.webp'
import postre from '../../assets/dessert.jpg'
import { useNavigation } from "@react-navigation/native";

export default function PastasScreen({navigation}) {
    return (
      <View style={{backgroundColor: '#fff'}}>
       <SafeAreaView style={styles.safeArea}>
            <Mask route={'Home'} category={'Bebidas'} picture={Bebidas}/>
            <Mask route={'Home'} category={'Postres'} picture={postre}/>
            <Mask route={'Home'} category={'Especiales'} picture={pastaIcon}/>
       </SafeAreaView>
       
      </View>
    );
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
      margin: 5
    }, 
    image: {
      width: 100,
      height: 100,
      borderRadius: 10,
      elevation: 10
    },
    text: {
        paddingTop: 15
    }
  });