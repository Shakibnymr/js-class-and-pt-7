/*
1. show output from: 1-50;
2. if the number is divisible by 3 then show 'foo' instead of the number; 
3. if the number is divisible by 5 then show 'bar' instead of the number; 
3. if the number is divisible by 3 and 5 then show 'foobar' instead of the number; 
*/ 

for(let i = 1; i <= 50; i++){
    if (i%5 ===0 && i%3 ===0){
        console.log('foobar');
    }
   
   
    else if (i%5 ===0){
        console.log('bar');
    }
    else  if(i%3 ===0){
        console.log('foo');
    }
    else{
        console.log(i);
    }
    // if(i%5 ===0){
    //     console.log('bar');
    // }
    // if(i%3 ===0 && i%5 ===0){
    //     console.log('foobar');
    // }
    // console.log(i);
}