//OnBackPressed Reference => https://www.developers-zone.com/react-native-webview-for-convert-website-to-app/

import React, {Component} from 'react';
import {View, StyleSheet, Platform, BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';

export default class MyWebView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canGoBack: false,
      ref: null,
    };
  }

  onAndroidBackPress = () => {
    if (this.state.canGoBack && this.state.ref) {
      this.state.ref.goBack();
      return true;
    }
    return false;
  };

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onAndroidBackPress,
      );
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  render() {
    return (
      <WebView
        ref={webView => {
          this.state.ref = webView;
        }}
        onNavigationStateChange={navState => {
          this.state.canGoBack = navState.canGoBack;
        }}
        automaticallyAdjustContentInsets={false}
        source={{uri: 'https://reactnative.dev/'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        style={{marginTop: 0}}
      />
    );
  }
}
