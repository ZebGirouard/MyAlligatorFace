import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

Amplify.configure(aws_exports);

export default class App extends React.Component {
  render() {
    const store = createStore(friendReducer);
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    );
  }
}
