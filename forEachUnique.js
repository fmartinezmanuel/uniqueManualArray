var arr = [9, 2, 7, 4, 5,5];
var numCallbackRuns = 0;
var equalsFinded = 0;
var storeReturn = [];

arr.forEach(function(value, index){
  //console.log('Index: '+index+' Value is: '+value);
  numCallbackRuns++;

  arr.forEach(function(valueTwo, index){
    //console.log('Second value => '+valueTwo);
    if(value == valueTwo){
      console.log('Compare first: '+value+'=='+valueTwo);
      equalsFinded++;
    }
  });
  //-- Main level
  console.log('Equals value:'+equalsFinded);
  if(equalsFinded <= 1){
    console.log('Pushing value: '+value);
    storeReturn.push(value);
    equalsFinded = 0;
  }
});

console.log(storeReturn);
