// Min and Max
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.

function arrayMin(arr) {
    let min = arr[0];
      for (let a of arr){
      if (min > a){
      min = a;
      }
    }
       return (min);
  }
  
  function arrayMax(arr) {
    let max = arr[0] ;
      for (let p of arr){
      if (max < p){
      max = p;
      }
    }
      return (max);
  };
  