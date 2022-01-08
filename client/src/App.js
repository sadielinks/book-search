import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// import apollo server deets
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// import setContext - included in authLink
import { setContext } from '@apollo/client'

const httpLink = createHttpLink({
  // url/endpoint for all GraphQL requests
  uri: '/graphql',
});

// setContext obtains token and attaches to http headers
const authLink = setContext((_, { headers }) => {
  // use getItem method from local storage
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      // with token now obtained
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});



function App() {
  return (
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
  );
}

export default App;
