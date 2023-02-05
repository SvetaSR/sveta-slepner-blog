---
title: Why Web Accessibility is Far More Important Than You Think
timeToRead: 7
date: 2019-06-02T15:04:10.000Z
featuredimage: https://res.cloudinary.com/dq6tqnvbh/image/upload/w_900,q_auto/v1675625482/blog/1_r6Gsvcw8pDmAL5KvZkartA.jpg
description: Web Accessibility is a relatively new topic web developers and commercial websites have to tackle. It takes effort and might even be a costly process, but the advantages of a web-accessible page are far greater than you would think (and not just because it’s the morally right thing to do, or because of accessibility laws). Let’s dig into these benefits and also learn some ways to make your website a better place to visit.
tags:
  - accessibility
  - web development
  - wcag
slug: 2019-06-02-why-web-accessibility-is-far-more-important-than-you-think
canonical: https://medium.com/swlh/2019-06-02-why-web-accessibility-is-far-more-important-than-you-think-831d9bfdf9af
---
![chemex](https://res.cloudinary.com/dq6tqnvbh/image/upload/w_900,q_auto/v1675625482/blog/1_r6Gsvcw8pDmAL5KvZkartA.jpg)

Web Accessibility is a relatively new topic web developers and commercial websites have to tackle. It takes effort and might even be a costly process, but the advantages of a web-accessible page are far greater than you would think (and not just because it’s the morally right thing to do, or because of accessibility laws). Let’s dig into these benefits and also learn some ways to make your website a better place to visit.

The first time I came face to face with web accessibility was a few years ago, when I was working for a SaaS company called Webcollage, which provided a rich content distribution solutions for vendors. I returned to the office from a nice summer vacation in Europe and thought I was going to have a quiet “the day after a vacation” day, just sorting my inbox and catching up. Boy was I wrong. Apparently, the day before, one of the company’s major partners sent a requirement to now make our product accessible. This partner was kind enough to provide a list of 98 accessibility issues we had to fix in order to meet the required standard.

And let me tell you, this was not easy. The real problem is that web accessibility is a huge topic. And since, as said, it’s relatively new, most of the time the issues you stumble upon are not something you can find a solution to on Stack Overflow. The longer you dig into it, you figure out just HOW MANY people it actually affects, how there are disabilities you never even thought about.

## So how many people can’t use your site?
When ignoring web accessibility you’re potentially alienating **one billion people**, or **15% of the world’s population**, who experience some form of disability, whether auditory, cognitive, neurological, physical or visual. This includes your grandparents who no longer can read the tiny font your site use or maybe hear the video’s audio. Maybe a girl who went on a ski trip, broke her arm, and now can’t use a mouse for a month. Even a perfectly healthy guy watching a video in the subway could use accessibility aid. Let’s say the train is so loud, he can’t hear your video properly (or maybe he forgot his headphones, so being polite he’s watching the video on mute).

By making your site accessible, you automatically **increase the target audience** and add new groups for which it did not provide any service before. Subsequently, you get **increased traffic** and thus **the number of conversions increases** as well.

Moreover, making these adjustments usually means it makes the site simpler and easier to use for the general public as well. As a result, users often tend to make more extensive use of the site, which leads to more conversions.

It can even make search engines robots happier! A simpler, better-structured site means search engines will treat your site better as they can get more information. Better SEO means more traffic from search engines, and again -> More users -> More conversions.

## So why don’t all websites just fix their code?
As my teammates and I experienced first hand, we had to re-learn how to build certain parts of our product to make them fit the Web Content Accessibility Guidelines (WCAG). We also, for the first time, experienced assistive tools in order to test the new accessibility features more authentically (And trust me, when you hear the screen reader yell the 350 characters of an image URL because it didn’t find a description parameter on the image, you start to understand what a cluttered mess a typical website might feel like for a visually impaired person).

Also, remember that fixing the product isn’t enough. We now had to take accessibility into account for each new feature, which takes more development time for us and added time for the QA team to test it.

Making a site accessible, like everything else, has a price. It requires substantial changes in the structure of the site, from all aspects — design, programming, and even content. This means many hours of work, which cost money. And in the commercial market, people are in no hurry to spend time and money to change “what’s already working when no one’s complaining”.

And while more and more countries are adding laws to ensure the web is a nicer place to **all people**, even if there is no such law in your country, you might consider the benefits stated above, even if it appears costly at first.

## Where do I begin?
So let’s say you want to add accessibility aid to your site. “Where do I begin?”, you’re probably asking. First, there are tools online that can analyze your website for accessibility issues, such as [this one](https://wave.webaim.org/). Also, there’s an official guideline I mentioned before called “Web Content Accessibility Guidelines” or in short **“WCAG”**, which you access from [here](https://www.w3.org/WAI/WCAG21/quickref/). It categorizes the requirements into 3 levels, ranging from A — the lowest to AAA the strictest and most accessible. While it’s quite informative, it doesn’t always provide code examples, so sometimes you’ll have to figure it out.

However, here are some points to get you started:

1. **Add Closed Captions to your videos** — Is there a narration or people talking in your videos? Provide a closed caption file to complement the spoken text.
2. **Never ever use `<table>` tags for anything else then, well, tables** — If you need to show a comparison between data, then sure, go ahead (but [read how](https://www.w3.org/WAI/tutorials/tables/) to implement tables correctly to make it easier for screen readers to read the data off it). This is obviously the correct practice anyhow (for years now…), so then again, if you did put things into tables just out of convenience, now you’ll have the chance to do things right!

3. **Use headers correctly** — There’s a reason why there are 6 different header tags! While it doesn’t really matter for the average user, it’s really important for screen readers. When used correctly, the screen reader will be able to easily map interest spots in the page for the user. (And it’s also better for SEO!)
4. **Tab navigation** — Some users can’t use a mouse, such as the visually impaired, or people with motoric disabilities. Make sure your site can be navigated using the Tab key, and links and buttons activated using the Enter keys. Also, active elements should be marked using a distinct color outline. Modern browsers do it for you (for the most part), but sometimes developers disable this CSS style because it appears on any focus event.
5. **Add an “alt” parameter to images** — If you don’t explain what’s in the image, visually impaired people have no way of telling what information you’re trying to convey. Some images are fine with an empty alt, depending on the situation, but please add it to all of your images nonetheless (Use [this guide](https://webaim.org/techniques/alttext/) to help you out). What happens to images without an “alt”? The screen reader will read the image’s URL instead. NOT FUN.
6. **Present a way to quickly pause videos and animations** — People with Epilepsy need a fast way to close any moving animation/video that pops up to the screen. For example, if you trigger an overlay with a video, add an option to close it with the ESC key.
7. **Make sure the color contrast between a text and its background is high enough** — Don’t put pink text over a red background element. It’s actually an inconvenience even for people with perfectly fine eyesight but for people with a visual disability its a real struggle. You can check the color contrast rate using [this tool](https://webaim.org/resources/contrastchecker/).
8. **Use buttons, not divs that simulate buttons** — There’s really no real reason not to use a button when you need a button (other than it takes a few more styles to make it look the way you want). But if you do, please make sure that:
<ol type="A">
  <li>You use an aria attribute to state that this div is used as a button (role=” button”)</li>
  <li>Make sure you can activate it using key presses, and not just mouse clicks.</li>
</ol>
<br/>

9. **Learn about Aria attributes** — Aria attributes are part of the Accessibility API available in all modern browsers, which allow assistive technologies to better understand the elements that reside in your page. For example, do you need to inform the user that an error occurred? Without the correct aria attribute, a screen reader won’t be able to detect that a new message popped up.
10. **Can color blind users see your images clearly?** — It’s a bad idea to put text and numbers in images, which are the main cause of problems for people with color blindness. However, if you do, and you want to understand the problematic parts of the image, or even provide an alternative image (with no effort!), you can use [some out of the box tools](https://cloudinary.com/documentation/image_transformations#colorblind_accessibility_effects), from an asset management company called Cloudinary (Disclaimer: I work there! :)).

To conclude, making your site accessible is not a simple task. It takes some thought, time and even money. However, your benefit from it is far greater than it looks on a first glance. Take your time, but do this change, to make the web a better place.