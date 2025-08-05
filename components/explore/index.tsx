import { blogs } from '@/constants/blogs'
import ItemSeparator from '@/utils/ItemSeparator'
import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card, { CardProps } from './Card'

const renderItem = ({ item }: { item: CardProps }) => {
    return (
        <View>
            <Card {...item} />
        </View>
    )
}

const Explore = () => {
    return (
        <View style={{ paddingLeft: 8 }}>
            <Text style={styles.heading}>Featured Articles</Text>
            <FlatList
                data={blogs[0].featuredArticles}
                horizontal
                ItemSeparatorComponent={ItemSeparator}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
            <View style={{ minHeight: 16 }} />
            <Text style={styles.heading}>What's New</Text>
            <FlatList
                data={blogs[0].whatsNew}
                horizontal
                ItemSeparatorComponent={ItemSeparator}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
            <View style={{ minHeight: 16 }} />
            <Text style={styles.heading}>Recommended Videos</Text>
            <FlatList
                data={blogs[0].recommended}
                horizontal
                ItemSeparatorComponent={ItemSeparator}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    )
}

export default Explore

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8
    }
})