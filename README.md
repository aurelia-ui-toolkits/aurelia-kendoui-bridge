# aurelia-kendoui-plugin

[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io) [![Join the chat at https://gitter.im/adriatic/Aurelia-KendoUI](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/adriatic/Aurelia-KendoUI?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


## Introduction
This is the home of the Aurelia Kendo UI Plugin repo. Since the internal organization of this repository is slightly more complex than what one would expect (see below, which shows that both the plugin itself and the sample Aurelia application that "consumes" this plugin in order to demo the KendoUI controls) :

<p align=center>
  <img src="http://i.imgur.com/mS8X0tT.png"></img>
</p>

you should read a detailed article **[How to build and use aurelia kendoui plugin](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin/wiki/How-to-build-and-use-aurelia-kendoui-plugin)** before trying to add functionality to this project

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install semver packages, but GitHub has a rate limit on anonymous API requests. It is advised that you configure jspm with your GitHub credentials in order to avoid problems. You can do this by executing `jspm registry config github` and following the prompts. If you choose to authorize jspm by an access token instead of giving your password (see GitHub `Settings > Personal Access Tokens`), `public_repo` access for the token is required.
5. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```
  >**Note:** Windows users, if you experience an error of "unknown command unzip" you can solve this problem by doing `npm install -g unzip` and then re-running `jspm install`.
  
6. Change directory to **`aurelia-kendoui-plugin/sample`** and execute the command:
   
  ```shell
jspm install
```
7. To run the app, execute the following command:

  ```shell
  gulp watch
  ```
8. Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

  > The Skeleton App uses [BrowserSync](http://www.browsersync.io/) for automated page refreshes on code/markup changes concurrently accross multiple browsers. If you prefer to disable the mirroring feature set the [ghostMode option](http://www.browsersync.io/docs/options/#option-ghostMode) to false

 > Note: At present there is a bug in the HTMLImports polyfill which only occurs on IE. Aurelia team has submitted a pull request to the team with the fix. In the mean time, if you want to test on IE, you can work around the issue by explicitly adding a script tag before you load system.js. The script tag should look something like this (be sure to confirm the version number):

  ```html
<script src="jspm_packages/github/webcomponents/webcomponentsjs@0.5.2/HTMLImports.js"></script>
```

