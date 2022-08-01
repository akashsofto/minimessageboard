const messages= [
    {
      text:'Hi there!',
      user:'Do you even exist?',
      added:new Date()
    },
    {
      text:'Hello hello ji!',
      user:'anjali',
      added: new Date()
    },
    {
      text:'where is he?',
      user:'ramesh',
      added:new Date()
    },
    {
      text:'new movie',
      user:'Golu',
      added:new Date()
    }
  ];

const express = require("express");
const path = require("path");
const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  response.render(__dirname + "/public/index.html");
});


  
  app.get('/new-message',function(req,res){
    res.json(messages)
  });
  
  app.post('/new', function(req,res){
    messages.push({text: req.body.msg, user: req.body.username, added:new Date() });
    console.log(messages);
    res.redirect("index.html")
  })




app.listen(3500, () => {
  console.log("server is listening at 6000");
});
