import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../Data/Color'
import { Feather,Foundation } from '@expo/vector-icons';

const DetailsScreen = ({navigation, route}) => {
  const medicine = route.params;
  return (
    <SafeAreaView style={{flex: 1,paddingHorizontal: 10,marginTop:30, backgroundColor: Color.white,}}>
     <View style={styles.header}>
     <Feather name="arrow-left" size={28}onPress={() => navigation.goBack()} color="black"/>
     <Foundation name="shopping-cart" size={28} color="black" />
      </View>
      <View style={styles.imageContainer}>
        <Image source={medicine.image} style={styles.card1}/>
      </View>
      <View style={styles.detailsContainer}>
      <View
          style={{
            marginLeft: 20,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Best choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{medicine.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: Color.white,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Tk {medicine.price}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {medicine.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: 'bold',
                }}>
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>

            <View style={styles.buyBtn}>
              <Text
                style={{color: Color.white, fontSize: 18, fontWeight: 'bold'}}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1: {
    height: 350,
    borderRadius: 10,
    padding: 20,
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: Color.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: Color.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: Color.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
})