import NavHeader from '@/components/NavHeader';
import Wayfinder from '@/components/wayfinder';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const WayfinderScreen = () => {
    return (
        <View style={[styles.container, Dimensions.get("screen").width > 468 ? { width: '30%', maxWidth: 500, alignSelf: 'center' } : { width: '100%' }]}>
            <NavHeader text={"Thomson Wayfinder"} />
            <Wayfinder />
        </View>
    );
}

export default WayfinderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6'
    }
});
