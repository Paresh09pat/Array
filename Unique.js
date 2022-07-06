// Unique Color Shirt
// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.
// Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, 
// he removes all the shirt of that color from his wardrobe. Now, he wants to know how many Munique color shirts are left in the wardrobe. 
// Prepbuddy wants you to find M.


function Unique_Shirts (arr,N) {

    let count = 0;
   for (let i=0; i<N; i++){
        let a = 0;
       for (let j=0; j<N; j++){
           
           if (arr[i] == arr[j]){
               a++;
           }
           
       }
       if (a == 1){
           count++;
       }
   }
   return (count);
   }

