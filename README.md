# Broker Go

React-Native application to support the Anthem Broker mobile initiative. The first phase is focused on supporting iOS with Android support coming shortly after.

You can refer to the React Native CLI Quickstart in React Native's [Getting Started guide](https://facebook.github.io/react-native/docs/getting-started.html) for more detailed information, but basic setup steps are below.

# Setup

Install dependencies:

```
brew install node
brew install watchman
brew install yarn
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
yarn global add react-native-cli
```

After checking out the repository, you'll need to run `yarn install` from the project directory to ensure the appropriate node modules are installed for the project. You can then attempt to run the app in an iOS simulator with `react-native run-ios`.

# Scripts

There are some scripts used in the build process in the `tools/scripts` folder. Each one has a `--help` flag that explains their usage and purpose in more detail, but a high-level purpose for each is below.

* selectEnv.sh
  * This script is used to switch environment configs. The currently supported environments are combinations of Dev & QA and Protected & Unprotected. It must be run from the root of the project, otherwise releative paths will be lost. Example usage: `./tools/scripts/selectEnv.sh --env qa --protected false`
* buildIos.sh
  * This script is used to build the iOS archive and IPA files for distribution. It uses a number of hard-coded values currently that will be removed at a later time. The KEYCHAIN_PASSWORD environment variable must be set; otherwise, it will prompt you to manually enter your password. It must be run from the root of the project, otherwise relative paths will be lost. Example usage: `KEYCHAIN_PASSWORD=12345 ./tools/scripts/buildIos.sh`

# Basic Troubleshooting

This list is not comprehensive. Google and StackOverflow are always very big helpers. However, here are common issues that have been encountered by the team.

-----

If you see an error message similar to `Error: unable to resolve module`, a possible solution would be:
1. Run `yarn start --reset-cache`
2. Keep the terminal window open that results from step 1
3. Run `react-native run-ios`

-----
