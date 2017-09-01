var express = require('express'); //takes string name of module, to get access
// of entire express API

//Create our App
//express is a library we are passing as an function
var app = express();
const PORT = process.env.PORT || 3000;


//This will merge the traffic of https to http because heroku runs on http
app.use(function(req,res,next){
  if(req.headers['x-forwared-proto'] === 'https'){
    //next();
  }else {
  //  res.redirect('http://' + req.hostname + req.url);
    next();
  }
});
//Lets add functionality to express application
app.use(express.static('public'));

//

app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);
});
