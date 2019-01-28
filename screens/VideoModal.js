import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import YouTube from 'react-native-youtube';

// this screen displays the video

export default class VideoModal extends React.Component {
    static navigationOptions = {
        headerTitle: 'YouTube'
    }

    render() {
        const { params } = this.props.navigation.state;
        const youtubeID = params.youtubeID;

        return (
          <View style={styles.container}>
            <YouTube
                videoId={youtubeID} 
                play={true}             
                fullscreen={true}       
                loop={false}            
                apiKey={'AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw'}
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            />
            <Text>{JSON.stringify(youtubeID)}</Text>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})
