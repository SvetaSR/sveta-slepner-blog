---
title: React — 5 Things That Might Surprise You
timeToRead: 7
date: 2021-06-08T11:00:00.000Z
featuredimage: https://res.cloudinary.com/dq6tqnvbh/image/upload/w_900,q_auto/v1675946414/blog/5-react.jpg
description: The React library is pretty straightforward and is relatively easy to get into, especially with the wide variety of materials that exist to help you learn it. But every tool has its share of tricks or issues that these tutorials usually don’t cover. You get to learn them when someone reviews your code, or worse — when you’re facing a problem and are desperate to find a solution. Hopefully, with this article, I might reveal some of these things about React, and maybe even surprise you!
tags:
  - javascript
  - react
  - frontend development
  - web development
slug: 2021-06-08-react-5-things-that-might-surprise-you
canonical: https://medium.com/geekculture/react-5-things-that-might-surprise-you-ddefd9fbac0f
---

The React library is pretty straightforward and is relatively easy to get into, especially with the wide variety of materials that exist to help you learn it. But every tool has its share of tricks or issues that these tutorials usually don’t cover. You get to learn them when someone reviews your code, or worse — when you’re facing a problem and are desperate to find a solution. Hopefully, with this article, I might reveal some of these things about React, and maybe even surprise you!

![React 5 Things That Might Surprise You](https://res.cloudinary.com/dq6tqnvbh/image/upload/w_900,q_auto/v1675946414/blog/5-react.jpg)

1\. **Setting the state by using the previous state is unpredictable.**
State management is the foundation of React, and while `useState` is probably the most common hook, there might be some unawareness of its actual behavior.

Let’s have a look at the following component:

```javascript
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
```

What would you expect the value of the counter state to be, after a user clicks on the button?

A. 2\
B. 1

Not sure? Try it out yourself:

<iframe src="https://codesandbox.io/embed/set-state-async-kkyix?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="set-state-async"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Well, whether you knew that, guessed correctly. or just tested the demo — the answer is B!

The reason is that during our state update we used the previous state value: `setCounter(count + 1)`. Essentially, the state setter function is wrapped inside the functional component closure, so it is provided with the value that was captured in that closure. It means that when it will eventually be executed (the state setter function is asynchronous), it might hold a state value that is no longer relevant. On top of that, consecutive execution of setState might cause React’s scheduling algorithms to handle multiple very fast state updates using the same event handler.

The same problem might also occur when setting the state inside an asynchronous function:

```javascript
onClick={() => { 
   setTimout(() => { setCounter(counter + 1); ), 1000);
}};
```

But, no worries, React actually provides an easy solution to this problem — **“functional updates”**.

```javascript
setCounter((prevCounter) => prevCounter + 1);
```

Instead of passing the value directly to `setCounter`, we pass a function. This function receives as a parameter the **previous state**.
This way we can be sure that React provides us the correct value of the previous state, and avoid the scenarios that might cause the unexpected behavior.

<iframe src="https://codesandbox.io/embed/set-state-async-functional-update-uhzze?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="set-state-async-functional-update"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


**Whenever your state update is relying on the previous state, be sure to use functional updates!**

Another benefit of this is to allow correct memoization of functions, since passing the value as a dependency would re-create the function on every state change.

```javascript
// incorrect
const update = useCallback(() => {
   setCounter(counter + 1);
}, [counter]);

// correct
const update = useCallback(() => {
   setCounter(prevCounter => prevCounter + 1);
}, []);
```

2\. **You can use useRef to store a static variable**\
We are accustomed to using the ref mechanism in React as a means to access an element’s DOM node, whether because we need it to calculate its size, set a focus status, or basically do anything React can’t do naturally. But refs can also be used for a different purpose — something that we could achieve for free with class components, but we can’t with functional ones — keep a static variable that won’t be recreated on every render.

Why would we need to do so? Well, it really depends on the situation. For instance, let’s say we’re using some javascript library that was not written for React.

<iframe src="https://codesandbox.io/embed/use-ref-lffhh?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="use-ref"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

In this example, we have a class Dog. Dog has two functions — one to set its name, and one to bark it.

If we tried to create the instance of this class using a simple variable, what would happen is that in case (for any reason) the component is re-rendered, a new instance will be created. So any changes we did so far will go away.

But by using a ref, we will be able to keep our instance alive, until we decide to override it by setting a new value to ref.current.

```javascript
someRef.current = newValue;
```

**3\. React can be forced to re-mount a component**\
Writing to the DOM is one of the more costly actions that can be done by React. This is why we usually don’t want to remount components unless it’s absolutely necessary. Alas — sometimes we must, for various reasons. So on that occasion, how do we even tell react to unmount and immediately mount again a component? With a simple trick — by providing a key to our component, and changing its value.

The key prop is a special React property you most likely have learned about the first time you tried to render an array of components.


![The famous React warning](https://res.cloudinary.com/dq6tqnvbh/image/upload/f_auto/v1675947008/blog/react-error.jpg)

A key is something that helps React keep track of an element, even if we’ve changed its position within our component’s structure or re-rendered the parent (Otherwise each render would cause the entire component array to be re-mounted, which is bad for performance).

Using this mechanism, we can trick React to think a component is not the same as its previous self and cause it to re-mount.

See for yourself:
<iframe src="https://codesandbox.io/embed/unmount-with-key-gwr2p?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="unmount-with-key"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Why would we need that at all, by the way? Well, it’s a quick way to create a “reload” button for your app, for example. Another use case is mixing DOM handling with React, where we want React’s state to reflect updates that were made to the DOM from “outside”.

But it should still be avoided unless it's the last resort.

**4\. Context doesn’t work the way you would expect it to**\
Context API is a great built-in solution for sharing state between components and avoiding “prop drilling” — passing props multiple levels down — from one component to the other, sometimes just for the sake of passing them down where it's actually needed.

![context](https://res.cloudinary.com/dq6tqnvbh/image/upload/f_auto/v1675947110/blog/context-inigo.jpg)

While it’s very useful, it also has its limitations.

When used for recurring or complex updates, it’s not that efficient. [Quoting Sebastian Markbage, a Facebook engineer](https://github.com/facebook/react/issues/14110#issuecomment-448074060):


 > "My personal summary is that new context is ready to be used for low frequency unlikely updates (like locale/theme). It’s also good to use it in the same way as old context was used. I.e. for static values and then propagate updates through subscriptions. **It’s not ready to be used as a replacement for all Flux-like state propagation**".

Even the React-Redux team had to revert parts of the library re-written with context API in [version 6](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/#v7-0), simply due to a significant performance hit compared to its previous version (Now React-Redux only uses context to pass down the store reference).

Another major issue is the incapability of components to subscribe only to **part** of a context (when a context value is an object, not a primitive).

Let’s have a look at the following example:

![Updating any subset of the context will cause a re-render to everything subscribed
](https://res.cloudinary.com/dq6tqnvbh/image/upload/v1675947350/blog/demo-gif.gif)

In this example, the context stores **an object** containing two entries: name and age. We then have two components subscribed to this context. One is using just the age, and the other the name. But — when updating just one of the entries, either the name or the age, both `<Name>` and `<Age>` components are re-rendered. You can access this demo [here](https://codesandbox.io/s/context-limitations-4jhqs?file=/src/App.js) and see how it works.

The fact that all components subscribed to a context holding a non-primitive type value are re-rendered is obviously inefficient, and on some occasions might cause a performance issue.

There are some native solutions to this issue, but most of them are cumbersome. You can also consider using a 3rd party library, such as [use-context-selector](https://github.com/dai-shi/use-context-selector), which makes dealing with this problem much easier.

**5\. React has a whole API to deal with the children prop**\
Passing children to a component is a very common pattern, whether you’re using composition, or just writing a reusable wrapper component.

But, did you know that instead of just rendering the children, React also provides you an API allowing you to do all sorts of things with it?

First of all — children can be a string, an object, or an array of any of these types. It makes it quite hard to iterate over the children like this, so we can call `toArray` to transform children to an array:

```javascript
React.Children.toArray(children)
// If you want to use map/forEach:
React.Children.map(children, fn)
React.Children.forEach(children, fn)
```

We can also call count to know how many children there are, avoiding the same hassle:

```javascript
React.Children.count(children)
```

If you need to enforce a single child in your component (I recently noticed formik does so), you can simply include the following line in your component, and React will run the check and error handling for you:

```javascript
React.Children.only(children)
```

You can use the following sandbox to play around with it:

<iframe src="https://codesandbox.io/embed/react-children-i9vvw?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-children"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

And that was it! I really hope some of these will be useful for you. Please feel free to share in the comments any other React tricks that you know!



