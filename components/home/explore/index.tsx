import Navigator from '@/assets/svg/Navigator.svg'
import InfoIcon from '@/assets/svg/info.svg'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const Explore = () => {
    return (
        <>
            <CustomButton Icon={Navigator} text={"Explore Thomson Hospital"} handlePress={() => {
                router.navigate('/exploreThomson')
            }} />
            <View style={{ minHeight: 12 }} />
            <CustomButton Icon={InfoIcon} text={"About Thomson Kota Damansara"} handlePress={() => { }} />
        </>
    )
}

export default Explore

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