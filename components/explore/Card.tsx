import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export interface CardProps {
    type: string,
    id: number,
    title: string,
    description: string,
    imageUrl: string
}

const Card = ({ type, title, description, imageUrl }: CardProps) => {
    return (
        <>
            {type === "article" ?
                <View style={styles.container}>
                    <Image source={{ uri: imageUrl }} style={{ height: 100, width: '100%', borderRadius: 8 }} />
                    <Text style={{ flexWrap: 'wrap', paddingTop: 8 }}>{title}: {description}</Text>
                </View>
                :
                <View style={styles.videoContainer}>
                    <YoutubePlayer height={120} width={220} videoId={imageUrl} />
                    <View style={{ minHeight: 8 }} />
                    <ScrollView>
                        <Text style={{ flexWrap: 'wrap', fontWeight: '600' }}>{title}:</Text>
                        <Text style={{ flexWrap: 'wrap', height: 18, width: 220 }} >{description}</Text>
                    </ScrollView>
                </View>
            }
        </>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
        width: 156
    },
    videoContainer: {
        padding: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
    }
})