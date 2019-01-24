import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, LinearGradient  } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
         <LinearGradient colors={['rgba(0,0,0,1)', 'transparent']}
               style={{ position: 'absolute',left: 0,right: 0,top: 0,height: 300, }}/> 
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      
          <View style={styles.welcomeContainer}>
            
            <Image
              source={
                __DEV__
                  ? require('../assets/images/kickstartLogo.png')
                  : require('../assets/images/kickstartLogo.png')
              }
              style={styles.welcomeImage}
            />
          </View>
          <Card
            borderRadius={5}
            title='Congressional App Challenge 2019 Winners, FL District 27'
            image={require('../assets/images/team.png')} resizeMode={'contain'} >
            <Text style={{marginBottom: 10}}>
            The Kickstart Team recently won the Congressional App Challenge for their district, with is a nationwide competition in which teams from various congressional districts create and submit apps to be reviewed by judges and technology professionals. They will be presenting their platform to Congress in Washington DC in April of 2019. 
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
          <Card
            borderRadius={5}
            title='HELLO WORLD'
            image={require('../assets/images/team.png')} resizeMode={'contain'} >
            <Text style={{marginBottom: 10}}>
              Ishan the amazing programmer is very coooooooooooooooooool.
              But Gaetan is better.
            </Text>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
        
      
          
          

        </ScrollView>
      
        </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B5299',
    
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
