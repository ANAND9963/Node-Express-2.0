

const bodyparser = require("body-parser");

const express = require("express");

const server = express();

const STATUS_USER_ERROR = 422

server.use(bodyparser.json())

let posts = [
    {title : "React",content:"we have done two projects"},
    {title : "Node",content:"we have done one project"}
];

const getAllPosts =(req, res) => {
    return res.status(200).json(posts);
}

const getPostById =(req,res) => {
    const {id} = req.params;
    const post = posts[id];
    return res.status(200).json(post);
}

const validateData = (req, res, next) => {
    
    const {title , content } = req.body;
    if(title === undefined || title.length === 0){
        return res.status(STATUS_USER_ERROR).send("please send a valid title name for the post");
    }

    if(content === undefined || content.length === 0){
        return res.status(STATUS_USER_ERROR).send("please send a valid content  for the post");
    }

    posts.filter((item, index) => item.title === title)

    if(posts.length != 0){
        return res.status(422).send("Title already exist");
    }

    req.post = {title , content};
    next();
}

const createPost = (req, res) => {
    const {post } = req;

    posts.push(post);

    return res.status(202).json({success : "True" , postID : posts.length -1})
}

const updatePost = (req, res) => {
    const {id } = req.params;
    const {title , content } = req.body;
    const postToEdit = posts[id];
    postToEdit.title = title;
    postToEdit.content = content;

    res.status(200).json({success:true , message:"updated by Id" });
}

const deletebyId = (req,res) => {
    const {id } = req.params;
 
    posts=posts.filter(( index) => index != id)

    res.status(200).json({message:"deleted successfully" });
}



server.get("/",(req, res)=>{

    return res.status(200).send("hurray");

})

server.get("/post",getAllPosts);
server.get("/post/:id",getPostById);

server.post("/post",validateData,createPost);

server.put("/post/:id",validateData,updatePost);

server.delete("/post/:id", deletebyId);

   


module.exports = { posts ,server};

