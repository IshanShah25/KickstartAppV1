import React from 'react';
import { ScrollView, StyleSheet, WebView, Text, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import YouTube from 'react-native-youtube';
import YouTubeVideo from './YouTubeVideo';
import { createStackNavigator, StackNavigator } from 'react-navigation';
import { Card, ListItem, Button} from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const apiKey = 'AIzaSyAHSMd0rymTsfIhho8S_gs-MFsy5vBCr9A'
const channelId = 'UCTcYS4VLdovYZVV8FM7dLFw'
const results = 30

class VideosScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerLeft: (
      <TouchableOpacity>
        
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='cast-connected' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='videocam' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='search' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='account-circle' size={25} color={'#555'}/>
        </TouchableOpacity>
      </View>
    )
  }


  constructor(props){
    super(props)
    // this will be filled when components mount
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch(`https://www.googleapis.com/youtube/v3/search/?key=AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw&channelId=UCTcYS4VLdovYZVV8FM7dLFw&part=snippet,id&order=date&maxResults=30`)
    //fetch('https://www.googleapis.com/youtube/v3/search/?key=AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw&channelId=UCQzdMyuz0Lf4zo4uGcEujFw&part=snippet,id&order=date&maxResults=30')
    .then(res => res.json())
    .then(res => {
      const videoId = []
      res.items.forEach(item => {
        videoId.push(item)
      })
      this.setState({
        data: videoId
      }) 
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            {this.state.data.map((item, i) => 
           	<TouchableHighlight 
              key={item.id.videoId} 
              onPress={() => this.props.navigation.navigate('YouTubeVideo', {youtubeId: item.id.videoId})}>
              
              <View style={styles.vids}>
                <Image 
                  source={{uri: item.snippet.thumbnails.medium.url}} 
                  style={{width: 320, height: 180}}/>
                <View style={styles.vidItems}>
                  
                  <Text style={styles.vidText}>{item.snippet.title}</Text>
                  <Icon name='more-vert' size={20} color='#555'/> 
                </View>
              </View>
            </TouchableHighlight>
            )}
          </View>
        </ScrollView>
	    </View>
    )
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

const TopBar = createMaterialTopTabNavigator({
  Videos:{screen:VideosScreen,
    navigationOptions:{
      title: 'Videos',
      tabBarLabel:'Youtube Videos',

    }
  },
  Screencasts:{screen:ScreencastsScreen,
    navigationOptions:{
      title: 'Screencasts',
      tabBarLabel:'Kickstart Screencasts',
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

// top bar navigator (the blue one)
// export default createMaterialTopTabNavigator({
//   Videos:{screen:VideosScreen,
//     navigationOptions:{
//       title: 'Videos',
//       tabBarLabel:'Youtube Videos',

//     }
//   },
//   Screencasts:{screen:ScreencastsScreen,
//     navigationOptions:{
//       title: 'Screencasts',
//       tabBarLabel:'Kickstart Screencasts',
//     }
//   }
// }, {
//   tabBarOptions: {
//     labelStyle: {
//       fontSize: 12,
//     },
//     style: {
//       //backgroundColor: 'blue',
//     },
//   }
// })



// this is the main stack where we export the top bar and the video redirects
const RootStack = createStackNavigator({
  TopBar: {
    screen: Topbar
  },
  YoutubeVideo: {
    screen: YoutubeVideo
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5299',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30
  },
  vids: {
    paddingBottom: 30,
    width: 320,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 0.6,
    borderColor: '#aaa'
  },
  vidItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  },
  vidText: {
    padding: 20,
    color: '#000'
  },
  tabBar: {
    backgroundColor: '#fff',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: '#bbb'
  },
  tabItems: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: '#333',
    paddingTop: 4,
    textDecorationLine: 'underline'
  }
});


