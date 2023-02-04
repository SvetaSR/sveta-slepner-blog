---
title: The Complete Guide to Front-end Developer Interviews
timeToRead: 6
date: 2021-01-02T15:04:10.000Z
featuredimage: https://res.cloudinary.com/dq6tqnvbh/image/upload/w_260,h_400,q_auto,g_face,c_thumb,z_0.1/v1675543987/blog/1_2Acp2-iKTTMeBiDJehnYKA.jpg
description: Interviews are hard, especially technical interviews where you’re expected to think, solve, and analyze all while the interviewer stares at you. But what people don’t realize is that being interviewed is basically just another skill, and skills can be honed with the right information and practice.
tags:
  - javascript
  - frontend development
  - interview tips
  - react
slug: 2021-01-02-the-complete-guide-to-front-end-developer-interviews
canonical: https://medium.com/gitconnected/the-complete-guide-to-front-end-developer-interviews-e2f0f611c91e
---
![chemex](https://res.cloudinary.com/dq6tqnvbh/image/upload/w_900,q_auto/v1675543987/blog/1_2Acp2-iKTTMeBiDJehnYKA.jpg)

Interviews are hard, especially technical interviews where you’re expected to think, solve, and analyze all while the interviewer stares at you. But what people don’t realize is that being interviewed is basically just another skill, and skills can be honed with the right information and practice.

So if you’re on your job hunt as a Front-end developer right now, you’ve come to the right article, as this one will tell you all you need to know to be prepared!

About a year and a half ago, the company I used to work for was shut down, and all 100 employees found themselves seeking a new place. I worked there for more than 9 years, so starting a job hunt was unsettling. I knew that my JS skills are (probably) fine, but I didn’t know what to expect during technical interviews.

So based on my own experience, the experiences of my colleagues who shared the same fate, as well as my current practice as an interviewer myself, I decided to write down this article. It is my hope that it will help you prepare, and take away some of the concerns you might have about what awaits you.

## What Kind of Questions Should You Expect?
Each company has its own interviewing strategy, but in the end, most of them fall under the same categories, and it doesn’t matter if you’re interviewing to GAFAM or a small tech company. These are the most common topics you’ll be interviewed about:

## Javascript Questions
Well, as a front-end developer you obviously should know Javascript already, but you’re also expected to understand how it works and behaves. It doesn’t matter if in your day-to-day you work with Angular/React/Vue, you are expected to know the basics.

**Some example questions could be:**
A. Explain what the event loop is
B. Explain what a Promise is
C. Closure and Context questions (what is “this”)
D. What is the difference between an arrow function and a regular function?
E. Implement Array.prototype.map/reduce
F. What is a debounce/throttle function? Implement them.
G. Javascript prototypal inheritance questions

**Some helpful resources:**\
[5 Typical JavaScript Interview Exercises](https://www.sitepoint.com/5-typical-javascript-interview-exercises/)\
[Learning Advanced JavaScript](https://johnresig.com/apps/learn/)\
[Javascript Garden](http://bonsaiden.github.io/JavaScript-Garden/)\
[Eloquent Javascript](https://eloquentjavascript.net/)

## Algorithms
It is true that it’s unlikely you’ll ever need to traverse a binary tree while working as a Front-end developer (there are exceptions of course). But nonetheless, algorithm questions are very popular in interviews (especially if your goal is to work at GAFAM).

1\. **Array or Object related questions**

Example:\
1\. Reverse a string\
2\. Write a function that checks if a word is a palindrome\
3\. Given a string of characters, return the character that appears the most often.

2\. **BFS/DFS questions (traversing a tree)**

Example:\
1\. Write a function that solves a maze (the maze is a multidimensional array- with values of 0 — wall, 1 — floor, 2 — exit). The function receives a start coordinate and should return whether you can get out of the maze.

3\. **Linked List**

Example:\
1\. Reverse a linked list\
2\. Find the nth node from the end of the linked list

You should also probably refresh your knowledge about the difference between Recursion and Iteration and about Time and Space complexity.

**Some helpful resources:**\
[40 Problems, Solutions, and Explanations](https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038)\
[JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/) — (Note: This one is no doubt the best Udemy course ever created, especially if you don’t have a degree in Computer Sciences, or if you need a refresher about algorithms and data structures).\
[Codewars](https://www.codewars.com/) (or any other equivalent site, like HackerRank or LeetCode).

## What To Pay Attention To When Solving an Algorithm Question
A. Don’t rush to solve, it’s ok to ask for a few minutes to think.

B. When you do start solving, it is highly recommended that you talk about what you’re doing, even if you’re not sure about your thoughts. The examiner usually looks to understand your process of thinking. It is not always necessary to reach a perfect and working solution. If you’re not comfortable talking aloud, or just not used to it, practice at home by solving some example questions.

C. If you can, you should first write your plan of action in words or pseudo-code. This will show the interviewer that you do not rush to solve things and that you can plan.

D. If you get stuck at the beginning, don’t panic! Start with the simple things. Think about input and output. Solve edge cases.

E. Pay attention to the code effectiveness of your solution. If you understand that the complexity is not really good, say it out loud, and try together with the examiner to reach a better solution.

F. It’s totally fine to ask questions. A good examiner will try to help you reach a solution.

G. You’re usually expected to solve these type of questions on a whiteboard/piece of paper. Since it’s not how we usually write code, you may find it’s harder to think like this. This is again something that worth practicing beforehand!

## React/Angular/Vue (Home) Assignment
Some places will require you to build some sort of a simple app using a specific framework/library. Depending on the company, it can either be a home assignment, or you’ll have to do so while in the companies office. If it’s the latter, bring your own laptop, so you can use your own familair IDE and operating system.

In most cases, you’ll be given some sort of public API and be required to work with it in some way.

This is done to see the way the candidate writes actual code, so here are some things to pay attention to:

A. Keep your code clean. Use indentation, provide meaningful variable names, remove unused code.

B. Use best practices of the given framework.

C. Think about things like:\
1\. Debounce requests sent to the server.\
2\. Prevent server calls when < 3 characters are typed.\
3\. Take care of edge cases like missing information from the API.

D. Your CSS skills are important too! Be comfortable with using Flexbox (don’t use float to align containers 😉).

## Logic Questions
I admit. I really dislike this type of question myself. I don’t understand how they can help anyone evaluate your value as a developer. But some companies still ask them…
You can’t really prepare for these ones (maybe read about some common questions?), but just know that they do exist.

Example:
You are standing in a room with three light switches. The switches all correspond to three different light bulbs in a nearby room that you cannot see into, but you can go in one time only. With all the light switches starting in the off position, how can you find out which switch connects to which light bulb?

## Talking About Yourself
Last but not least, there’s a part where you need to talk about your past experience.

If you’re applying to your first job as a developer, make sure to have some project you’re passionate about or maybe contribute to some open-source library.

Be ready to discuss the nitty-gritty. For example, why did you choose library A instead of B?

If this isn’t your first rodeo, you will need to talk about a feature or product that you were responsible for at work. **In details.** The Interviewer would also likely want to hear about your personal contribution to the team.

You should practice this conversation with a friend so that you have feedback! It would be so much easier for you if you come prepared.

## And Most Importantly: A Failed Interview does NOT Define You!
Remember, a failed interview doesn’t say anything about how good a developer you are. As I mentioned in the beginning, interviewing is a skill of its own. In your day-to-day life, you have StackOverflow and co-workers at your disposal, and you’re not expected to write code on a piece of paper. Interviews are simply not something you’re used to doing, so you need to try it a few times to grasp how it’s done. Prepare and study, but don’t be hard on yourself if you don’t pass. Try to learn something from each interview, and eventually, you will succeed!

Good luck! :)

Cover photo by [Christina @ wocintechchat.com](https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/interview?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)