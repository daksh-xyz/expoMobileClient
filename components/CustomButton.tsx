import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import ChevronRightCircleIcon from './ui/ChevronRight';

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
                <ChevronRightCircleIcon height={24} width={24} color={'#9800beff'} />
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