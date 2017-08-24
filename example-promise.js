/* This is just a general case we would write code

function getTempCallBack(location, callBack) {
  callBack(undefined,78);
  callBack("City not found");
}

getTempCallBack('Philadelphia',function(err,temp){
  if(err){
    console.log('error',err);
  } else {
    console.log('success',temp);
  }
});
*/

//We are using promise feature of the JS
//'resolve' and 'reject' and 'then' are built-in functions
function getTempPromise(location) {
  return new Promise(function (resolve,reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    },1000);
  });
}

getTempPromise('Philadelphia').then(function(temp){
  console.log('Promise success',temp);
}, function(err) {
  console.log('Promise error',err);
})



//addPromise
function addPromise(a,b){
    return new Promise(function(resolve,reject){
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('a and b needs to be number');
      }
  });
}

addPromise(2,3).then(function(sum){
  console.log('Success',sum);
},function(err) {
  console.log('Error',err);
});

addPromise('Andrew',9).then(function(sum){
  console.log('This should not show up',);
},function(err) {
  console.log('This should appear,',err);
});
