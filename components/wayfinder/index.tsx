import React from 'react';
import { Platform, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Wayfinder() {
    if (Platform.OS === 'web') {
        return (
            <View style={{ flex: 1 }}>
                <iframe
                    src={"https://app.mappedin.com/map/6648168c269972f02bf83c4b/directions?floor=m_54072d975ddf1603&location=s_a6b0ca080135d11d"}
                    style={{ width: '100%', height: '100%' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="web content"
                />
            </View>
        );
    }
    return <WebView source={{ uri: "https://app.mappedin.com/map/6648168c269972f02bf83c4b/directions?floor=m_54072d975ddf1603&location=s_a6b0ca080135d11d" }} style={{ width: 300, height: 200 }} />;
}