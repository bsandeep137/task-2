const { static } = require('express');
const express = require('express');
 
const app = express();
app.use(express.static(__dirname+"/frontend"));

app.get("/google", function(req, res){
    let reps=__dirname+"/frontend/index.html"
    res.sendFile(reps);
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
