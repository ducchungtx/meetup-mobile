import React, { Component } from 'react';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { cachedFonts } from './helpers';
import Root from './src/Root';

EStyleSheet.build(Colors);

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = cachedFonts([
      {
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
      },
      {
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Light.ttf'),
      },
      {
        montserratMed: require('./assets/fonts/Montserrat-Medium.ttf'),
      },
    ]);
    await Promise.all(fontAssets);
    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return <Root />;
  }
}
