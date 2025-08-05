import NavHeader from '@/components/NavHeader';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

export default function Profile() {
  return (
    <View style={[styles.container, Dimensions.get("screen").width > 468 ? { width: '30%', maxWidth: 500, alignSelf: 'center' } : { width: '100%' }]}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#ECCBEB', '#F6F4F0']}
        locations={[0.5, 1]}
        style={styles.container}
      >
        <NavHeader text={"Profile"} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});