import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ( props) => {

  const navigation = useNavigation();

  return (
    
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.navigate('Detail', {
        image: props.image,
        nama: props.nama,
        kategori: props.kategori,
        harga: props.harga,
        desc: props.desc,
      });
    }}>

      <View style={styles.leftCard}>
        <Image source={{ uri: props.image }} style={styles.cardIMage}/>
      </View>
      
      <View style={styles.rightCard}>
        <View style={styles.cardContent}>
          <Text  style={styles.cardDescName}>{props.nama}</Text>
          <Text  style={styles.cardDesc}>${props.harga}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 2,
      borderRadius: 13,
      backgroundColor: '#D9D9D9',
      borderColor: 'green',
      marginVertical: 10,
      paddingVertical: 10,
      width: '100%',
      maxWidth: '100%',
    },

    leftCard: {
      width: '35%',
      justifyContent: 'center',
      alignItems: 'center',
    },

    cardIMage: {
      height: 70,
      width: 70,
      borderTopLeftRadius:10,
      borderBottomLeftRadius: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      resizeMode: 'contain',
    },

    rightCard: {
      justifyContent: 'center',
      display: 'flex',
      width: '65%',
    },

    cardContent: {
      marginBottom: 10,
      flexDirection: 'column',
      justifyContent: 'space-between',
      display: 'flex',
    },

    cardTitle: {
      fontWeight: 'bold',
      marginBottom: 1,
      fontSize: 18,
      color: 'green',
    },

    cardDesc: {
      maxWidth: '70%',
      width: '70%',
      fontSize: 14,
    },
    cardDescName: {
      maxWidth: '70%',
      width: '70%',
      fontSize: 14.5,
      fontWeight: 'bold',
    },
  });

export default Card