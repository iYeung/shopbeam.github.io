/*! subsbk - v1.0.0 - 2014-05-02
* Copyright (c) 2014 Time Inc; Licensed  */
!function(){"use strict";function isEmpty(str){return!str||0===str.length}function readCookie(){for(var nameEQ=COOKIE+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null}function isValidForTransmission(key){return-1===BLACKLIST.indexOf(key)?!0:!1}function getParamsForBlueKai(){for(var params={},tisub=readCookie(),pairs=decodeURIComponent(tisub).split("|"),i=0;i<pairs.length;i++){var pair=pairs[i].split("~");if(isValidForTransmission(pair[0])){var name=pair[0],value=pair[1];transformers.hasOwnProperty(name)&&(value=transformers[name](value)),isJson(value)?addJsonToParameterMap(params,JSON.parse(value)):params[name]=value}}return params}function isNumeric(num){return!isNaN(num)}function isJson(str){if(isNumeric(str))return!1;try{JSON.parse(str)}catch(e){return!1}return!0}function addJsonToParameterMap(map,jsonData){forEach(jsonData,function(key,value){isValidForTransmission(key)&&("object"==typeof value?addJsonToParameterMap(map,value):addParameter(map,key,value))})}function addParameter(map,paramName,paramValue){"undefined"!=typeof paramValue&&null!==paramValue&&("string"!=typeof paramValue||0!==paramValue.trim().length)&&"No-Value"!==paramValue&&isValidForTransmission(paramName)&&(map[paramName]=paramValue)}function forEach(map,func){for(var key in map)map.hasOwnProperty(key)&&func(key,map[key])}function fireBkTag(){forEach(getParamsForBlueKai(),function(key,value){bk_addPageCtx(key,value)}),bk_doJSTag(13731,0)}function populateTgx(){forEach(getParamsForBlueKai(),function(key,value){TiiAdFactorySetbkParam(key,value)})}var COOKIE="TISub",BLACKLIST=["custData","firstName","lastName","birthday","birthDate","existingFreeTrials","appsAccessTimes"],transformers={expirationDate:function(value){return value.split("+").join(" ")}};if(!isEmpty(readCookie()))if("undefined"==typeof TiiAdFactorySetbkParam){if("undefined"==typeof bk_addPageCtx||"undefined"==typeof bk_doJSTag)return;fireBkTag()}else populateTgx()}();