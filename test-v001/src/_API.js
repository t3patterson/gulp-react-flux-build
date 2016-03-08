"use strict"
var _ = require('lodash');
var apiBaseURL = 'https://fluxsetup.firebaseio.com/dummy'
var endURL = ".json"
var authKey = "vQOguiKkqh6GXqOkYjw8Lr8SiQkMBHPWwP3LFmWE"


var db_utils = {
  buildURL: function (base, extensions, fileType, paramsObj, key){

    function _buildQueryStringParams(paramsObj){
      var qryStr = ''
      var paramsObj = paramsObj || {}
      paramsObj.auth = key
      console.log(paramsObj)
      for (var prop in paramsObj){
        console.log(qryStr)
        qryStr += "&" + prop + "=" + paramsObj[prop];
      }
      
      return '?'+qryStr.substr(1) 
    }

    var ext
    ext = '' 
    if ( extensions ){ ext = "/" + extensions }
    console.log(ext)
    var qryStr = ''

    var qryStr = _buildQueryStringParams(paramsObj)
    return base + ext + fileType + qryStr
  },

}


function APIConstructor(){
  var apiParams = {
    headers: {
    }
  }

  function requestType(reqType){

    var apiReqSettings = function(optionsObj, record){

      switch (reqType) {
        case ('getMany'):
          console.log(optionsObj)
          var url = db_utils.buildURL(apiBaseURL, null, endURL, optionsObj, authKey) 
          apiParams.url = url;
          apiParams.type = 'get';
          console.log(JSON.stringify(optionsObj))
          break;

        case ('getSingle'):

          var url = db_utils.buildURL(apiBaseURL, null, endURL, optionsObj, authKey) 
          console.log(url)
          apiParams.url = url;
          apiParams.type = 'get';

          break;

        case ('create'):
          apiParams.url = db_utils.buildURL(apiBaseURL, null, endURL, optionsObj, authKey)
          apiParams.type = 'post';
          apiParams.contentType = 'application/json';
          console.log(optionsObj)
          apiParams.data = JSON.stringify(optionsObj);
          break;

        case ('update'):
          apiParams.type = 'patch';
          apiParams.url = db_utils.buildURL(apiBaseURL, record, endURL, optionsObj, authKey);
          console.log(apiParams.url)
          apiParams.contentType = 'application/json';
          apiParams.data = JSON.stringify(optionsObj);
          break;
        
        case ('destroy'):
          apiParams.url = db_utils.buildURL(apiBaseURL, optionsObj.key, endURL, null, authKey);
          console.log('deleter')
          console.log(apiParams.url)
          apiParams.type = 'delete';
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
    destroy: requestType('destroy')
  }
}

var API = new APIConstructor();

module.exports =  API