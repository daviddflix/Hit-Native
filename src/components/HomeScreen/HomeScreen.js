import { StyleSheet, Text , KeyboardAvoidingView, TextInput} from "react-native";
import Icono from 'react-native-vector-icons/Ionicons';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import { Image, SafeAreaView } from "react-native";
import image from '../assets/header.webp'
import pastaIcon from '../assets/pastas.jpg'
import soda from '../assets/solda.webp'
import dessert from '../assets/dessert.jpg'
import store from '../assets/store.png'
import deli from '../assets/deli.webp'
import Menu from 'react-native-vector-icons/Ionicons';
import React from "react";
import SearchIcon from 'react-native-vector-icons/AntDesign';
import { Mask } from "../Categories/pastas/pastas";
import { Slider } from "../Categories/carousel/carousel";



export default function HomeScreen() {

    const [text, onChangeText] = React.useState("");

    return (
    <KeyboardAvoidingView  behavior="padding" style={styles.maincontainer}>
        <SafeAreaView style={styles.locationContainer}>
            <Icono name="location-sharp" size={22} color="#cd7a3d" />
            <Text style={styles.text}>Ladislao Martines 40</Text>
            <Arrow name="arrow-drop-down" size={20} color="#900" />
        </SafeAreaView>
        <SafeAreaView  style={styles.containerFinder} >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder='Arma tu HIT'
            placeholderTextColor={'black'}
          />
          <SearchIcon style={styles.searchIcon} name="search1" size={20} color="#900" />
       </SafeAreaView>
        <Image
        style={styles.image}
        source={image}
        />
      <SafeAreaView style={styles.subcontainer}>
        <Mask route={'Pastas'} category={"Pastas"} picture={pastaIcon} />
        <Mask route={'Pastas'} category={"Bebidas"} picture={soda} />
        <Mask route={'Pastas'} category={"Postres"} picture={dessert} />
        <Mask route={'Pastas'} category={"Locales"} picture={store} />
        <Mask route={'Pastas'} category={"Delivery"} picture={deli} />
      </SafeAreaView>
     <SafeAreaView style={styles.especiales}>
       <Text style={styles.textEspeciales}>Especiales</Text>
      <Slider/>
     </SafeAreaView>
    </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    maincontainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: '#fff'
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        marginBottom: 20,
        marginTop: 20
    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    },
    container: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        marginTop: 15
      },
      subcontainer:{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'center'
          },
      image:{
          width: '95%',
          height: 150,
          borderRadius: 5
      },
      category: {
        width: '25%',
        height: 80,
        margin: 15,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: 20,
        },  
        icon: {
          width: 70,
          height: 70,
          color: "#fff"
        },
        menu: {
          marginTop: 100,
          backgroundColor: '#fff',
          elevation: 5,
          padding: 10,
          borderRadius: 100,
          borderWidth: 1,
          borderColor: '#fff',
          
        },
        input: {
            height: 50,
            width: '95%',
            fontWeight: 'bold',
            paddingLeft: 15,
            backgroundColor: '#fff',
            elevation: 5,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: '#222831',
            position: 'static'
          },
          containerFinder: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginBottom: 20
          },
          searchIcon:{
            position: 'absolute',
            right: 25
          },
          especiales: {
            width: 350
          },
          textEspeciales: {
            fontSize: 20,
            paddingLeft: 10,
            color: 'black',
            fontWeight: "bold"
          }
  });