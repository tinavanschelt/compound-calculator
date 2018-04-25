# Rails + React Compound Interest Calculator

## Tech Stack

### Core

* Ruby 2.5.1
* Rails 5.2.0 (run in --api mode)
* React 16
* React Router
* Redux
* Redux-sagas
* Reselect
* ImmutableJS
* Styled Components
* Recharts

### Testing

* Jest
* Enzyme

### Linting

* Eslint

## Project Structure

The application was created using `rails new --api` and follows the standard rails folder structure, with the addition of our React files. All the React-related code lives in the `/frontend` folder.

The project uses [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

Container/component architecture in short:

* `containers/` contains components which are connected to the redux store.
* `components/` contains "dumb" components which depend on containers for data.

## Setup

1.  Download / clone the repository
2.  `cd` into the directory
3.  Run `ruby -v` and `rails -v` to ensure that you have Ruby and Rails installed. The versions used in this project are listed above. If you don't have Ruby or Rails installed / you have the wrong version, I recommend using [RVM](https://rvm.io/rvm/).
4.  Install all the gems and depencies
    * Run `bundle install`
    * Run `yarn` (If you don't have [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable) installed it can be installed with [Homebrew](https://brew.sh/))
5.  Run `webpack` to ensure all the javascript files have been bundled
6.  Start the Rails server `rails s`

## Linting

To run the linter once:

```
$ yarn lint
```

To run the watch task:

```
$ yarn lint:watch
```

The above uses eslint and eslint-watch.

## Testing

Javascript

```
$ yarn test
```

Rails

```
$ rake test
```
