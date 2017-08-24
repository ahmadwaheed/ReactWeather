var express = require('express'); //takes string name of module, to get access
// of entire express API

//Create our App
//express is a library we are passing as an function
var app = express();

//Lets add functionality to express application
app.use(express.static('public'));

app.listen(3000,function(){
  console.log('Express server is up on port 3000')
});
