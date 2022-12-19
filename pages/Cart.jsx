import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation} from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';


const Cart = () => {

    const route= useRoute()
    const navigation = useNavigation();

    return (

        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn_back}  onPress={() => navigation.goBack()}>
                    <Octicons name="chevron-left" size={32} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
 
    )
}

const styles = StyleSheet.create({
    btn_back:{
      alignSelf: 'flex-start',
      width: 200,
      flexDirection: 'row',
      marginLeft: '3%',
    },
    back:{
      color: 'black',
      paddingTop: '5%',
      width:'100%',
      fontSize: 20,
      paddingLeft:'5%',
      fontWeight: 'bold',
    },

    container: {
        marginTop: '10%',
        height: '100%',
        width: '100%',
        color:'black',
        backgroundColor: '#24A384'
    },

    topCard: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    cardIMage: {
        height: 200,
        width: 200,
        aspectRatio: 1/1,
        borderTopLeftRadius:10,
        borderBottomLeftRadius: 10,
        borderRadius: 12,
        marginBottom: '5%',
      },

      bottomCard: {
        marginTop: '5%',
        display: 'flex',
        backgroundColor: '#24A384',
        paddingVertical: 50,
        flex: 1,
      },

      bottomCardContent:{
        marginTop: '20%',
        marginHorizontal: '5%',
        display: 'flex',
      },

      topCardContent: {
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '5%',
        display: 'flex',
        marginHorizontal: '5%',
      },

      cardTitle: {
        fontWeight: 'bold',
        marginBottom: 1,
        fontSize: 22,
      },

      cardDesc: {
        maxWidth: '100%',
        width: '100%',
        fontSize: 15,
      },

      cardDescName: {
        maxWidth: '100%',
        width: '100%',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
      },

      cardDescPrice: {
        maxWidth: '100%',
        width: '100%',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      
      btnWrap:{
        backgroundColor: '#24A384',
          padding: 10,
          display:'flex',
          flexDirection:'row',
          justifyContent: 'space-between',
          width:'85%',
          alignSelf:'center',
        paddingBottom:'10%',
      },

      btnRed:{
          backgroundColor:'#24A384',
          padding: 15,
          width: 120,
          borderRadius:10,
      },

      btn:{
        backgroundColor:'green',
        padding:15,
        width:120,
        borderRadius:10,
    },

      btnText:{
          color:'white',
          fontSize: 18,
          textAlign:'center',
      },

  });
  

export default Cart