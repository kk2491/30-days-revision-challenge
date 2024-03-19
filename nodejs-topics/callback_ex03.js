"use strict";

const axios = require("axios");

const mainFunction = async (callback) => {
  try {
    console.log("getApiData");

    let apiResponseData = null;
    let apiUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/5UXWX7C5*BA?format=json&modelyear=2011";

    try {
      let apiResponse = await axios.get(apiUrl);
      apiResponseData = apiResponse.data;
    } catch (err) {
      console.log("apiResponse error : ", err);
    }

    console.log("apiResponseData : ", apiResponseData);

    callback(apiResponseData, callbackFunctionTwo);

    return;
  } catch (err) {
    console.log("getApiData error : ", err);
  }
};

const callbackFunctionOne = (apiResponseData, callback) => {
  try {
    console.log("callbackFunctionOne");
    let vehicleIds = [];

    for (let i = 0; i < apiResponseData.Results.length; i++) {
      vehicleIds.push(apiResponseData.Results[i].VariableId);
    }
    console.log("vehicleIds fetched ===> ", vehicleIds);

    callback(vehicleIds, apiResponseData, callbackFunctionThree);

    return vehicleIds;
  } catch (err) {
    console.log("callbackFunctionOne error : ", err);
  }
};

const callbackFunctionTwo = (vehicleIds, apiResponseData, callback) => {
  try {
    console.log("callbackFunctionTwo");
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

    callback(vehicles);

    return;
  } catch (err) {
    console.log("callbackFunctionOne error : ", err);
  }
};

const callbackFunctionThree = (vehicles) => {
  try {
    for (let i = 0; i < vehicles.length; i++) {
      console.log("vehicledId : ", vehicles[i].id, " vehicleData : ", vehicles[i].data);
    }

    return;
  } catch (err) {
    console.log("callbackFunctionThree error : ", err);
  }
};

mainFunction(callbackFunctionOne);
