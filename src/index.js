// all import hear 

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/js/dist/modal.js"
import "./index.css"
import "boxicons/css/boxicons.min.css"
import "font-awesome/css/font-awesome.min.css"
import axios from "axios"
import Post from "./components/Post"

// function call
document.addEventListener('DOMContentLoaded', getpost);

// add post 
document.getElementById('add_new_post').addEventListener('submit', creatNewPost);

// get posts

function getpost(){axios.get('http://localhost:5050/posts').then(res =>{Post.showPost(res.data)})};

function creatNewPost(){
    axios('http://localhost:5050/posts').then(res =>{
        
    });
}

