import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
// import { fetchMeetups } from './constants/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      meetups: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch('http://localhost:3000/api/meetups')
      .then(res => res.json())
      .then(resData => {
        this.setState({ loading: false, meetups: resData.meetups })
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    console.log(this.state.meetups);
    return (
      <View style={styles.container}>
        <Text>Meetup</Text>
        {this.state.meetups.map((meetup, i) => (
          <Text key={i}>{meetup.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});