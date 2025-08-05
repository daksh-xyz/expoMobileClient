import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface NavHeaderProps {
    size?: number,
    color?: string,
    text: string,
    flexType?: "column" | "row"
}

const NavHeader = ({ size = 24, color = "black", text, flexType = "row" }: NavHeaderProps) => {
    const alignProperty = flexType === "row" ? 'center' : 'flex-start'
    return (
        <View
            style={{
                flexDirection: flexType,
                alignItems: alignProperty,
                gap: 8,
                paddingHorizontal: 12,
                paddingTop: 12
            }}
        >
            <TouchableOpacity
                onPress={() => router.replace('..')}
            >
                <AntDesign name="arrowleft" size={size} color={color} />
            </TouchableOpacity>
            <Text style={[{ fontWeight: '800', fontSize: 20 }, flexType === "column" ? { paddingTop: 12 } : '']} selectable={false}>{text}</Text>
        </View>
    )
}

export default NavHeader