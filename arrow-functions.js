var names = ['Ahmad','Adeel','Julie'];

names.forEach(function(name){
  console.log('forEach: ',name);
});
names.forEach((name) => {
  console.log('arrowFunc: ',name);
  console.log('something');
});
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Ahmad'));

var person = {
  name: 'Andrew',
  greet: function() {
      names.forEach((name) => {
        console.log(this.name + ' says hi to ' + name)
      });
  }
};
person.greet();

function add(a,b){
  return a +b;
}
console.log(add(1,4));
console.log(add(11,24));

var addStatement = (a,b) =>{
  return a + b;
}
console.log(addStatement(10,10));

var addExpression = (a,b) => a + b;
console.log(addExpression(12,12))
