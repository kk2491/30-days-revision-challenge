"use strict";

const axios = require("axios");

const mainFunction = (api) => {
  return new Promise(async (resolve, reject) => {
    let apiResponseData = null;
    let apiUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/5UXWX7C5*BA?format=json&modelyear=2011";

    try {
      let apiResponse = await axios.get(apiUrl);
      apiResponseData = apiResponse.data;
      resolve(apiResponseData);
    } catch (err) {
      console.log("mainFunction axios error : ", err);
      reject("error 1");
    }
  });
};

const functionOne = async (apiResponseData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let vehicleIds = [];

      for (let i = 0; i < apiResponseData.Results.length; i++) {
        vehicleIds.push(apiResponseData.Results[i].VariableId);
      }
      console.log("vehicleIds fetched ===> ", vehicleIds);

      resolve({ vehicleIds: vehicleIds, apiResponse: apiResponseData });
    } catch (err) {
      console.log("functionOne error : ", err);
      reject("error 2");
    }
  });
};

const functionTwo = async (vehicleIds, apiResponseData) => {
  return new Promise(async (resolve, reject) => {
    try {
      let vehicles = [];

      for (let i = 0; i < vehicleIds.length; i++) {
        let vehicleId = vehicleIds[i];
        let vehicleData = apiResponseData.Results.find((obj) => obj.VariableId == vehicleId);

        if (vehicleData) {
          vehicles.push({
            id: vehicleId,
            data: vehicleData.Variable,
          });
        }
      }
      console.log("vehicles fetched ===> ", vehicles);

      resolve(vehicles);
    } catch (err) {
      console.log("functionTwo error : ", err);
      reject("error 3");
    }
  });
};

const functionThree = (vehicles) => {
  try {
    for (let i = 0; i < vehicles.length; i++) {
      console.log("vehicledId : ", vehicles[i].id, " vehicleData : ", vehicles[i].data);
    }

    return;
  } catch (err) {
    console.log("callbackFunctionThree error : ", err);
  }
};

mainFunction("test")
  .then((apiResponseData) => {
    functionOne(apiResponseData)
      .then((functionOneOutput) => {
        functionTwo(functionOneOutput.vehicleIds, functionOneOutput.apiResponse)
          .then((functionTwoOutput) => {
            functionThree(functionTwoOutput);
          })
          .catch((err) => {
            console.log("error in functionTwo promise : ", err);
          });
      })
      .catch((err) => {
        console.log("error in functionOne promise : ", err);
      });
  })
  .catch((err) => {
    console.log("error in mainFunction promise : ", err);
  });
