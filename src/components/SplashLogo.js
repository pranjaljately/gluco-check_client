import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SplashLogo = () => <Text style={styles.logo}>Gluco-check</Text>;

const styles = StyleSheet.create({
  logo: { fontSize: 60, fontWeight: 'bold', color: '#FFFFFF' },
});

export default SplashLogo;
