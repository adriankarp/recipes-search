import config from './config/index';
import app from './app';
import apolloServer from './graphql';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import pkg from 'body-parser';
import RecipesAPI from './graphql/datasource';

const { json } = pkg;

const start = async () => {
  try {
    await app.listen(config.PORT);
    await apolloServer.start();
    await app.use(
      '/graphql',
      cors({
        origin: '*'
      }),
      json(),
      expressMiddleware(apolloServer, {
        context: async () => {
          return {
            dataSources: { recipesAPI: new RecipesAPI() }
          };
        }
      })
    );
    console.log(
      `🚀  GraphQL server running at: localhost:${config.PORT}/graphql`
    );
  } catch {
    console.log('Unable to start GraphQL server');
  }
};

start();
