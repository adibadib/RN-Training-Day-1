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
  TouchableOpacity,
  Alert,
} from 'react-native';

type RepoDetail = {
  name: string,
  description: string,
};

type Props = {};
type State = {
  repositories: Array<RepoDetail>,
  isLoading: boolean,
  usernameText: string,
};

async function fetchRepositories(username: string) {
  let response = await fetch(`https://api.github.com/users/${username}/repos`);
  let data = await response.json();
  return data.map(repo => {
    return {
      name: repo.name,
      description: repo.description,
    };
  });
}

type ListItemProps = {repo: RepoDetail};

class RepoListItem extends Component<ListItemProps> {
  componentDidMount() {
    console.log(`Mounted: <RepoListItem repo={${this.props.repo.name}} />`);
  }
  componentWillUnmount() {
    console.log('Unmount:', this.props.repo.name);
  }
  render() {
    let repo = this.props.repo;
    let onPress = () => {
      Alert.alert(repo.name, repo.description, [{text: 'Close'}]);
    };
    return (
      <TouchableOpacity onPress={onPress}>
        <View>
          <Text>{repo.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
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
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="Enter a username"
            style={styles.textInput}
            value={this.state.usernameText}
            onChangeText={text => {
              this.setState({
                usernameText: text.replace(/\W/g, ''),
              });
            }}
          />
          <Button
            title="Clear"
            style={{flex: 0}}
            onPress={() => this.setState({usernameText: ''})}
          />
        </View>
        <Text>Repositories for {this.state.usernameText}:</Text>
        {repositories.length === 0 ? <Text>Nothing to display</Text> : null}
        <ScrollView style={{flex: 1}}>
          {repositories.map((repo, i) => <RepoListItem key={i} repo={repo} />)}
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
    flex: 1,
  },
});

export default RepoScene;
