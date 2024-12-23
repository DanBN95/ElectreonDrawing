This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

<div style="display: flex; justify-content: space-evenly;">
  <img src=".readme/drawing-session.gif" alt="Drawing Session" width="300"/>
  <img src=".readme/statistics.png" alt="Statistics" width="300"/>
</div>
<br>

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install Dependencies

Before running the app, you need to install the necessary dependencies. Choose the appropriate command based on the package manager you're using:

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

> **Reminder**: Please ask the repository owner for the `.env` file, as it contains necessary environment variables that are not included in the repository.

## Step 2: Install CocoaPods (for iOS)

For iOS development, you will need to install CocoaPods dependencies. Run the following command from the ios/ directory:

```bash
cd ios
pod install
cd ..
```

## Step 3: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 4: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You've successfully run and modified Drawtreon app
