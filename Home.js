import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

class Home extends React.Component {
  handleSignOut = () => {
    Auth.signOut()
      .then(() => this.props.navigation.navigate('Authentication'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>We have { this.props.friends.current.length } friends!</Text>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
        <Button
          title="Sign Out"
          onPress={this.handleSignOut}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Home);
