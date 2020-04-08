
/////////////////////////////////////////////////connections
var express = require("express");
const path = require('path');
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
/////////////////////////////////////////////////routes

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get('/jake', (req,res) => {
    res.sendFile(path.join(__dirname, "/views/portfolio.html"));
});
  


/////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
  