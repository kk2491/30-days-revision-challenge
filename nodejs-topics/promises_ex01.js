"use strict";

const axios = require("axios");

const getApiData = async (api) => {
  try {
    return new Promise(async (resolve, reject) => {
      let apiResponseData = null;
      let apiUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/5UXWX7C5*BA?format=json&modelyear=2011";

      try {
        let apiResponse = await axios.get(apiUrl);
        apiResponseData = apiResponse.data;
        resolve(apiResponseData);
      } catch (err) {
        console.log("apiResponse error : ", err);
        reject("error");
      }

      console.log("apiResponseData : ", apiResponseData);
    });
  } catch (err) {
    console.log("getApiData error : ", err);
  }
};

getApiData("test")
  .then((apiResponseData) => {
    let vehicleIds = [];

    for (let i = 0; i < apiResponseData.Results.length; i++) {
      vehicleIds.push(apiResponseData.Results[i].VariableId);
    }
    console.log("vehicleIds ===> ", vehicleIds);
  })
  .catch((err) => {
    console.log("error from getApiData promise : ", err);
  });
