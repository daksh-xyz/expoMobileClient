import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import BackArrow from './ui/BackArrow'

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
                <BackArrow height={24} width={24} color={color} />
            </TouchableOpacity>
            <Text style={[{ fontWeight: '800', fontSize: 20 }, flexType === "column" ? { paddingTop: 12 } : '']} selectable={false}>{text}</Text>
        </View>
    )
}

export default NavHeader