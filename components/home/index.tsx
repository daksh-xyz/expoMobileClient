import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Promotions from '../promotions'
import Appointments from './appointments'
import Explore from './explore'
import Greeting from './Greeting'
import Header from './header'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderRadius: 8 }} >
                <Header />
                <View style={styles.smallDivider} />
                <Greeting />
                <View style={styles.smallDivider} />
                <Appointments />
                <View style={styles.bigDivider} />
                <Explore />
                <View style={styles.bigDivider} />
                <Promotions />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    smallDivider: {
        minHeight: 12
    },
    bigDivider: {
        minHeight: 24
    }
})