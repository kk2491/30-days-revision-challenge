# 30-days-challenge
30 days challenge containing various topics. 

## NodeJs 

1. **What is NodeJS**   
   Free, open source, cross platform Javascript run time built on Chrome's Javascript V8 engine. Helps create Web services, scripts etc seamlessly.   

2. **Why NodeJS is asynchronous**  
   * Single threaded - handles one task at a time, asynchronous behavior allows nodeJS to efficiently use the system resources.  
   * Efficiency for I/O bound tasks - database operations and network operations 
   * Scalability and Concurrency - handle large number of concurrent requests 

3. **Event Loop**   
   * Event loop is a feature that allows to NodeJS to perform non blocking I/O operations despite the fact that the Javascript is single threaded.   
   * NodeJS single threaded application, whenever a function is called it is added to the call stack. 
   * If the function contains a callback function, once the function execution is completed callback is added to the callback queue.  
   * It is a process, where NodeJS continuously monitors the callstack, if the callstack is empty it takes the first function from the callback queue, and pushes to the callstack.   

4. **package.json**  
   * Simplied way to manage the project metadata and dependencies. 
   * Project name, entry point, dependencies, version, scripts, and dependencies. 

5. **package-lock.json**  
   * Lock the dependencies to specific versions, ensuring the consistent installation across different environment. 
   * Gurantees reproducibility by making sure specif version of the package is installed. 

6. **Timers and Execution Priority**  
   Examples can be found in [nodejs-timers](https://github.com/kk2491/30-days-revision-challenge/blob/main/nodejs-timers/)

7. **Parallel execution**   
   Nodejs is a single threaded application. However there are ways we can make use of the multiple threads / CPU cores to effectively utilize the available resources. 

   a. [Child Processes](https://github.com/kk2491/30-days-revision-challenge/blob/main/nodejs-parallel-execution/child-processes/REAMDE.md) 
   
   b. [Clusters](https://github.com/kk2491/30-days-revision-challenge/blob/main/nodejs-parallel-execution/clusters/README.md)

   For now, only the child processe and Clusters are covered, other methods will be captured in the later part. 

8. **Worker Threads**   
   Similar to child processes, worker threads used to 

9.  **Closures**     
   * The inner function retains the access to the paramters of the outer function, even though the outer function execution is completed.  
   * During normal function the variables / parameters are removed as soon as the function returns. However in case of closure, along with the function the parameters from the outer function is stored in the heap. Hence accessible for longer period of time.   

   **Important question**   

   ```
   for (let var i = 0; i < 3; i++) {
    const log = function () {
      console.log("i : ", i);
      return;
    };

    setTimeout(log, 1000);
   }
   ```
   
   In the above example, when `var` is used, the variable gets hoisted to the global scope. Hence the value of the `i` becomes 3.   
   However when `let` is used, in each loop `i` the value of `i` is retained. 

10. **Event Emitter** and **Event Listeners**   
   **Event Emitter** - Fundamental concept and built-in module in NodeJS that facilitates event-driven programming. It allows objects to emit named events asynchronously, and register functions to the event which will be called once the named events are emitted. 
   **Event Listeners** - Also known as event handlers or subscribers. Functions that are registered with an event to respond to specific events when they occur. 

11. **Buffers**   
   * Small area in the memory that NodeJS maintains during the run time to process the stream of data.    
   * NodeJS can not control the pace at which data arrives at the stream. 
   * It can only decide when is the right time to send the data for processing. 
   * Example of roller coaster.
   * Example : streaming video 

12. **Streams**   
   * Sequence of data that is being transferred from one point to another. 
   * Example : stream of data from one computer to another, stream of data from one location to another in the same computer, youtube etc
   * Works with chunks of data instead of waiting for the whole data. 
   * Built-in module inherits from event emitter class. 

13. **Middleware**  
   A request handler with access to the application's request-response cycle.  
   * Logging 
   * Authentication
   * Rate limiting 

14. **Rate Limiting**  - TODO 
   * express-rate-limit 
   * cloud armour 

15. **Design Patterns** - TODO  

16. **OOP** - TODO     
   a. Abstraction
   b. Encapsulation
   c. Inheritance
   d. Polymorphism 

## Javascript 

1. **JS Context**  

2. **Currying**  
   Function with multiple parameters are transformed into sequence of functions with single parameter in each function.  
   * Improves modularity 
   * Improves readability 
   * Improves code reusability 
   * Higher order function creation 

3. **Throttling**  
   * Technique that allows to control the rate of execution of a function. Or the function is not called more than one time during the given time interval.  
   * This helps to improve the performance of the website if the function is complex or involves API calls etc. 
   * Helpful in use cases such as window resize, auto-fill etc.   
   * Starts the execution of a function, if the function is invoked again within the given interval function would not be executed. If the time interval exceeds the function gets executed.  

4. **Debouncing**    
   * Technique used to improve the performance of the webpage by controlling the time at which the function should be executed.
   * Delays the execution of a function. 
   * This helps in improve the performance of the website by controlling the repetitive execution of the function. 
   * Helpful in use cases such as even handling button, resize, scrolling etc.   

## ExpressJS 

1. **What is expressJS?**   
   * Flexible nodeJS web application framework that provides a set of features for web and mobile applications. 
   * Framework that works on top of the NodeJS, to simplify the API development and to add additional features. 
   * Makes it easier to organize the application using routing and middleware. 

## MongoDB 

1. **Aggregation**   

2. **Join** - WIP  
   * createView in MongoDB    
       Mongodb provides `createView` to perform joining of 2 collections, you can find the reference [here](https://www.mongodb.com/docs/manual/core/views/join-collections-with-view/#:~:text=You%20can%20use%20%24lookup%20to,construct%20or%20maintain%20complex%20pipelines.)

   * Equivalent operation in Mongoose - TODO  

3. **ORM / ODM**  

   Improve developers experience 
   * Interaction between the developer and DB by abstracting the away the need to write SQL commands 
   * Managing the serialization / deserialization of data to objects
   * Enforce the schema 

   ORM -> Object Relational Mappers   
   ODM -> Object Document Mappers  

   You can find more details [here](https://www.mongodb.com/developer/products/mongodb/mongodb-orms-odms-libraries/)

## Architecture 

### Scaling  

* multiple concurrent requests / high number of requests  
* computationally complex operations / computationally slow endpoints 
* server goes down / server failure 

### Load Balancer 

### CDN  

### Caching  

### 

## Reactjs 

1. **Hooks**  
   * Hooks are the functions that let us hook into the react state and lifecycle features from function components 

2. **DOM**   
   * Document Object Model 
   * The webpage / website elements are stored in the tree representation   
   * Updating the DOM is very inefficient, even if single element changes the whole DOM elements needs to be processed and rendered again. 
   * Update process
     * Virtual DOM is the blueprint of the actual DOM. 
     * There are 2 virtual DOMs, one with the updated items, and one with the previous state. 
     * Whenever JSX gets rendered, the virtual DOM gets updated. 
     * React compares the 2 virtual DOMs, and identifies only those compoenents that are changed. 
     * React then updates the actual DOM. 

3. **Virtual DOM**  
   * This is the copy of the actual DOM in the memory which is used by reactJS update the rendering more efficiently. 
  
4. **useState**   
   * Allows users to track the state in a functional component 
   * Use it when the code has dynamically changing variable / state 

5. **Keys**  
   * Special unique string that needs to be assigned to each element when the component has list of items 
   * Keys helps react to understand which item has been removed / updated / added, and thus helps in rendering. 
   * Optimized reconcilation and improved performance - During reconcilation reactjs compares the list with the previous one. Without the keys the process is inefficient, and react may have to render the whole list again. But with keys, react will render only those items which are effected. 

6. **props**  
   * Inputs to the react component 
   * Can be used to pass the parameters from parent to child component 


useState  
useEffect   
useContext   
useReducer  
useMemo   
useCallback   
useRef   

What are higher order components (what, why, when, how)   

Machine coding round   

Life cycle methods of components - 3 phases    

* Mounting 
* Updating  
* Unmounting  

State management (state and props)  
* state and props 
* context 
* props drilling  

Redux  
Zustand (new alternative to Redux?)
* How redux ? 
* Why redux ? 
* when redux ? 

Redux tool kit  

Custom hooks  
* what 
* when 
* why 
* code  

Lazy loading - performance    
* Code splitting  
* Chunking  
* Suspense  

Virtual DOM  
* Reconcilation 
* React fiber 
* Render 
* Diffing algorithm 
* How render works ? 

SSR and CSR 

Routing (RBAC)  
* react-routing 
* protected routes 

Binary Data  
Character Set  
Character Encoding   

## Datadog    
   * Monitoring service used to visualize the metrics and perform perfomance analysis. 
   * Can be integrated with MongoDB 







