import React from 'react';
import { ScrollView, StyleSheet, WebView, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import YouTube from 'react-native-youtube';
import { Card, ListItem, Button} from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class VideosScreen extends React.Component {
  static navigationOptions = {
    title: 'Youtube Videos',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
        <Card borderRadius={5}>

        <Text style={{alignSelf:'center', fontSize: 16,  paddingTop: 1, color: '#000000', }}>Youtube</Text>
        
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

class ScreencastsScreen extends React.Component {
  static navigationOptions = {
    title: 'Kickstart Screencasts',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
        <Card borderRadius={5}>

        <Text style={{alignSelf:'center', fontSize: 16,  paddingTop: 1, color: '#000000', }}>Screencasts</Text>
        
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

export default createMaterialTopTabNavigator({
  Videos:{screen:VideosScreen,
    navigationOptions:{
      title: 'Videos',
      tabBarLabel:'Youtube Videos',
      tabBarIcon:({})=>(
        <Icon name='logo-youtube' size={24}/>
      )
    }
  },
  Screencasts:{screen:ScreencastsScreen,
    navigationOptions:{
      title: 'Screencasts',
      tabBarLabel:'Kickstart Screencasts',
      tabBarIcon:({})=>(
        <Icon name='ios-albums' size={24}/>
      )
    }
  }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    style: {
      //backgroundColor: 'blue',
    },
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5299',
  },
});
