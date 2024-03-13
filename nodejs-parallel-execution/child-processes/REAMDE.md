# Child Processes 

## Fork 

`loadtest` package has been used to test the fork method.  
You can find more details on `loadtest` [here](https://www.npmjs.com/package/loadtest). Please make sure you install the right version based on the node version installed in your system.  

**Without fork**   

Command : `loadtest -n 10 -c 5 http://localhost:13000/endpoint2`

```
kishor@kishor-interplai:~$ loadtest -n 10 -c 5 http://localhost:13000/endpoint1
[Wed Mar 13 2024 14:47:51 GMT+0530 (India Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Wed Mar 13 2024 14:47:56 GMT+0530 (India Standard Time)] INFO Requests: 5 (50%), requests per second: 1, mean latency: 2950.8 ms
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Target URL:          http://localhost:13000/endpoint1
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Max requests:        10
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Concurrency level:   5
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Agent:               none
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Completed requests:  10
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Total errors:        0
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Total time:          9.922123607 s
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Requests per second: 1
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Mean latency:        3955.1 ms
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO Percentage of the requests served within a certain time
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO   50%      4931 ms
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO   90%      4985 ms
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO   95%      4985 ms
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO   99%      4985 ms
[Wed Mar 13 2024 14:48:01 GMT+0530 (India Standard Time)] INFO  100%      4985 ms (longest request)
kishor@kishor-interplai:~$ 
```

Total time to execute the API - 9.922123607 s

**With fork**    

Command : `loadtest -n 10 -c 5 http://localhost:13000/endpoint1`

```
kishor@kishor-interplai:~$ loadtest -n 10 -c 5 http://localhost:13000/endpoint2
[Wed Mar 13 2024 14:48:53 GMT+0530 (India Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Target URL:          http://localhost:13000/endpoint2
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Max requests:        10
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Concurrency level:   5
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Agent:               none
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Completed requests:  10
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Total errors:        0
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Total time:          2.495632498 s
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Requests per second: 4
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Mean latency:        1242 ms
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO Percentage of the requests served within a certain time
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO   50%      1250 ms
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO   90%      1256 ms
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO   95%      1256 ms
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO   99%      1256 ms
[Wed Mar 13 2024 14:48:55 GMT+0530 (India Standard Time)] INFO  100%      1256 ms (longest request)
kishor@kishor-interplai:~$ 

```

Total time to execute the API - 2.495632498 s

You can also monitor the child processes being created when API request is served by running the command `watch -x ps -a`.    

**TODO:** To kill the processes once the execution is completed.   
Currently the processes created remains even after the execution of the API request is completed. 
 

 
