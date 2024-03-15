"use strict";

db.Requests.insertMany([
  { name: "burgers", type: "food", requestId: "r1" },
  { name: "rice", type: "grocery", requestId: "r2" },
  { name: "bigmac", type: "food", requestId: "r3" },
  { name: "biriyani", type: "food", requestId: "r4" },
  { name: "vegetables", type: "grocery", requestId: "r5" },
  { name: "burgers", type: "food", requestId: "r6" },
  { name: "rice", type: "grocery", requestId: "r6" },
]);

// db.Requests.find()

db.Checkpoints.insertMany([
  { checkpointId: "c1", name: "kfc", type: "pickup", requestId: "r1" },
  { checkpointId: "c2", name: "kfc", type: "pickup", requestId: "r1" },
  { checkpointId: "c3", name: "kishor", type: "dropoff", requestId: "r1" },
  { checkpointId: "c4", name: "walmart", type: "pickup", requestId: "r2" },
  { checkpointId: "c5", name: "walmart", type: "dropoff", requestId: "r2" },
  { checkpointId: "c6", name: "walmart", type: "pickup", requestId: "r5" },
  { checkpointId: "c7", name: "walmart", type: "dropoff", requestId: "r5" },
]);

// db.Checkpoints.find()

db.createView("CheckpointItems", "Checkpoints", [
  {
    $lookup: {
      from: "Requests",
      localField: "requestId",
      foreignField: "requestId",
      as: "RequestDocs",
    },
  },
  {
    $project: {
      _id: 1,
      checkpointId: 1,
      requestId: 1,
      name: 1,
      type: 1,
      itemType: "$RequestDocs.type",
      itemName: "$RequestDocs.name",
    },
  },
]);

db.CheckpointItems.find();
