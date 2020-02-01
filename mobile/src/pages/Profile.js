import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


export default function Profile({ navigation }) {
  const githubUsername = navigation.getParam('github_username');

  return (
    <WebView 
      source={{uri: `https://github.com/${githubUsername}`}}
      style={styles.webView}
    />
  );
}

const styles = StyleSheet.create({
  webView:{
    flex: 1,
  }
});
