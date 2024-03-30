# NodeJS Timers 

Different types of Timers in NodeJS   

* setTimeout 
* setInterval 
* setImmediate 
* clearTimeout 
* clearInterval 
* clearImmediate  

## setTimeout   

* Used to execute block of code after interval of time. 
* The amout of time given to pause is the minimum amount of time, there is no guarantee that the function gets executed exactly after the given time interval. 

## clearTimeout  

* Clears the timeout object created by setTimeout function
* It cancels the execution of function that is scheduled using setTimeout function  

## SetInterval 

* Used to repeatedly execute a block of code at regular intervals / fixed delay  
* The delay may not be always fixed, the time interval value given is the minimum amout of delay 

## clearInterval  

* Clears the timer object created by setInterval function 
* It cancels the execution of the callback function scheduled using setInterval function

## setImmediate 

* Similar to setTimeout with 0 delay 
* Executes the callback function immediately 

## clearImmediate  

* Clears the timer object created by setImmediate function 
* It cancels the callback function scheduled using setImmediate function

Above callback functions are executed at the end of the current event loop. 

## process.nextTick   

* Technically this is not part of the nodeJS timers. However it is mentioned here to explain the priority of the execution. 
* Everytime event loop takes a full trip, it is called as TICK. 
* The callback function is invoked / executed at the end of the current operation before the next event loop starts. 

## Execution priorities  

1. `process.nextTick` -> executed immediately after the current operation completes even before event loop moves to the next cycle 
2. `promises (micro-tasks)` -> executed after the completion of the current task / operation and before the next iteration of the event loop  
3. `callbacks` -> executed after the promises, and before the other event loop events (given below)
4. `setImmediate` -> executed in the next iteration of the event loop after the current cycle completes  
5. `setTimeout` -> executed in the next iteration of the event loop after the current cycle completes
6. `setInterval` -> executed in the next iteration of the event loop after the current cycle completes 


