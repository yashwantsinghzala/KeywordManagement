import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import CategoryList from './Components/CategoryList'
import AddCategory from './Components/AddCategory';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h2>Welcome to Keyword Management</h2>
            <CategoryList />
            <AddCategory/>
          </header>
        </div>
      </ApolloProvider>

    );
  }
}

export default App;
