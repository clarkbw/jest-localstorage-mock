## Source

[git](https://help.github.com/articles/set-up-git/) is required.

Run in a Terminal:

```
git clone git@github.com:clarkbw/jest-localstorage-mock.git
cd jest-localstorage-mock
```

## Development

[yarn](https://yarnpkg.com/) is required.

```
yarn install
yarn test
```

## Pull Request

Before every PR run the following:

```
yarn run prettier
```

## Publish

When publishing a new build, run the following:

```
yarn run prettier
yarn run build
npm version major | minor | patch
npm publish
git push --tags
```
