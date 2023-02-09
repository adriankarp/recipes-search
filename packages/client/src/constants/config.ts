const prod = {
  apolloURI: '/graphql/'
};

const dev = {
  apolloURI: 'http://localhost:3210/graphql'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
