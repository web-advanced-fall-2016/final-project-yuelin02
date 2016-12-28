const http = require('http');
const express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./db.js');
var fs = require('fs');
var blogs = require('./blogs.json')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/*====================
YOUR CODE
====================*/

app.use(function(req,res,next){
  console.log("received an HTTP Request");
  console.log(`Request method is ${req.method}. it's for path: ${req.path}`);
  next();
})


app.get('/blogs', function(req, res, next) {
  let blogs = db.getBlogs();
  res.json(blogs);
  console.log("app-get the blogs!");
  next();
});

app.get('/blogs/:blog_id', function(req,res,next){
  let id = req.params.blog_id;
  let blog = db.getBlog(id);
  if (blog)
    res.json(blog);
  else
    res.json(`blog with id: ${id} wasn't found!`)
  console.log("app-get the blog");
});

app.post('/addBlog', function(req,res,next){
  console.log(req.body);
  let data = req.body;
  if(data.title) {
    let newBlog = {
      title:data.title,
      id: list.length,
      description: data.description
    };
    blogs.push(newBlog);
    res.json({message: 'success', data: newBlog});
    db.updateList(data);
  }else {
    res.json({message: 'error', data: {}});
  }
});


// app.post('/deleteBlog', function(req,res,next){
//   console.log(req.body);
//   let data = req.body;
//   let deleteItem =req.body.id;
//   // if( data.description) {
//   //     let newItem = {
//   //         description: data.description,
//   //         id: list.length
//   //     };
//   //     list.push(newItem);
//   //     res.json({message: 'success', data: newItem});
//   //     db.updateList(data);
//   // }else {
//   //     res.json({message: 'error', data: {}});
//   // }
//   // console.log(data);
//   let deleted = list.splice(deleteItem, 1);
//
//   db.updateList();
//   console.log(deleted);
// });

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server running and listening at http://localhost:${port}/`);
});
