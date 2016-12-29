# Final Assignment

## A Personal Travel Blog 

Designed and programmed by Yue

More on front end side

![ScreenShot1](/ScreenShot1.png)



### Features

- Display posts on the client side from server side.
- Dynamically adding new post.



### Further Steps

- Can write new post and save it on the server.
- Complete the Map and About pages, maybe Search.
- Be able to add real pictures and time
- Be able to delete post
- Seperate DESCRIPTION part into different sections like sites, time, itinerary, and add layout
- …...



### How to run the code

Clone or download this folder into your computer.

**On the server side:** 

[Mac] In Terminal, navigate to the folder, enter

```
npm install
```

and then

```
npm start
```

**On the client side:** 

Once the server is running, open web browser, go to http://localhost:3000.

###### 

### API endpoint

The server provides the following API endpoints

| Verb | URL endpoint      | Resource description                     |
| ---- | ----------------- | ---------------------------------------- |
| GET  | /blogs            | get and display the blog lists           |
| GET  | /blogs/`$blog-id` | get full blog content with id=`$item-id` |
| POST | /addblog          | save each new blog page to the server    |

##### /blogs

```
[
   {
     "id":0,
     "title":"What is Lorem Ipsum?",
     "description":"Lorem Ipsum is simply...",
     "postTime":"2016-08-20"
   },
   {
     "id":1,
     "title":"Why do we use it?",
     "description":"It is a long established ...",
     "postTime":"2016-06-17"
   },
   {"id":2,
     "title":"Where does it come from?",
     "description":"Contrary to popular...",
     "postTime":"2016-04-01"
   },
   {
     "id":3,
     "title":"Where can I get some?",
     "description":"There are many ...",
     "postTime":"2015-12-30"
   }
  ...
]
```

##### /blogs/`$blog-id`

```
{
     "id":3,
     "title":"Where can I get some?",
     "description":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
     "postTime":"2015-12-30"
   }
```



## Requirements

Your last assignment is different from your previous assignments. This time you should come up with a proposal on what you want to make. Go back and think about what we discussed in our first session => the reason you are taking this course and what you want to learn from it. Or think how can JavaScript can help your thesis project and try to help your thesis (make an artifact for your thesis / data visualization / documentation website / blog). Teamwork is allowed, in fact you are encouraged to team up (maximum 2 per group. And of course, expectation is higher when doing a team project). Make something nice that you will be proud of. Make something that you will put it on your portfolio, despite how minimal it would be.

You can use any tool/library as long as you properly reference it. There are no instructions or rules on what you have to implement. That said, try to categorize your project in one of the three below categories and do something that at least loosely relates to some of the ideas provided. These are just ideas, not rules or requirements!

#### :one:Backend Focused

##### Some ideas

* Maybe design a RESTful API, create a documentation on the endpoints and services of your application.
* Interface with one or two APIs, do some data processing and analysis.
* Bring in physical computing, use node to connect to an Arduino and process user/environment interactions. Use serialport.
* Dive into databases, connect to postgres, mysql, mongodb, mariadb or … . Look into Mongoose or Sequelize and use them.

#### :two:Frontend Focused

##### Some ideas

- Implement UI elements of your choice, show your JavaScript skills.
- Make a responsive static web page. Make cool and neat interactions.
- Use p5.js/paper.js/snap.svg . 
- Make your own icons and animations.
- Data visualization, use chart.js/THREE.js/WebGL

#### :three:Full Stack

##### Some ideas

- Make something similar to the Todo list. Just give it an actual purpose and use.
- Make a blog for your self and actually host. You will need this one for your thesis! (so make one now yourself).
- Do some tempting with `.jade` or any other tempting engine of your choice with Expressjs.
- Use web sockets (websocket/socket.io) to create realtime user interaction. Shared document?? shared painting ??
- Make a game, multiplayer ??



### Submission Detail

Every person/team should send a proposal to me by Monday Dec. 5th. I will review your proposal and will give you a feedback in a day. I won't change you project, I might only add few things to it, simplify or give your hints on where to start with it.

#### Hard Deadline

December 20th.

##### Submission Requirements

After submitting your proposal, a repository will be created for every person/team. Your final code should be push to the repository before deadline. 

You must write a README.md for your repository, explaining your idea, approach, tools/libraries and … .



### Good luck :fire::fire::fire:

