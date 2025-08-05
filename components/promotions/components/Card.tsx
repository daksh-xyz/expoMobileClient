import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export interface CardProps {
    Offer: any
}

const Card = ({ Offer }: CardProps) => {
    return (
        <View style={styles.container}>
            <Image source={Offer} style={{ height: 120, width: 270, borderRadius: 12 }} />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
    },
})