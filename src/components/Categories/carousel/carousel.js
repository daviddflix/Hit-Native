import { SafeAreaView, Dimensions, View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image'

const pics = [
    {
        image: 'https://media.ambito.com/p/eeeb0aa8490c86a5ed10e052acb243d0/adjuntos/239/imagenes/039/444/0039444907/pastasjpg.jpg',
        title: "VAMOOOOS ARGENTINA"
    },
    {
        image: 'https://cdn.colombia.com/sdi/2019/03/05/recetas-con-pasta-716227.jpg',
        title: "Carbonara"
    },
    {
        image: 'https://cdn.colombia.com/sdi/2019/03/05/recetas-con-pasta-716227.jpg',
        title: "Carbonara"
    }
]
 
export const Slider = ({promo}) => {
    return(
        <Carousel
        data={pics}
        renderItem={({item, index}) => {
          return(
             <View>
                    <Image style={style.image} source={{
                        uri: item.image
                    }}/>
                    <Text style={style.promoText}>Hasta 50% OFF</Text>
             </View>
          )
        }}
        sliderWidth={350}
        itemWidth={300}
      />
    )
}


const style= StyleSheet.create({
    image:{
        backgroundColor: 'yellow',
        width: 300,
        height: 130,
        borderRadius: 10,
        marginTop: 20
    },
    text: {
        backgroundColor: 'yellow',
    },
    promoText:{
        position: 'absolute',
        left: 0,
        top: 40,
        backgroundColor: '#fff',
        width: 130,
        paddingLeft: 5,
       borderBottomRightRadius: 50,
       borderTopRightRadius: 50,
        color: '#714df9'
    }
})