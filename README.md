<h1 align="center">Hi 👋, I'm Raj Shah.</h1>
<h3 align="center">A passionate react native developer from India</h3>
<br/>

- This project is basically to manage users finance where they can manage and contorl there weekly spent.

<br/>

## Base dependencies

- [@react-navigation/native,@react-navigation/native-stack,react-native-screens,react-native-safe-area-context](https://reactnavigation.org/) navigation library.
- [redux](https://redux.js.org/) for state management.
- [react-redux](https://react-redux.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen#readme) for responsive UI.

## Dev dependencies

- [miragejs](https://github.com/miragejs/miragejs) for Mock API

## Folder structure

This template follows a very simple project structure:

- `Src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app
  - `navigation`: Folder to store the navigators.
  - `redux`: This folder have a redux (state management) folder & files.
    - `actions`: This folder contains all actions that can be dispatched to redux.
    - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
    - `store`: Folder to put all redux middlewares and the store.
  - `res`: This is a helper folder.
  - `screens`: Folder that contains all your application screens/features.
  - `utility`: This folder contain all your app dummydata, common logic, etc.
  - `App.js`: Main component that starts your whole app.

## My business requirements

- User can see there card details and also hide card number & CVV.
- Click on Card user have to navigate in spending screen where they can select any single option from our defualt amounts.
- On debit card screen we can calculate user weekly spend amount and represt it as a progressbar.
- Progrss bar is visible if user weekly spending limit switch is on.
- if user can not set there weekly spend limit and try to turn on switch for weekly spending limit option they got one alert where we can inform user to set the weekly spend limit first.

![Demo](https://github.com/shahrajk/Debitcard/blob/master/demo.gif)

