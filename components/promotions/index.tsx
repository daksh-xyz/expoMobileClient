import { offers } from '@/constants/Offers'
import ItemSeparator from '@/utils/ItemSeparator'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card, { CardProps } from './components/Card'

const renderItem = ({ item }: { item: CardProps }) => {
    return (
        <View>
            <Card {...item} />
        </View>
    )
}

const Promotions = () => {
    return (
        <View>
            <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 12 }}>Exclusive Promotions</Text>
            <FlatList
                data={offers}
                bounces={true}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    )
}

export default Promotions

const styles = StyleSheet.create({})