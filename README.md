# reactNativeDrizzle

This repo is a proof of concept for getting Drizzle to work on React Native.

## Setup

1. Install dependencies: `yarn`
1. Start React Native Metro bundler: `react-native start`
1. Start your emulator/plug in your device
1. Install `ganache-cli` globally: `npm install -g ganache-cli`
1. Start `ganache-cli`: `ganache-cli -b 3`
1. Install `truffle` globally: `npm install -g truffle`
1. Compile and migrate contracts: `yarn run setup`

## Installation

### Android

1. Install: `react-native run-android`

### iOS

1. Install: Do it through Xcode

## Testing Dynamically Added Contract

1. In a **different** Truffle project, deploy another version of TutorialToken (or any token with the method `totalSupply`) to your Ganache testnet: `truffle compile && truffle migrate`
1. Copy the address that the contract was deployed to
1. Paste the address into the variable `address`  in `app/examples/DynamicContract.js`