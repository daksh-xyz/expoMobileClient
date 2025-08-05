import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';

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
                <View style={{ flex: 1 }}>
                    <Text style={{ fontWeight: '400', fontSize: 14 }}>{text}</Text>
                </View>
                <View style={{ flex: 0.1, marginRight: 12 }}>
                    <Icon />
                </View>
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
        alignItems: 'center',
        flex: 1
    }
})