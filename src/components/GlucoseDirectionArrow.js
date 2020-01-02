import React from 'react';
import { Feather } from '@expo/vector-icons';

const GlucoseDirectionArrow = () => (
  <Feather name='arrow-up' size={70} style={styles.arrow} />
);

const styles = StyleSheet.create({
  arrow: {
    textAlign: 'center',
    height: 60,
    color: '#FFFFFF',
  },
});
export default GlucoseDirectionArrow;
