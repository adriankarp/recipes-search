import config from './config/index';
import app from './app';
import apolloServer from './graphql';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import { json } from 'body-parser';

const start = async () => {
  try {
    await app.listen(config.PORT);
    await apolloServer.start();
    await app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(apolloServer)
    );
    console.log(`🚀  GraphQL server running at port: ${config.PORT}`);
  } catch {
    console.log('Unable to start GraphQL server');
  }
};

start();
