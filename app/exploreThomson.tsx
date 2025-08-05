import Bus from '@/assets/svg/bus.svg'
import Navigator from '@/assets/svg/Navigator.svg'
import CarPark from '@/assets/svg/parking.svg'
import ShoppingList from '@/assets/svg/shopping-list.svg'
import Store from '@/assets/svg/store.svg'
import CustomButton2 from '@/components/CustomButton2'
import NavHeader from '@/components/NavHeader'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'

const exploreThomson = () => {
    return (
        <View style={[styles.container, Dimensions.get("screen").width > 468 ? { width: '30%', maxWidth: 500, alignSelf: 'center' } : { width: '100%' }]}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#ECCBEB', '#F6F4F0']}
                locations={[0.5, 1]}
                style={styles.container}
            >
                <NavHeader text={"Explore Thomson Hospital"} flexType='column' />
                <ScrollView style={{ padding: 12 }}>
                    <CustomButton2 Icon={Navigator} text={"Wayfinder: Browse The Map"} handlePress={() => { router.navigate('/wayfinder') }} />
                    <View style={{ minHeight: 12 }} />
                    <CustomButton2 Icon={CarPark} text={"Parking Assistance"} handlePress={() => { }} />
                    <View style={{ minHeight: 12 }} />
                    <CustomButton2 Icon={Bus} text={"Getting To Thomson"} handlePress={() => { }} />
                    <View style={{ minHeight: 12 }} />
                    <CustomButton2 Icon={Store} text={"Refreshments & Retail"} handlePress={() => { }} />
                    <View style={{ minHeight: 12 }} />
                    <CustomButton2 Icon={ShoppingList} text={"Surveys & Poll"} handlePress={() => { }} />
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

export default exploreThomson

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})