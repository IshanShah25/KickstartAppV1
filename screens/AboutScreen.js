import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5299',
  },
});
