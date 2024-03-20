# 30-days-challenge
30 days challenge containing various topics. 

## NodeJs 

1. **Event Loop**  

2. **package.json**  
   * Simplied way to manage the project metadata and dependencies. 
   * Project name, entry point, dependencies, version, scripts, and dependencies. 

3. **package-lock.json**  
   * Lock the dependencies to specific versions, ensuring the consistent installation across different environment. 
   * Gurantees reproducibility by making sure specif version of the package is installed. 

4. **Parallel execution**   
Nodejs is a single threaded application. However there are ways we can make use of the multiple threads / CPU cores to effectively utilize the available resources. 

   a. [Child Processes](https://github.com/kk2491/30-days-revision-challenge/blob/main/nodejs-parallel-execution/child-processes/REAMDE.md) 
   
   b. [Clusters](https://github.com/kk2491/30-days-revision-challenge/blob/main/nodejs-parallel-execution/clusters/README.md)

   For now, only the child processe and Clusters are covered, other methods will be captured in the later part. 

5. **Worker Threads**  
Similar to child processes, worker threads used to 


6. **Closures**     
   * The inner function retains the access to the paramters of the outer function, even though the outer function execution is completed.  
   * During normal function the variables / parameters are removed as soon as the function returns. However in case of closure, along with the function the parameters from the outer function is stored in the heap. Hence accessible for longer period of time.   

   Interview question  

   ```
   for (let/var i = 0; i < 3; i++) {
    const log = function () {
      console.log("i : ", i);
      return;
    };

    setTimeout(log, 1000);
   }
   ```
   
   In the above example, when `var` is used, the variable gets hoisted to the global scope. Hence the value of the `i` becomes 3.   
   However when `let` is used, in each loop `i` the value of `i` is retained. 

5. **Middleware**  
   A request handler with access to the application's request-response cycle.  
   * Logging 
   * Authentication
   * Rate limiting 

6. **Rate Limiting**  - TODO 
   * express-rate-limit 
   * cloud armour 

7. **Design Patterns** - TODO  

8. **OOP** - TODO     
   a. Abstraction
   b. Encapsulation
   c. Inheritance
   d. Polymorphism 

## Javascript 

1. **Currying**  
Function with multiple parameters are transformed into sequence of functions with single parameter in each function.  
   * Improves modularity 
   * Improves readability 
   * Improves code reusability 
   * Higher order function creation 


1. **Throttling**  

2. **Debouncing**    

## MongoDB 

1. **Aggregation**   

2. **Join** - WIP  
   * createView in MongoDB    
       Mongodb provides `createView` to perform joining of 2 collections, you can find the reference [here](https://www.mongodb.com/docs/manual/core/views/join-collections-with-view/#:~:text=You%20can%20use%20%24lookup%20to,construct%20or%20maintain%20complex%20pipelines.)

   * Equivalent operation in Mongoose - TODO  

   
