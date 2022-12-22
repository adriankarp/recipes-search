# recipes-search

Wondering what you could cook with all of those ingredients just sitting around in your fridge?

## About

- Get recipes suggestions from searching by ingredients
- Resources for detailed instructions and nutritional values

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Material UI](https://mui.com/)

## Intitial setup

```
pnpm install
```

## Packages

| name              | path                | description                                                       |
| ----------------- | ------------------- | ----------------------------------------------------------------- |
| `@recipes/client` | `./packages/client` | React client for user interaction                                 |
| `@recipes/server` | `./packages/server` | GraphQL wrapper on top of [EDAMAM](https://developer.edamam.com/) |

## Scripts

Scripts are executed from root level

| name                                | description                          |
| ----------------------------------- | ------------------------------------ |
| npx nx **command** **package-name** | run **command** for **package-name** |
| pnpm build                          | build all packages                   |
| pnpm build:affected                 | build only affected packages         |
| pnpm graph                          | graph for all packages               |
| pnpm graph:affected                 | graph only for affected packages     |
| pnpm storybook                      | run storybook                        |
| pnpm storybook:build                | build storybook                      |

## Roadmap

| plan                                                        | progress |
| ----------------------------------------------------------- | -------- |
| Implement a wrapper on top of Edamam REST API using GraphQL | ✔️       |
| Implement a React client for user interaction               | ⌛       |
| Implement filter by constraints                             | ⌛       |

## Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

See [CONTRIBUTING.md](./CONTRIBUTING.md) for ways to get started

Please make sure to read [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)

## Feedback

If you have any feedback, please reach out to me at karp.adrian@protonmail.com

## License

[GNU General Public License 3.0](https://www.gnu.org/licenses/gpl-3.0.html)

## Authors

- [@adriankarp](https://www.github.com/adriankarp)
