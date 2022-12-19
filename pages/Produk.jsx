import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useRoute, useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import { Octicons, AntDesign } from '@expo/vector-icons';

const Produk = ( props ) => {

  const [produk, setProduk] = useState([]);
  const route= useRoute()
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

   async function getData() {
      await axios.get(`https://fakestoreapi.com/products/category/${route.params.kategori}`).then(function (response) {
      setProduk(response.data);
    });
  }

  return (

    <SafeAreaView>
      <StatusBar style="auto" />
    
      <View style={styles.container}>

        <View style={styles.topNavigator}>
           <TouchableOpacity style={styles.btn}  onPress={() => navigation.goBack()}>
            <Octicons name="chevron-left" size={32} color="black" />
            <Text style={styles.back}>Kembali</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topNav} onPress={() => {
            navigation.navigate('CartWithData', {
              nama: route.params.nama,
              kategori: route.params.kategori,
            });
          }}>
            <AntDesign name="shoppingcart" size={32} color="black" />
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.categoryTitle}>{route.params.nama}</Text> */}
        <ScrollView style={styles.containerView} showsVerticalScrollIndicator={false}>
        {
          produk.map((produk) => {
            return (
              <Card image={produk.image} key={produk.id} nama={produk.title} kategori={produk.category} harga={produk.price} desc={produk.description}/>
            )
          })
        }
        </ScrollView>

      </View>
      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: '10%',
      alignItems: 'center',
      backgroundColor: '#24A384',
      display: 'flex',
      height: '100%',
      width: '100%',
    },
    
    topNavigator: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      display: 'flex',
      width: '100%',
      paddingHorizontal: '5%',
    },

    btn:{
      alignSelf: 'flex-start',
      width: 200,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    back:{
      color: 'black',
      width:'100%',
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: 10,
    },
  
    categoryTitle: {
      paddingTop: '5%',
      paddingBottom: '5%',
      fontSize: 30,
      width: '100%',
      textAlign: 'center',
    },
  
    containerView:{
      flex: 1,
      paddingVertical: 10,
      paddingHorizontal: '5%',
      marginBottom: '30%',
    },
  });

export default Produk
