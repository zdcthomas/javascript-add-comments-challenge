# JavaScript Add Comments Challenge

## Overview

In this challenge, we're going to build on a common feature of the web: the comment area.

Normally, when you are building a comment form you want to send the data to the server so that the comment can be persisted in a database somewhere.  Since we don't have access to a server in this case, we're just going to bypass that feature.  Instead, we will build a form that uses JavaScript and jQuery to create a new DOM element from the form data and append it to a list of comments.

There are a few different moving parts to this challenge so make sure you're familiar with the following:

* [Basics of jQuery Events][] and
* [Event Handling][], specifically the `submit` event
* Creating DOM elements with the [jQuery() method][]
* [The jQuery val() method][]

If you bind to the `submit` event, you should consider using the [event.preventDefault() method][] provided by jQuery.

All of the HTML and CSS has been written in the `source` directory.  You only need to add your own jQuery-flavored JavaScript.

It's suggested that you read the HTML (and CSS) closely so that you understand the structure of the page.

### Add Comments using jQuery/JS

The desired behavior is shown in the following video: [Add
Comments](https://www.dropbox.com/s/pke5nzba15hof4v/add_comment.mp4?dl=0)

This behavior isn't too exciting, but this is a common pattern (adding new elements to the DOM via a form), and it is important to understand how to make it work with jQuery and JavaScript.

Here is a sequence of events and requirements for this feature:

* When the user clicks on the `New Comment` button, the new comment form should appear.
* When the user enters text into the two fields and presses the `Create Comment` button, a new comment should be created and added to the end of the comment list.
* A new comment should not be empty, i.e. if the user submits the form without entering anything into the text area, an empty comment element should not be created. A user can submit the form without adding in the author's information though.

Make sure to follow the specifications, and remember to take it slow. Verify your assumptions before getting ahead of yourself.

## Resources

* [Basics of jQuery Events][]
* [Event Handling][]
* [jQuery() method][]
* [The jQuery val() method][]
* [event.preventDefault() method][]

[Basics of jQuery Events]: http://learn.jquery.com/events/event-basics/
[Event Handling]: http://learn.jquery.com/events/handling-events/
[jQuery() method]: http://api.jquery.com/jQuery/#jQuery2
[The jQuery val() method]: http://api.jquery.com/val/
[event.preventDefault() method]: http://api.jquery.com/event.preventDefault/

