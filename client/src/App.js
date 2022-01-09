import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// import apollo server deets
import { ApolloProvider } from '@apollo/client';
import { ApolloClient } from 'apollo-boost';

const client = new ApolloClient({
  request: (operation) => {
    // use getItem method from local storage
    const token = localStorage.getItem('id_token');

    // setContext obtains token and attaches to http headers
    operation.setContext({
      headers: {
        // with token now obtained
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  // url/endpoint for all GraphQL requests
  uri: '/graphql',
});

function App() {
  return (
    // added in apollo
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} />
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
