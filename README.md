# Algorithms-Assignment

## Execution Time Results
#### Recursive Fact
When N = 5 Execution time: 0.003 ms 
When	N = 10	Execution time: 0.006 ms 
When	N = 20	Execution time: 0.012 ms   
When	N = 1000000	Range Error: Maximum call stack size exceeded

#### Iterative Fact
When	N = 5	Execution time: 0.002 ms 
When	N = 10	Execution time: 0.004 ms 
When	N = 20	Execution time: 0.008 ms 
When	N = 1000000	Execution time: 6.466 ms 

## Stack Overflow Observations
Attempting to calculate the factorial for n = 1000000 using the recursive function resulted in a stack overflow issue,
This is because the recursive nature of the function, leading to a lot of function calls and filling up the call stack,
In contrast, the iterative function handled this large value of n without getting the stack overflow issues.

## Discussion
###### This table highlight on two important things:
* The time of execution using iterative is less than recursive and the gap is getting bigger when you gives it bigger number
* There is a limit in the recursive function due to the stack overflow issue

## Conclusion
In this situation the iterative is better, faster and more efficient, but the recursive could be better in other cases  
