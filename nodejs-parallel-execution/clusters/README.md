# Clusters in NodeJS 

To compare the before and after results, there are 2 server files present here 

1. `noclusters_ex01.js` - server without clusters configured (running in single thread)
2. `cluster_ex01.js` - server with clusters configured (running in multiple threads, in my case running on 12 threads)

Similar to other example, here also I am using `loadtest` npm package to test the endpoint.  

Command executed is `loadtest -n 10 -c 5 http://localhost:13000/endpoint1` 

Output for `noclusters_ex01.js`  - takes 8.524556527000001 s to complete all the requests. 

```
kishor@kishor-interplai:~$ loadtest -n 10 -c 5 http://localhost:13000/endpoint1
[Wed Mar 13 2024 21:19:50 GMT+0530 (India Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Wed Mar 13 2024 21:19:55 GMT+0530 (India Standard Time)] INFO Requests: 5 (50%), requests per second: 1, mean latency: 2570.7 ms
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Target URL:          http://localhost:13000/endpoint1
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Max requests:        10
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Concurrency level:   5
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Agent:               none
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Completed requests:  10
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Total errors:        0
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Total time:          8.524556527000001 s
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Requests per second: 1
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Mean latency:        3468.9 ms
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO Percentage of the requests served within a certain time
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO   50%      4274 ms
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO   90%      4431 ms
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO   95%      4431 ms
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO   99%      4431 ms
[Wed Mar 13 2024 21:19:58 GMT+0530 (India Standard Time)] INFO  100%      4431 ms (longest request)

```

Output for `clusters_ex01.js`  - takes 1.484756934 s to complete all the requests.  

```
kishor@kishor-interplai:~$ loadtest -n 10 -c 5 http://localhost:13000/endpoint1
[Wed Mar 13 2024 22:01:19 GMT+0530 (India Standard Time)] INFO Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Target URL:          http://localhost:13000/endpoint1
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Max requests:        10
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Concurrency level:   5
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Agent:               none
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Completed requests:  10
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Total errors:        0
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Total time:          1.484756934 s
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Requests per second: 7
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Mean latency:        731.5 ms
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO 
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO Percentage of the requests served within a certain time
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO   50%      729 ms
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO   90%      751 ms
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO   95%      751 ms
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO   99%      751 ms
[Wed Mar 13 2024 22:01:21 GMT+0530 (India Standard Time)] INFO  100%      751 ms (longest request)

```