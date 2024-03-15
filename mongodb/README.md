# Mongod

**Quick Note**  
[**myCompiler**](https://www.mycompiler.io/new/mongodb) provides a quick way to execute your MongoDB commands.  



## Join 2 collections 

You can use the `createView` to join 2 collections in MongoDB.  
`join_mongodb_ex01.js` and `join_mongodb_ex02.js` covers the examples.  

Please note that `join_mongodb_ex02.js` is the modified version of the example provided in the official mongodb documentation [here](https://www.mongodb.com/docs/manual/core/views/join-collections-with-view/#:~:text=You%20can%20use%20%24lookup%20to,construct%20or%20maintain%20complex%20pipelines.).

This has 2 stages  

Lets assume we have 2 collections, `collection1` and `collection2`.  
One of the field in `collection1` is present in `collection2`, using this field we can fetch the details from `collection1`.  

You are trying to create a new collection based of `collection2`, and by fetching some details from `collection1` using a unique id.  

1. `lookup` -> search for the documents in `collection1` based on a filed in the `collection2`. 
2. `project` -> select the fields which should be part of this new collection.

**Note:**  
There is no direct equivalent of `createView` in **mongoose**.  
However there are ways to achieve the same results in mongoose as well.   

## Aggregration  

Before we proceed with the explanation here are some useful links to go through.  

* [Aggregation Overview](https://www.mongodb.com/docs/manual/aggregation/)
* [Aggregation Pipeline Example](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/#std-label-aggregation-pipeline-examples)
* [Practical MongoDB Aggregation](https://www.practical-mongodb-aggregations.com/)
* [Aggregation Examples](https://www.mongodb.com/docs/manual/reference/operator/aggregation/#std-label-aggregation-expressions)

