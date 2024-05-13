# 30-days-challenge
30 days challenge containing various topics. 

## Basics 

1. **How WEB Works**   
   * User enters the website URL (Uniform Resource Locator) in the browser
   * Understanding the address -> Separates the human readable domain name (for example google.com)
   * Finding the IP address -> Browser needs to translate the domain into IP address. It uses the DNS to do so. (Uses the cached data if available in the history)
   * Connecting and Requesting -> Initiates the connection with the corresponding Google server. It uses HTTP protocol to establish the connection between browser and server.  
   * Securiing Connection (HTTPS) -> Encrypts the communication between the device and the web browser. 
   * Sending the Request -> The browser sends the request to the web server.  
   * Server Response -> Web server receives the Request, and prepares the response. The response contains the HTML code for the webpage along with the images, videos etc. 
   * Rendering the Response -> The browser receives the response, and renders the HTML data to the browser.  

2. **HTTP**    
   * Application level protocol (TCP / IP protocol)
   * Full form - Hyper Text Transform Protocol   
   * It is a protocol (prescribed order or syntax for presenting the information) used for transferring the data over a network. 
   * Two main HTTP messages - **Request** and **Response**   
   * 

3. **HTTPS**  

4. **Difference between HTTP and HTTPS**  

5. **Life cycle of Request**   

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

15. **npm install**   
   Difference between `npm install` and `npm install -g`.  <br /> <br />
   `npm install`  
    * Installs the package within the current project directory. 
    * Installation is added in the `node_modules` folder of the current project directory. 
    * Scoped to the project, not accessible globally on the system.  <br /> <br />
   `npm install -g`  
    * Installs the package globally on the system. 
    * Global packages are install in the `/usr/local` directory.  Binaries are stored in the `/usr/local/bin` and the `node_modules` are stored in `/usr/local/lib`. 

16. **Design Patterns** - TODO  

17. **OOP** - TODO     
   a. Abstraction
   b. Encapsulation
   c. Inheritance
   d. Polymorphism 

18. **HTTP Methods**   
   * **POST**  -> Create -> Should return 201 
   * **PUT**   -> Complete Replacement -> Should return 200 / 204 (no content / body)  
   * **PATCH** -> Partial Update -> Should return 200 / 204 (no content / body)  

19. **OPTIONS**   
   * Understanding HTTP methods are supported 
   * Determine the headers supported by a particular resource 
   * Determine whether a particular resource is available or not 
   * Determine whether the CORS is allowed 

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

5. **ES6 - ECMAScript 6** 
   * 6th version of the ECMAScript 
   * European Computer Manufacturers Association Script  

   **New Functions introduced**   
   * `find` - Finds the element in the given array satisfying the test provided in the function
   * `findIndex` - Finds the element in the given array satisfying the test provided in the function
   * `forEach` - Executes the provided function for each element in the array   
   * `some` - Checks at least one element passes the test provided in the function 
   * `every` - Checks if all the elements passes the test provided in the function  
   * `map` - Creates a new array using the function provided by going through every elements in the original array 
   * `filter` - Creates a new array with the elements that passes tests given in the provided function     
   * `reduce` - Creates / reduces all elements into a single value by applying the provided function against an accumulator and each element  
   * `concat` - Merge 2 or more arrays (creates new array, does not update the existing arrays)
   * `slice` - Returns a shallow copy of a portion of an array into a new array. From start to end (end not included). 
   * `join` - Creates a new string by concatenating all the elements in the array separated by the commas or a specified separator (comma is default). 

6. **Types of exports**   
   * **named export** - Allows to export multiple values from a module by name. When importing from other module, the user needs to use the same name to reference them. Use {} while importing. 
   * **default export** - Allows to exports single value from a module as the default export. Th user can use any name to reference while importing.   

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
   * JavaScript object 
  
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
   * Readonly components / immutable 

7. **Difference between Real DOM and Virtual DOM**    
   **Virtual DOM**  
   * Cant manipulate the HTML directly, updates done via updating the JSX elements 
   * Faster updates 
   * Updates the changes elements only

   **Real DOM**  
   * Manipulates the HTML directly 
   * Slower updates 
   * Updates the complete DOM 

8. **Features in ReactJS**    


9. **JSX**  
   * Javascript XML  
   * Helps to write HTML like code in the Javascript file 
   * Browser can not read the JSX file, during the compilation it is converted to normal Javascript (JSX transformers) 

10. **Why ReactJS - Advantages**   
   * Reusable components  
   * Virtual DOM 
   * Declartive Style 
   * Large community and Eco System 

11. **How does rendering work in ReactJS?**  
   * 

12. **Higher Order Components (HOC)**   
   * Function accepts a component and returns a enhanced component 
   * Used to share the commmon functionality between the code without repeating the code. 
   * When additional props are passed from parent to child, it goes to the HOC. So passing the remaining props using spread operator is a must. 
   * Additional parameters can also be passed to the HOC. 



### Context 
3 steps   
1. create context 
2. provide context value 
3. consume context value  

1. 

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

## Additional Concepts  

### **Micro-Service Design Patterns**  

### **DDoS** - **Distributed Denial of Service** 
  Reference :  
  https://www.imperva.com/learn/ddos/ddos-attacks/   
  https://www.youtube.com/watch?v=_b_I-mJ3Sjk&ab_channel=GoogleCloudTech
 
* Attacker floods the API system with Traffic to prevent valid users from accessing the services. 
* Sub-category of **DoS** - Denial of Service
* In **DoS** a single internet connection is used to generate the traffic, and in case of **DDoS** multiple connections are used.  

**Types of DDoS**
* Volumetric Attack 
* Protocol Based Attack 
* Application Layer Attack 

1. **Volumetric Attack** - Layer 3   
   * Floods the network with high volume of traffic, overwhelming the network bandwidth. Thus causing the services to become unavailable. 
   * **Example 1** : UDP Floods   
     Imaging a scenario where attacker has access to large number of compromised devices (botnets). Attacker uses these devices to bombard the services with UDP Packets.  
     These packets are essentially short messages with minimal data and does not require any response from the server.  
     However, the massive amount of these packets consumes significant bandwidth, making it difficult for legitamate requests to process. Eventually it may make the service completely unavaiable. 
   * **Example 2** : DNS Amplification  
     This exploits the way the Domain Name Server works to bombard the system with flood of traffic.  
     * Spoofed Requests - The attackers does not directly target the victim system, instead they send a bunch of DNS specially requests to Open DNS Resolvers. These requests are spoofed to have source IP same as the Victim's IP.  
     * Unsuspecting Resolvers - Since the requests appears to be coming from the Victim's system, the DNS resolvers responds with the requested data. 
     * Amplified Response - The key amplification lies in the data requested from the DNS Resolver. Attackers often target the record types which contain lot of data. 
     * Traffic Flood - Because of the spoofed IP address, the amplified data sent to the Victim's system causing increase in the traffic, consuming the network bandwidth and affecting the legitamate users.  
    
2. **Protocol Based Attack** - Layer 3 
   * Attackers send a large amount of incomplete connection requests to Victim's servers. These packets loads the systems, as the system waits for the response of incomplete connection requests. This prevents the system from processing legitamate requests.  
   * **Example 1** : SYN Floods / Packets   
     During the 3 Way TCP Handshake 
     * Client Initiates the Connection (SYN) 
     * Server Sends the Acknowledgment (SYN-ACK)
     * Client Confirms (ACK)
     In the even of attack, the attacker sends massive amount of requests / SYN packets to the server, but never complete the handshake. 
     This creates the queue of incomplete connection requests, using up the servers' resouces, this prevents the legitamate requests from processing.  
     And also the server may have a limited capacity on the number of connection requests it can keep open. If the queue is filled with fake users, the real users requests may get dropped.  

3. **Application Layer Attack** - Layer 7  
   Attackers send massive number of API requests thus causing the system to become unavailable due to resource exhaustion.  
   * **Example 1** : API Floods   
     Attackers sends massive amount of API requests. This consumes the resources and may make the system unavailable for legitamate user requests. 
   * **Example 2** : Resource Exhaustion Attacks  
     Attackers target specific endpoint which consumes more resources.  
     Database queries, memory intensive API etc.  

In simple terms, lets consider an example of highway road  

1. **Volumetric Attacks** is when the highway road is filled with the large number of empty trucks, using up the majority of the roads and impacting the legitamate cars. 
2. **Application Level Attacks** is when the highway road is filled with large number of loaded trucks which are going very slow causing the delay in system, and impacting the other drivers / cars. 
3. **Protocol Level Attacks** is when the large number of trucks enter the highway, drivers park on the road and run away, leaving the trucks behind. This impacts the other legitamate drivers / cars to use the system.   

**Prevention**   

**Threat Modeling**   
1. Identify the possible attack surfaces 
2. Identity threats to the surfaces 
   1. Tracking new DDoS attack types  
3. Understanding the impact of the experienced threats  
4. Define pro-active mitigations  
5. Monitor for threats and mitigations  

**Capacity Modeling**  
1. Understanding the baseline traffic.  
2. Planning to absorb low unexpected spikes by scaling. 
3. Planning to absorb new events (in case of new feature release). 

**Mitigate DDoS Risk**  
1. Rate limiting. 
2. Use threat intelligence to limit the traffic volumes from unknown bad sources. 
3. Limit the traffic from the outside of the target regions (Geo-fence). 

**Mitigate Bot Risk**  
1. Deploy reCAPTCHA to detect the bot sending high volumes. 
2. Consider rate limiting.

**Mitigate Web Attacks**  
1. Deploy firewall rules (WAF - Web Application Firewall). 
2. OWASP - T10 mitigations. 
3. WAAP using Cloud Armour (WAAP - Web Application and API Protection).

In general:  

* Reduce Attack Surfaces  
  * Expose only the endpoints which are required. 
  * Add authentication, authorization and input validation. 
* Rate limiting  
  * Add rate limiting to limit the number of requests generated from a particular IP. 
  * Geo-fencing - Block requests generated from suspicious geo locations.
* Reactive monitoring and alert configuration for unexpected spikes in traffic. 
* DDoS protection services - Cloud based solutions or Third-party providers. 
* Stay upto date with the DDoS trends.  



### OWASP  

### Javascript Cookies vs Local Storage vs Session Storage  

|      -             | Cookies          | Local Storage | Session Storage |  
| ---------------    | -------          | ------------- | --------------- | 
| Max Capacity       | 4 kb             | 10 Mb         | 5 Mb            |  
| Browers            | HTML4/5          | HTML5         | HTML5           |  
| Accessibility      | Any window       | Any window    | Same tab        |  
| Expires            | Manually set     | Never         | On tab close    |  
| Storage            | Browser & Server | Browser only  | Browser only    |  
| Sent with Requests | Yes              | No            | No              |  

Thanks to [We Dev Simplified](https://www.youtube.com/watch?v=GihQAC1I39Q&ab_channel=WebDevSimplified)  

