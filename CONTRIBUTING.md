# Tips for Contributors

This project is currently open to contributions. In fact, we encourage anyone and everyone to contribute! That's what makes open source awesome!

If you'd like to contribute, check out the currently open issues. Generally those are available for anyone to tackle. If there's something else you'd like to contribute, create an issue for what you would like to add. We are very open to adding new features/docs!

### Contents

- [Setting Up Your Dev Environment](#setting-up-your-dev-environment)
- [Doc Changes](#doc-changes)
- [General Non-Doc Contribution Flow](#general-non-doc-contribution-flow)
- [Running Tests](#running-tests)
- [Getting Credit for Your Contributions](#getting-credit-for-your-contributions)

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

Referencing to doc files, use a relative URL path like: `[create-react-app-readme](docs/create-react-app-readme.md)`.

Referencing source code files, use a full url path like: `[SearchBar.jsx](https://github.com/tmobaird/i-want-to-contribute/blob/master/src/components/SearchBar.jsx)`.

The doc book for this project currently lives as a GitBook [here](https://tmobaird.gitbooks.io/i-want-to-contribute/). All doc files should be optimized for GitBook, using normal Markdown Syntax ([Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)).

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

## Getting Credit for Your Contributions

Since this project is all about helping people contribute to open source projects, we love to show off the awesome people that have helped out with this app. To do that, we have two different docs/files that include information about our contributors and the places they are from!

- [CONTRIBUTORS.md](https://github.com/tmobaird/i-want-to-contribute/blob/master/CONTRIBUTORS.md)
- [contributors.json](https://github.com/tmobaird/i-want-to-contribute/blob/master/src/utils/contributors.json)

**`CONTRIBUTORS.md`** is a simple markdown doc that includes a list of locations around the world with a list of contributors from those locations.

**`contributors.json`** is almost the same as the markdown doc, but is a JSON data set. Essentially it is just an Object with the attribute locations that consists of an array of location objects that include basic location information as well as an array of contributors.

When adding a new location in either of these files feel free to add them by city, state, or even country! It's entirely up to you! _Also if you'd like to get credit for your work in this fashion without disclosing your location, feel free to add an anonymous location to these lists. It's awesome to track our contributors' locations, but if you don't feel comfortable disclosing that information, there should be no pressure to include that!_

[Here's what our live Contributors Map currently looks like!](https://i-want-to-contribute.netlify.com/contributors)

#### Updating `CONTRIBUTORS.md`

If your location exists, simply add a new bullet to that section with your name followed by your Github username as a link to your Github profile. Example:

 > - Thomas Baird ([@tmobaird](https://github.com/tmobaird))

 **Raw Markdown**:

```markdown
- Thomas Baird ([@tmobaird](https://github.com/tmobaird))
```

If your location does not exist on the list, feel free to add it! If there's any emoji you can think of that is appropriate for your location, feel free to add that as well! Example:

> ### Virginia :icecream:
>
> - Thomas Baird ([@tmobaird](https://github.com/tmobaird))

 **Raw Markdown**:

```markdown
### Virginia :emoji_name:

- Thomas Baird ([@tmobaird](https://github.com/tmobaird))
```

#### Updating `contributors.json`

The contributors.json data set is a JSON object that includes the property `locations` which is an array of locations for all the places our contributors come from. Each location has a set of properties, those being:

- name `<String>`
- emoji `<String>`
- latitude `<Number>`
- longitude `<Number>`
- contributors `<Array>`

An example JSON object for a location looks something like:

```json
{
    "name": "Virginia",
    "emoji": "icecream",
    "latitude": 37.4316,
    "longitude": -78.6569,
    "contributors": []
}
```

When creating a new location, make sure you include the longitude and latitude of this location (this is what allows us to place markers on our map in these locations). In regards to these values, north (latitude) and east (longitude) coordinates should always be positive values, whereas south (latitude) and west (longitude) should always be negative values. Example:

    Virginia: 37.4316° N, 78.6569° W -> latitude: 37.4316, longitude: -78.6569  

When adding yourself as a contributor to a location, add a new contributor object to that location's contributors array. A contributor has the following properties:

- name `<String>`: This is your name (ex. Thomas Baird)
- username `<String>`: This is your github username handle (ex. tmobaird)

An example contributor object should look something as follows:

```json
{
    "name": "Thomas Baird",
    "username": "tmobaird"
}
```

If anything about this process of adding yourself to the contributors lists was hard to understand, feel free to create a Github issue for clarification or post a message for help in our Gitter channel here:

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?colorB=FF4C8D)](https://gitter.im/i-want-to-contribute/Lobby)
