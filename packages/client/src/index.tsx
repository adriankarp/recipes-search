import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import 'normalize.css';

const rootNode = document.getElementById('app');

if (rootNode) {
  createRoot(rootNode).render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  );
}
