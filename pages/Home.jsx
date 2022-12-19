import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import pictHome from '../assets/home.png';
import pictMenCloth from '../assets/menClothes.png';
import pictWomenCloth from '../assets/womenClothes.png';
import pictElectronic from '../assets/elektronik.jpg';
import pictJewelry from '../assets/jewelry.png';
import { AntDesign } from '@expo/vector-icons';

const Home = () => {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
      <Image style={styles.picture} source={pictHome} />
      <TouchableOpacity style={styles.topNav} onPress={() => {
        navigation.navigate('Cart');
      }}>
        <AntDesign name="shoppingcart" size={32} color="black" />
      </TouchableOpacity>
      

      <View style={styles.tag_container}>
        <Text style={styles.subTitle}>Kategori</Text>
        {/* <View style={styles.tag_lihatSemua}>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </View> */}
      </View>

      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.btn} onPress={() => {
            navigation.navigate('Produk', {
              nama: "Men's Clothing",
              kategori: "men's clothing",
            });
          }}>
          <Image style={styles.button_pict} source={pictMenCloth} />
          <Text style={styles.category}>Men Cloth</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => {
            navigation.navigate('Produk', {
              nama: "Women's Clothing",
              kategori: "women's clothing",
            });
          }}>
          <Image style={styles.button_pict} source={pictWomenCloth} />
          <Text style={styles.category}>Women Cloth</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.btn} onPress={() => {
              navigation.navigate('Produk', {
                nama: 'Electronics',
                kategori: "electronics",
              });
            }}>
            <Image style={styles.button_pict} source={pictElectronic} />
            <Text style={styles.category}>Electronics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {
              navigation.navigate('Produk', {
                nama: 'Jewelery',
                kategori: "jewelery",
              });
            }}>
            <Image style={styles.button_pict} source={pictJewelry} />
            <Text style={styles.category}>Jewelery</Text>
          </TouchableOpacity>
      </View>
  
      <StatusBar style="auto" />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  picture:{
    position: 'absolute',
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
    // left: 0,
    top: 0,
  },

  container:{
    display:'flex',
    paddingTop:'25%',
    backgroundColor: '#24A384',
    height:'100%',
  },

  topNav: {
    marginTop: '10%',
    position: 'absolute',
    right: '5%',
  },

  homeTitle:{
    width:'90%',
    alignSelf:'center',
    fontSize:40,
    textAlign:'center',
    marginBottom:'30%',
    color:'white',
  },

  subTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color:'white',
  },

  tag_lihatSemua: {
    // marginTop: '40%',
    backgroundColor: 'white',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },

  lihatSemua:{
    width:'80%',
    fontSize: 14,
    color:'#24A384',
    alignSelf: 'center',
  },

  tag_container: {
    marginTop: '40%',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: '5%',
    height: 50,
    alignItems: 'center',
    marginBottom: '5%',
  },

  btnWrap:{
    // marginTop: 50,
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '5%',
    marginBottom: '3%',
  },

  btn:{
    padding:5,
    paddingVertical:50,
    borderWidth:5,
    marginHorizontal:5,
    marginVertical:5,
    width: 150,
    height: 150,
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:5,
    borderColor:'white',
    backgroundColor: '#8EDDCA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  button_pict: {
    borderRadius: 10,
    height: 70,
    width: 70,
    resizeMode: 'contain'
  },

  category: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
  

export default Home