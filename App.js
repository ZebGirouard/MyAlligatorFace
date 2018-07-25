import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

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
