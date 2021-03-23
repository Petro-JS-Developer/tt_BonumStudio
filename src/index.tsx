import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';

import './index.css';

import App from './App';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          feed: {
            ...offsetLimitPagination(),
            read(existing, {
              args: {
                offset = 0,
                limit = existing?.length,
              },
            }: any) {
              return existing && existing.slice(offset, offset + limit);
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </React.StrictMode>,
  document.getElementById('root'),
);
