var ar = [1,2,2,3,4,5,5,5,6,6,7];

function manualDistinct(ar){
  var store = [];
  if(ar != null && Array.isArray(ar)){

    for(i=0;i<ar.length;i++){
      var count = true;
      var isRepeated = 0;
      for(j=0;j<ar.length;j++){
        //Verify if is repeated
          if(ar[i] == ar[j]){
            isRepeated++;
            console.log(isRepeated);
          }
      }//second for ends..

      if(isRepeated == 1){
        store.push(ar[i]);
        console.log('Saved: '+store);
      }
      console.log('-----------End---------');

    }
  }else{
    //Protect function if is different than array
    console.log('Parameter need it as Array');
  }

}// distinct ends..

manualDistinct(ar);

//output will be like: [1,3,4,7]
