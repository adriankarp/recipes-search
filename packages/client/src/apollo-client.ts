import { config } from './constants/config';

import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client';

const client = new ApolloClient<NormalizedCacheObject>({
  uri: config.apolloURI,
  cache: new InMemoryCache()
});

export default client;
