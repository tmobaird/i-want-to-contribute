# Redux

This doc is for all redux related topics. If there's some you know about redux that you do not see in this doc, and feel it should be. Go ahead and submit a pull request with this information!

### What Is It?

> Redux is a predictable state container for JavaScript apps.

Redux is a state container meaning that manages the entire state of your application. For example, with this application [I want to contribute], you start out with a non submitted search, and no results, therefore the state of our application could look something like:

```javascript
search: {
  submitted: false,
  submittedSearchTerm: "",
},
results: {
  data: {},
  fetching: false
}
```

It's simple, but that's the initial redux state for this app. You can use this state tree throughout your react components to help keep your entire UI in sync with one main state or "store" as it's called in redux.

At some point, you'd want to update this state, whether that be when a search is submitted or when results have fetched and we need to update our results data. You cannot update the state directly, but instead must use "actions". Actions are plain JavaScript objects that define how you are updating the state. Actions can be recorded and replayed later (for debugging purposes among others). Knowing the actions and the order that they are dispatched in, makes redux's state management predictable.

Plainly put, Redux provides a way for you to keep your application's state in one overarching container or "Store". This yields easier visualization of data and presentation, consistent behavior, ability to run on both the client and server, and easier testing for you app.

### Why Is It So Awesome?

It's simplicity (as well as the predictability it provides). Redux is super simple, and the idea behind it is brilliantly simplistic. Encapsulating your state in one large container, dispatching actions that describe some way they update the state, and optionally logging the history of these. That's it. It's easy, it's clean, and it's simple. It removes a lot of headaches because instead of having the state of your application stored in many different components all over the place, you have your application state in one place. There's no need to sift through lots of code to find where a state variable is or where it's changed. You know where it is, it's in your redux store, and you know where the state is changed, it's in your actions.

If you still don't believe redux is simple, this might change your mind:

![Redux Tweet][Redux Tweet]

That's right, the bulk of Redux is about 100 lines total. Simplicity level > 9000. (FYI, he's the creator of Redux)

### Why Use It?

Todo: ![Contributions Welcome][contributing-badge]

### How To Use It?

Before you continue, there are some vocabulary words specific to Redux that you should know. If these don't completely make sense yet, don't worry. They will by the time you're done reading.

- **Store** - The Store is the overarching state container. The store will contain the whole state of your app.
- **Reducer** - A Reducer is a JavaScript function that will update a part of the state based upon an Action it receives.
- **Action** - An Action is a plain JavaScript object that defines the type of change we want to make to the state and any data needed to make this change.
- **Action Creator** - An Action Creator is a JavaScript function that returns an Action. These are very useful when some work needs to be performed before an Action can be dispatched.

### Additional Resources

What better way to learn redux and react w/ redux than from the creator of Redux, [Dan Abramov](https://github.com/gaearon)! For those of you who are visual learners, and much prefer watching video tutorials over reading, Dan Abramov has published a brilliant set of FREE videos to Egghead.io that explain the ideas behind Redux, what Redux actually does, and how to use it with React. These were really some of the greatest resources in my honest opinion. In these videos, he not only shows you how he wrote Redux (it's way simpler than you think!), but the best practices for it as well. You can find the video series [here](https://egghead.io/instructors/dan-abramov?order=ASC).

Or watch a couple of my favorites until you get hooked:

[![Redux: The Reducer Function][Redux: The Reducer Function - Thumbnail]](https://egghead.io/lessons/javascript-redux-the-reducer-function?wvideo=1zzwzojzhv)
**Redux: The Reducer Function**

[![Writing a Counter Reducer with Tests][Writing a Counter Reducer with Tests - Thumbnail]](https://egghead.io/lessons/javascript-redux-writing-a-counter-reducer-with-tests?wvideo=3vfzi109hd)
**Writing a Counter Reducer with Tests**

[![Implementing Store from Scratch][Implementing Store from Scratch - Thumbnail]](https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch?wvideo=ru2s305xua)
**Implementing Store from Scratch**

[![Implementing combineReducers() from Scratch][Implementing combineReducers() from Scratch - Thumbnail]](https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch?wvideo=ksow5m6e7t)
**Implementing combineReducers() from Scratch**

... you hooked yet?

If the video series doesn't cut it for you, and you prefer reading docs, check out the [Gitbook for Redux](http://redux.js.org/). It includes a ton of good explanations, examples, and best practices for Redux.

[Redux: The Reducer Function - Thumbnail]: https://embedwistia-a.akamaihd.net/deliveries/4252308670b79c81c5c92e14e2ad330adc8261d4.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=7b796ae0
[Writing a Counter Reducer with Tests - Thumbnail]: https://embedwistia-a.akamaihd.net/deliveries/aa57c1bcf0ea00c2f25b2df41446c50a1a3e6df4.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=7b796ae0
[Implementing Store from Scratch - Thumbnail]: https://embedwistia-a.akamaihd.net/deliveries/b952331f6850b48aa709d14ff97ccfd3e87b31aa.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=7b796ae0
[Implementing combineReducers() from Scratch - Thumbnail]: https://embedwistia-a.akamaihd.net/deliveries/5e8319936a32fb09520eb340645d7513dd5cde72.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=7b796ae0
[Redux Tweet]: ../images/redux-tweet.png
[contributing-badge]: https://img.shields.io/badge/contributions-welcome!-4BADFF.svg
