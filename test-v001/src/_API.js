"use strict"
var _ = require('lodash');

var apiBaseURL = 'https://fluxsetup.firebaseio.com/dummy'

var endURL = ".json"

var params = {
  auth: "vQOguiKkqh6GXqOkYjw8Lr8SiQkMBHPWwP3LFmWE"
};

function buildURL (base, extensions, fileType, paramsObj){
  var ext
  ext = '' 
  if ( extensions ){ ext = extensions }
  
  var qryStr = ''

  if ( paramsObj ){ qryStr = _buildQueryStringParams(paramsObj) }
  return base + ext + fileType + qryStr
}


function _buildQueryStringParams(paramsObj){
  var qryStr = ''
  console.log(paramsObj)
  for (var prop in paramsObj){
    console.log(qryStr)
    qryStr += "&" + prop + "=" + paramsObj[prop];
  }
  
  return '?'+qryStr.substr(1)
}


function APIConstructor(){
  var apiParams = {
    headers: {
    }
  }

  function requestType(reqType){

    var apiReqSettings = function(optionsObj){

      switch (reqType) {
        case ('getMany'):
          console.log(optionsObj)
          var url = buildURL(apiBaseURL, null, endURL, optionsObj) 
          console.log(url)
          apiParams.url = url;
          apiParams.type = 'get';
          console.log(JSON.stringify(optionsObj))
          break;

        case ('getSingle'):
          apiParams.url = apiURL;
          apiParams.type = 'get';
          break;

        case ('create'):
          apiParams = apiURL
          apiParams.type = 'post';
          apiParams.contentType = 'application/json';
          apiParams.data = JSON.stringify(optionsObj);
          break;

        case ('update'):
          apiParams.type = 'put';
          apiParams.url = apiURL + '/' + dataObject.objectId;
          apiParams.contentType = 'application/json';
          
          if(dataObject.objectId) { delete dataObject.objectId;  }
          if(dataObject.updatedAt){ delete dataObject.updatedAt; }
          if(dataObject.createdAt){ delete dataObject.createdAt; }
          apiParams.data = JSON.stringify(dataObject);
          break;
        
        case ('delete'):
          apiParams.url = apiURL + '/' + dataObject.objectId;
          apiParams.type = 'delete';
          apiParams.data = JSON.stringify(dataObject);
      }

      // console.log(dataObject)
      // console.log(apiParams);
      return $.ajax(apiParams);
    }

    console.log(apiParams)
    return apiReqSettings
  }

  return {
    getMany: requestType('getMany'), //returns a FUNCTION that, when executed, will ajax-request+return a promise
    getSingle: requestType('getSingle'),
    create: requestType('create'),
    update: requestType('update'),
    destroy: requestType('delete')
  }
}

var API = new APIConstructor();

module.exports =  API