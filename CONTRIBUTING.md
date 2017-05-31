# Tips for Contributors

This project is currently open to contributions. In fact, we encourage anyone and everyone to contribute! That's what makes open source awesome!

If you'd like to contribute, check out the currently open issues. Generally those are available for anyone to tackle. If there's something else you'd like to contribute, create an issue for what you would like to add. We are very open to adding new features/docs!

### Contents

- [Setting Up Your Dev Environment](#setting-up-your-dev-environment)
- [Doc Changes](#doc-changes)
- [General Non-Doc Contribution Flow](#general-non-doc-contribution-flow)
- [Running Tests](#running-tests)

### Setting Up Your Dev Environment

You will need to have the following installed on your machine before continuing:

- Node >= 6, [installation instructions](https://docs.npmjs.com/getting-started/installing-node)
- NPM >= 3, [installation instructions](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
- Yarn, [installation instructions](https://yarnpkg.com/lang/en/docs/install/)

Next, you'll want to `cd` into the project's root and install our node dependencies:

```bash
cd iwanttocontribute
yarn install
```

_Note: This app is now officially using Yarn for it's package manager. Make sure you check out the installation information above._

The last requirement is that you have a Github access token created. This is required because the Github API allows us a much larger rate limit when accessing their API with an authenticated access token. To create your access token, follow the `Creating a Token` part of [this guide](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/#creating-a-token). Give it whatever descriptive name you want, and as far as permissions go, don't give it any additional permissions (ie. don't check the checkboxes). There's no need. This token only needs public access level.

From here, the token (a long string of characters) should be displayed to you. Copy the token, create a file named `.env` in this project's root and add this line to it:

```
GITHUB_TOKEN=<Your Github Token>

```

(make sure you replace `<Your Github Token>` with the token you copied). Save that file, and make sure you DON'T commit it to git! This is your personal secret Github token.

Voila! Your dev environment is all set up! You can now run `yarn start` to spin up your development server, which will redirect you to the app in your browser.

_Note: For more information about the dev environment for this project, along with some other related topics, check out the [Developer Guide](docs/developer-guide/README.md) in the docs._

#### Vagrant Environment

Using the default `ubuntu/trusty64` should work fine. You will need to forward a port to access the app from your local machine. Add this line to your Vagrantfile:

```
config.vm.network "forwarded_port", guest: 3000, host: 3000
```

You should now be able to access your app now at http://localhost:3000

### Doc Changes

This project should include detailed docs about tools, methodologies, and approaches that are used within this application. This will serve as a good place for others to learn, but solidify the knowledge of these things to the doc authors.

When making doc changes, we want to use relative URL paths for references to other docs, but full url paths for references to source code files.

Examples:

Referencing to doc files, use a relative URL path like: [create-react-app-readme](docs/create-react-app-readme.md).

Referencing source code files, use a full url path like: [src/components/SearchBar.jsx]().

### General Non-Doc Contribution Flow

1. Make sure the change you want to make has an issue related to it. If it doesn't, feel free to create one!
2. Fork the repo to your namespace and set up your development environment.
3. Perform a `git checkout` and checkout a branch named something that is related to the change you are making. Some examples are:
    - `feature-adding-search-filters`
    - `fix-catching-search-error`
    - `docs-react-redux`
4. Make the desired code changes in your favorite editor and commit your changes!
5. Write tests for the code you've added (or make sure tests exist for the code you wrote).
    - If you don't know how to write tests with Jest, don't worry! Push up the code and create a pull request to the main repo. A maintainer will help your write tests for your newly added code. We all have to start somewhere!
6. Squash commits
    - This is not always necessary, but if you found yourself making a bunch of commits with your changes (some of which aren't of much value), squash them.
    - If you aren't familiar with commit squashing, check out [this](http://stackoverflow.com/a/16642628).
7. If all the tests pass, push your commits up to your fork.
8. Create a pull request from your forked repo to the main repo.
9. Wait until a maintainer views your awesome changes! (We'll try to do this as quickly as possible)

### Running Tests

To run your tests locally, you can simply run:

```
yarn test
```

That will run your tests and start a test watch mode, which means every time you save a file, it will re-run your tests.

More information about testing for this project can be found [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests).

And some other helpful resources:

- [Jest](https://facebook.github.io/jest/)
- [Enzyme](https://github.com/airbnb/enzyme)
