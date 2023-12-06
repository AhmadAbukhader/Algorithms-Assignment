const recursiveFact = (n)=> {
    if (n==1) return 1;
    return n * recursiveFact(n-1);
}

const iterativeFact = (n) =>{
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    return fact;    
}

function calculateTime(F,n) {
    const start = performance.now();
    F(n);
    const end = performance.now();
    const executionTime = end - start;
  
    console.log(`Execution time: ${executionTime} `);
  }

calculateTime(recursiveFact,5);//Execution time: 0.03709999984130263
calculateTime(iterativeFact,5);//Execution time: 0.03640000009909272 

calculateTime(recursiveFact,10); //Execution time: 0.04150000028312206 
calculateTime(iterativeFact,10); //Execution time: 0.033100000116974115 

calculateTime(recursiveFact,20); //Execution time: 0.04210000019520521 
calculateTime(iterativeFact,20); //Execution time: 0.041600000113248825 

calculateTime(recursiveFact,1000000); //RangeError: Maximum call stack size exceeded (stack overflow)
calculateTime(iterativeFact,1000000);  //Execution time: 6.466699999757111 
