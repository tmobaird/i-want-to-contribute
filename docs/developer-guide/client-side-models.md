# Client Side Models

A recent introduced pattern (as of January 2018) to this project was the usage of Client Side Models. Since the majority of React tutorials out there on the web do NOT use these, I felt a doc explaining and rationalizing the usage of this was necessary.
Another note, is that this project has added Flow for static type checking. This makes the case for client side models even stronger
due to the need for typing our JS code.

### What is a Model?

For the sake of this project, a model is simply a JavaScript class that "models" an object within the system.

### What?

What are client side models? Client side models are data models that represent the data objects within the front end of your system.
For example in this project we display a list of repositories after a search is made.
With each repository we display a heap of information about the given repository,
this single entity is important and reused enough that it's a logical place for creating a class to represent this object.

For this project, our state could look something like:

```JSON
results: {
  1: { name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.', language: 'JavaScript' },
  2: { name: 'redux', description: 'Predictable state container for JavaScript apps', language: 'JavaScript' }
}
```

Now, after the usage of client side models, our stage could look like:

```JSON
results: {
  1: Repo { name: 'react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.', language: 'JavaScript' },
  2: Repo { name: 'redux', description: 'Predictable state container for JavaScript apps', language: 'JavaScript' }
}
```

Not a huge change, but at least we know all of our results data is serialized as the same type of entity.
The big payoff of this strategy will come later.

### Usage

Once some basic models have been added, we can start using them within our components, reducers, actions, etc.

#### Within Components

Within components, client side models are not much different than using POJOs (Plain Ole' JavaScript Objects).
All properties are accessible via the regular dot notation (`repo.name == 'react'`). 

_The only thing we lose is accessing properties via square bracket notation (`repo['name'] == 'react'`), although I don't
think that's a huge deal._

On top of this, we now gain the ability to bake as many extra features into the Repo model class as we want.
This means that any special extras, via functions or properties, can be added in an isolated class that won't spill
out in other places. This can help drastically clean up our components, by extracting logic that would at one point
have been in the component itself, but now lives in the model of the data object that component displays.

#### Within Actions

#### Within Reducers

Now, this is the area where I think client side models really shine. Now that flow is being used, we are typing all of our reducers
with the proper data types for reducer arguments and return types.

For an example, we have a simplified version of our repo reducer, which looks something like this:

```js
function repo(state: Repo, action: Object): Repo {
  switch(action.type) {
    case "RESULT_FETCHING_ADDITIONAL_UPDATE":
      return state.updateAndClone({ fetchingAdditional: action.payload });
    default:
      return state;
  }
}
```
 
As you can see, we can now say that this function (reducer) takes in an instance of the model `Repo` as state
and returns an instance of the model `Repo`. 
 
On top of that the best practice for reducers is to have them be functions with no side effects. Since all we need to do now
is update a property on repo with a specific set of data, we can create a generic `updateAndClone` function on our models
that will update, via cloning to make sure we avoid directly mutating the state (that's a big time redux no-no), the given `Repo` with the new data from our action.
 
Here's what an example `updateAndClone` function might look like, as well as the specs.
 
```js
updateAndClone(data: $Shape<RepoAttributes>): Repo {
  const params = Object.assign({}, this.properties(), data);
  return Repo.create(params);
}
 
```
 
```js
describe('updateAndClone', () => {
  let repo;
  beforeEach(() => {
    repo = Repo.create({id: 123, fullName: 'facebook/react', name: 'react'});
  });

  it('returns a new repo', () => {
    const subject = repo.updateAndClone({fullName: 'facebookCode/react'});
    expect(subject).not.toBe(repo);
    expect(subject instanceof Repo).toBeTruthy();
  });

  it('updates attributes', () => {
    const subject = repo.updateAndClone({fullName: 'facebookCode/react'});
    expect(subject.fullName).toEqual('facebookCode/react');
  });
});
```

This makes for a much more descriptive and readable reducer function. One that can also dry things up now due to
all models in our system updating their information via the same mechanism or strategy.

### Why?

Because it's clean, organized, and logically makes sense. One of earliest ideas that developers learn is Object Oriented Programming.
It is the base idea that almost all modern software design principles are based upon (even react's component design is based upon it).
Client side models is an instance Object Oriented programming, so the concepts should make a lot of sense, and
feel familiar (& comfortable) to developers once they understand the ideas behind using them on the client side.
