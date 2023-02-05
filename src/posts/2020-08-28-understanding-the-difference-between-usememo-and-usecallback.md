---
title: Understanding the difference between useMemo and useCallback
timeToRead: 4
date: 2020-08-28T15:00:10.000Z
featuredimage: https://res.cloudinary.com/dq6tqnvbh/image/upload/w_900,f_auto/v1675614002/blog/1_-oaiaaoisECxNABVxeVbcg.jpg
description: React provides us two built-in hooks to optimize the performance of our app, useMemo & useCallback. At first glance, it might look like their usage is quite similar, so it can get confusing about when to use each. To clear that confusion, let’s understand the actual difference and the correct way to use them both.
tags:
  - react
  - javascript
  - frontend development
  - web development
slug: 2020-08-28-understanding-the-difference-between-usememo-and-usecallback
canonical: https://medium.com/gitconnected/understanding-the-difference-between-usememo-and-usecallback-ec956adb2004
---
![chemex](https://res.cloudinary.com/dq6tqnvbh/image/upload/w_900,f_auto/v1675614002/blog/1_-oaiaaoisECxNABVxeVbcg.jpg)

React library provides us two built-in hooks to optimize the performance of our app: useMemo & useCallback. At first glance, it might look like their usage is quite similar, so it can get confusing about when to use each. To clear that confusion, let’s dig in and understand the actual difference and the correct way to use them both.

## Functional components have a problem
Functional components are great. Their combination with hooks allows for much more code reusability and flexibility than Class components. However, they do have one problem: A functional component is the same as the render function we used to have in class components. It’s a function that is being re-run on any prop/state change.

**It means that:**

A. If a function is called inside the component, it will be re-evaluated, again and again, on every re-render.

B. If a function is created inside the component is passed to a child component, it will be recreated, meaning the pointer will change, causing the child to re-render or call the function unnecessarily (depending on the situation).

To tackle the problem and prevent the possible performance issue, React provides us with two hooks: useMemo and useCallback.

## useMemo
Let’s start with the first problem and see how we can prevent evaluating functions unnecessarily.

In the following demo, we have a component with two states: one store a number, and the other one a boolean.
We need to do some calculation on the number we have in our state, so we call our plusFive function and render the result.

```javascript
const plusFive = (num) => {
  console.log("I was called!");
  return num + 5;
};
export default function App() {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);
  const numPlusFive = plusFive(num);
  return (
  ...
```

<iframe src="https://codesandbox.io/embed/use-memo-no-memo-g959e?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="use-memo-no-memo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

If you open the console, you’ll see that plusFive is called whether we click on “Update Number” which sets a new number, or “Toggle the light” which updates the boolean state (and has nothing to do with numPlusFive).

So how can we prevent this from happening? By memoizing `plusFive` !
Until we will receive a new number, the function will not be called. The calculation is skipped, and we will receive the result immediately.

We will do that by using `useMemo` , and it will look like this:

```javascript
const numPlusFive = useMemo(() => plusFive(num), [num]);
```

useMemo receives two parameters: A function that returns our function call, and an array of dependencies. Only when one of the dependencies is changed, our function will be called again. useMemo returns the results of that function execution and will store it in memory to prevent the function from running again if the same parameters were used.

Go ahead and see for yourself (don’t forget to open the console):

<iframe src="https://codesandbox.io/embed/use-memo-tsc89?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="use-memo"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## useCallback
Now that we know how to prevent re-evaluating functions, let’s see how we can prevent functions created inside components from being recreated on every render.

In the demo below, we have a child component (<SomeComp>) that receives as a prop, a function we created inside the parent component (<App>). Note this function is being used inside a useEffect hook, and since it’s listed as useEffect’s dependency, it’s being called again. Yes, even when we change other states or receive props, not related to our “plusFive” function.

```javascript
const App = () => {
  const [num, setNum] = useState(0);
  const [light, setLight] = useState(true);
  const plusFive = () => {
    console.log("I was called!");
    return num + 5;
  };
  return (
    <div className={light ? "light" : "dark"}>
      <div>
        <SomeComp someFunc={plusFive} />
  <button onClick={() => { setLight(!light); }}> Toggle the light </button>
      </div>
    </div>
  );
}
const SomeComp = ({ someFunc }) => {
  const [calcNum, setCalcNum] = useState(0);
  useEffect(() => {

    // In this scenatio, someFunc will change on every render, so this useEffect will run.
     setCalcNum(someFunc());
  }, [someFunc]);
return <span> Plus five: {calcNum}</span>;
};
```

<iframe src="https://codesandbox.io/embed/use-callback-no-callback-h6x4m?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="use-callback-no-callback"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

To prevent our function from being recreated and change pointers on each render round, we can use `useCallback`. This React hook receives two parameters: A function and an array of dependencies:

```javascript
const plusFive = useCallback(() => {
  console.log("I was called!");
  return num + 5;
}, [num]);
```

This hook lets us preserve the function, and it will be recreated only when one of its dependencies changes.

Here’s the working demo:

<iframe src="https://codesandbox.io/embed/use-callback-ymhyy?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="use-callback"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## But Wait! Don’t misuse these hooks!
While these two hooks provide a solution to a real problem, they may get misused very easily and even cause more harm.

For instance, there is no need to memoize a function that’s doing some basic calculation (like in the demo). Only use `useMemo` whenver you’re trying to prevent re-running expensive functions, that run a lot of time, or using a lot of resources. Why? Because useMemo keeps in memory the results of the functions execusion, and it might potentially grow big and ironically harm the performance of your App.

With `useCallback` things might get even worse: when not using useCallback, your old function will be garbage collected, but with useCallback it will stay in memory, in case one of the dependencies will be right again to return that old function version.

So when is it right to use `useCallback` ? When you actually see that not using it harms your performance, or will result in an unneccery heavy function execution (imagine in the useCallback demo, that this function performs an API call, and not just adding numbers. This is something worth preventing).

## To summarise:
**useMemo** keeps a function from being executed again if it didn’t receive a set of parameters that were previously used. It returns the results of a function. Use it when you want to prevent some heavy or costly operations from being called on each render.

**useCallback** keep a function from being re-created again, based on a list of dependencies. It returns the function itself. Use it when you want to propagate it to child components, and prevent from a costly function from re-running.