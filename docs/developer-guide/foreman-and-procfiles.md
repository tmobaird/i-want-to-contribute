# Foreman and Procfiles

![Contributions Welcome][contributing-badge] ![In Progress][in-progress-badge]


When I [Thomas Baird] first learned of Foreman, I became hooked on using it (_and probably used it way too liberally at times_). It is useful in so many ways that it is an invaluable tool to be familiar with.

> Foreman is a manager for Procfile-based applications. Its aim is to abstract away the details of the Procfile format, and allow you to either run your application directly or export it to some other process management format.

With the addition of an express server that needs to be running at the same time as your web dev server for the app to be fully functional, it was logical to use foreman to allow us to spin up these server in an easy fashion.

If you checkout out the `yarn start` command, you'll see it now looks something like:

    nf start -j Procfile.dev

**`nf`?? What the..?**

`nf` is short for [node-foreman]() and the CLI command to perform some action with foreman. In this case it's starting up foreman using the `Procfile.dev`.

Now lets take a look at the `Procfile.dev`:

```
web: yarn run start-ui
express: yarn run express
```

As you can see, two different processes are defined in this file, a `web` process and an `express` process. The web process will start via the command `yarn run start-ui` (which in fact is the new name for the `start` script before the addition of the express server). The express process will start via the command `yarn run express`. This is a new script that runs `node src/server`, effectively spinning up our express server.

[&#x2190; Previous](express-usage.md) | [Next Up: **Running Only the Ui Server** &#x2192;](running-the-ui-server.md)

[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
[coming-soon-badge]: https://img.shields.io/badge/coming-soon!-FF6262.svg
[in-progress-badge]: https://img.shields.io/badge/in-progress-EDE128.svg
[under-review-badge]: https://img.shields.io/badge/under-review-C486FF.svg
