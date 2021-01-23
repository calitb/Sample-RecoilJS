import { StyleSheet, Text } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});

export default function BigText(props: { children: string }) {
  return <Text style={styles.text}>{props.children}</Text>;
}
