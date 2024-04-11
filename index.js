const express=require("express")
require('dotenv').config()

const app=express()
const port= process.env.PORT || 4000

const github={
    "login": "prachiii30",
    "id": 112465586,
    "node_id": "U_kgDOBrQWsg",
    "avatar_url": "https://avatars.githubusercontent.com/u/112465586?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/prachiii30",
    "html_url": "https://github.com/prachiii30",
    "followers_url": "https://api.github.com/users/prachiii30/followers",
    "following_url": "https://api.github.com/users/prachiii30/following{/other_user}",
    "gists_url": "https://api.github.com/users/prachiii30/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/prachiii30/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/prachiii30/subscriptions",
    "organizations_url": "https://api.github.com/users/prachiii30/orgs",
    "repos_url": "https://api.github.com/users/prachiii30/repos",
    "events_url": "https://api.github.com/users/prachiii30/events{/privacy}",
    "received_events_url": "https://api.github.com/users/prachiii30/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 27,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2022-08-30T06:29:50Z",
    "updated_at": "2024-04-08T12:36:31Z"
    }
app.get("/github",(req,res)=>{
    res.json(github)
})

app.get("/",(req,res)=>{
    res.send("hello you made your server")
})

app.get("/twitter",(req,res)=>{
    res.send("hello you made your server this is twitter")
})
app.get("/login",(req,res)=>{
   res.send(`<h1>please log in</h1>`)
})
app.get("/youtube",(req,res)=>{
    res.send("youtube")
})
app.listen(process.env.PORT,()=>{
    console.log("port listening successfully",port)
})