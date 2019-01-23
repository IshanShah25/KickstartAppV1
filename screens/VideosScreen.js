import React from 'react';
import { ScrollView, StyleSheet, WebView, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import YouTube from 'react-native-youtube';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


export default class VideosScreen extends React.Component {
  static navigationOptions = {
    title: 'Videos and Screencasts',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
        <Card borderRadius={5}>

        <Text style={{alignSelf:'center', fontSize: 16,  paddingTop: 1, color: '#000000', }}>Kickstart Conrad Challenge Round Two Video</Text>
        
        <WebView
          style={{ marginTop: 20, width: 320, height: 230, alignSelf: 'center', }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/x-tQ-pmKZ9w" }}
        />
        </Card>
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
