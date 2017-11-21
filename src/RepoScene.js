// @flow
import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

const USERNAME = 'gaearon';

type Props = {};
type State = {
  repositories: Array<string>,
};

class RepoScene extends Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      repositories: [],
    };
  }

  async fetchNow() {
    let response = await fetch(
      `https://api.github.com/users/${USERNAME}/repos`,
    );
    let data = await response.json();
    this.setState({
      repositories: data.map(repo => repo.name),
    });
  }

  render() {
    let repositories = this.state.repositories;
    return (
      <View style={{backgroundColor: '#eee', padding: 20, flex: 1}}>
        <Text>Repositories for {USERNAME}</Text>
        {repositories.length === 0 ? <Text>Nothing to display</Text> : null}
        <ScrollView style={{flex: 1}}>
          {repositories.map((repoName, i) => <Text key={i}>{repoName}</Text>)}
        </ScrollView>
        <Button title="Fetch Data" onPress={() => this.fetchNow()} />
      </View>
    );
  }
}

export default RepoScene;
