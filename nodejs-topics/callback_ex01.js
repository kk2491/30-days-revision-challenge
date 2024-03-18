"use strict";

const axios = require("axios");
const api = "test";

const getApiData = async (api, callback) => {
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

    callback(apiResponseData);

    return;
  } catch (err) {
    console.log("getApiData error : ", err);
  }
};

const processData = (apiResponseData) => {
  try {
    console.log("processData");
    let vehicleIds = [];

    for (let i = 0; i < apiResponseData.Results.length; i++) {
      vehicleIds.push(apiResponseData.Results[i].VariableId);
    }
    console.log("vehicleIds ===> ", vehicleIds);

    return vehicleIds;
  } catch (err) {
    console.log("processData error : ", err);
  }
};

let x = getApiData(api, processData);
console.log("x ====> ", x);
