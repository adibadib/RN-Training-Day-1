// @flow
import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  ActivityIndicator,
  TextInput,
  StyleSheet,
} from 'react-native';

type Props = {};
type State = {
  repositories: Array<string>,
  isLoading: boolean,
  usernameText: string,
};

async function fetchRepositories(username: string) {
  let response = await fetch(`https://api.github.com/users/${username}/repos`);
  let data = await response.json();
  return data.map(repo => repo.name);
}

class RepoScene extends Component<Props, State> {
  constructor() {
    super(...arguments);
    this.state = {
      repositories: [],
      isLoading: false,
      usernameText: '',
    };
  }

  async fetchNow() {
    this.setState({isLoading: true});
    let repositories = await fetchRepositories(this.state.usernameText);
    this.setState({repositories: repositories, isLoading: false});
  }

  render() {
    let {repositories, isLoading} = this.state;
    if (isLoading) {
      return (
        <View style={{padding: 20}}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <View style={{backgroundColor: '#eee', padding: 20, flex: 1}}>
        <TextInput
          placeholder="Enter a username"
          style={styles.textInput}
          value={this.state.usernameText}
          onChangeText={text => {
            this.setState({
              usernameText: text,
            });
          }}
        />
        <Text>Repositories for {this.state.usernameText}:</Text>
        {repositories.length === 0 ? <Text>Nothing to display</Text> : null}
        <ScrollView style={{flex: 1}}>
          {repositories.map((repoName, i) => <Text key={i}>{repoName}</Text>)}
        </ScrollView>
        <Button title="Fetch Data" onPress={() => this.fetchNow()} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 3,
    borderRadius: 2,
  },
});

export default RepoScene;
