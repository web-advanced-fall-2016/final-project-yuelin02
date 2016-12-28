let blogs = require('./blogs.json');
let fs = require('fs');
// let item

let db = {
  getBlogs: ()=> {
    console.log("db.getBlogs");
    return blogs;
  },
  getBlog: (id) => {
    for (let blog of blogs) {
      if (blog.id == id) {
        let res = Object.assign({}, blog); // cloning and return the copy of the item
        return res;
      }
    }
    console.log("db.getBlog:" + id);
    return false;
  },
  getBlogContent: (id) => {
        for (let blog of blogs) {
            if (blog.id == id) {
                return { id: blog.id, full_bio: blog.full_bio, excerpt: student.excerpt };
            }
        }
        return false;
    },
  addBlog: (blog) => {
    blog.id = blog.length;
    blogs.push(blog);//Adds new elements to the end of an array, and returns the new length
    db.updateBlogs();//update bloglist
    console.log("db.addBlog:" + blog);
  },
  // deleteBlog:(item) =>{
  //   // item.id = item.length;
  //   taskArray.splice(taskNumber, 1);
  //   // for(let item of list){
  //   //     let
  //   // }
  //   db.updateList();
  //   console.log("db.deleteItem:" + item);
  // },

  updateBlogs: ()=> {
    //update the JSON file
    fs.writeFile('./blogs.json', JSON.stringify(list), (err) => {
      if (err){
        console.log('File not updated');
      }
      console.log('File updated!');
    });
  }
};
module.exports = db;
