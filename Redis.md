# CACHING - REDIS 

* No-SQL Database  
* Data stored in key value pair 
* Runs inside the system RAM 
* Not stored as persistant store 

## Installation 
* npm install redis 

* Install redis in ubuntu `apt-get install redis` 
* Start the redis `redis server`
* Start the interactive session `redis-cli` 
* Few useful commands 
  * SET key value 
  * GET key
  * EXISTS key 
  * KEYS * 
  * flushall 
  * ttl key (time to live - by default infinite)
  * expire key time_in_seconds - set expiration to a key 
  * setex key time_in_seconds value - set expiration during the creation of the object
  * lpush key 