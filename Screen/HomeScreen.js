import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../Data/Color'
import MedicineCard from '../Data/Data'
const width = Dimensions.get('window').width / 2 - 40;
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const categories = ['POPULAR', 'ORGANIC', 'SERGARIC', 'SYNTHETIC'];

    const CategoryList = () => {
        return (
            <View style={styles.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}>
                        <Text
                            style={[
                                styles.categoryText,
                                catergoryIndex === index && styles.categoryTextSelected,
                            ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }

    const Card = ({ medicine }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', medicine)}>
                <View style={{
                    borderTopLeftRadius: 30,
                    borderBottomRightRadius: 30
                }}>

                </View>
                <View style={styles.card}>
                    <View
                        style={{
                            height: 100,
                            alignItems: 'center',
                        }}>
                        <Image
                            source={medicine.image}
                            style={styles.card1}
                        />
                    </View>

                </View>
                <View style={styles.buyBtn}>
                    <Text
                        style={{ color: Color.white, fontSize: 14, fontWeight: 'bold' }}>
                        {medicine.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10, backgroundColor: Color.white }}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome to</Text>
                    <Text style={{ fontSize: 30, color: Color.green, fontWeight: 'bold' }}>
                        David Medicine
                    </Text>
                </View>
                <Entypo name="shopping-cart" size={28} color="black" />
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <View style={styles.searchContainer}>
                    <FontAwesome name="search" size={25} b style={{ marginLeft: 20 }} color="black" />
                    <TextInput placeholder="Search" style={styles.input} />
                </View>
                <View style={styles.sortBtn}>
                    <MaterialIcons name="sort" size={30} color="white" />
                </View>
            </View>
            <CategoryList />
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 30,
                    padding: 10,
                }}
                numColumns={2}
                data={MedicineCard}
                renderItem={({ item }) => {
                    return <Card medicine={item} />;
                }}
            />
        </SafeAreaView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'space-between',
        padding: 10
    },
    categoryText: { fontSize: 13, color: 'grey', fontWeight: 'bold' },
    categoryTextSelected: {
        color: Color.green,
        paddingBottom: 5,
        borderBottomWidth: 5,
        borderColor: Color.green,
    },
    card: {
        height: 250,
        width,
        marginHorizontal: 1,
        borderRadius: 10,
        marginBottom: 15,
        padding: 25,

    },
    card1: {
        height: 200,
        width,
        borderRadius: 10,
        padding: 20,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    searchContainer: {
        height: 50,
        backgroundColor: Color.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: Color.dark,
    },
    buyBtn: {
        width: 100,
        height: 35,
        backgroundColor: Color.dark,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

})