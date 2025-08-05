import { Colors } from '@/constants/Colors'
import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface CustomButtonProps {
    Icon: React.FC<
        SvgProps & {
            fill?: string;
            fillSecondary?: string;
            fillTertiary?: string;
        }
    >,
    text: string,
    handlePress: () => void
}

const CustomButton = ({ Icon, text, handlePress }: CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() =>
                handlePress()
            }
        >
            <View style={styles.container}>
                <Icon />
                <Text>{text}</Text>
                <Entypo name='chevron-with-circle-right' size={28} color={Colors.light.icon} />
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})