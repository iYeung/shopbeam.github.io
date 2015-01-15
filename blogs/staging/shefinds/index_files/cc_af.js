(function(){var mode='BCP';var bcpDomain='',loaded=false,async_props={async:false,asyncBehaviors:{},asyncOpportunityIds:[],asyncOpportunities:[]},behaviors={},urls={},bcpd_callback=null,pv="pv=y",dobcp=false,placementOpps={p:[],pt:[]};var userAgent=navigator.userAgent.toLowerCase(),domain=document.domain,test=false,sep="/",delim="/",autoFire=false;var portNumber;var client, bcpClient; client = bcpClient =2095;var networkClient = { id: 2095, useFirstPartyDomain: 'NEVER', domainPrefix: '', cookieDomain: '',cookieDomainIDN: '' };var mappedClientList = [];var clientLookupTable = {  };function strEndsWith(str, substr){    var lastIndex = str.lastIndexOf(substr);    return lastIndex > -1 && ( (lastIndex + substr.length) === str.length);}function resolveClient(host){    if (!mappedClientList){        return networkClient;    }    var candidates = [];    var currentClient, i;    for (i = 0; i < mappedClientList.length; i++){        currentClient = mappedClientList[i];        if((currentClient.domain === host || currentClient.punyDomain === host) &&            (currentClient.matchType === 'ALL' || currentClient.matchType === 'EXACT'))        {            return clientLookupTable[currentClient.id];        }        if((strEndsWith(host, '.' + currentClient.domain) || strEndsWith(host, '.' + currentClient.punyDomain)) &&            (currentClient.matchType === 'UNDER' || currentClient.matchType === 'ALL' ))        {            candidates.push(currentClient);        }    }    var winningIndex = host.length;    var returnClient = networkClient;    for (i = 0; i < candidates.length; i++){        var curIndex = host.lastIndexOf(candidates[i].domain);        if(curIndex < 0){            curIndex = host.lastIndexOf(candidates[i].punyDomain);        }        if (curIndex < winningIndex && curIndex >= 0){            winningIndex = curIndex;            returnClient = clientLookupTable[candidates[i].id];        }    }    return returnClient;}var actualClient = resolveClient(location.host);bcpClient = actualClient.id;function shouldUseFirstPartyDomain(){	switch (actualClient.useFirstPartyDomain){		case 'NEVER':			return false;		case 'ALWAYS':			return true;		case 'USERAGENT':			return /^(?!.*chrome.*).*safari\/\d+.*/.test(navigator.userAgent.toLowerCase()); ;	}}function resolveFirstPartyHost(){	if (!shouldUseFirstPartyDomain()){		return '';	}	var client = actualClient;	var domain = '';	if (client.domainPrefix && client.domainPrefix != ''){		domain = client.domainPrefix + '.';	}	domain += client.cookieDomain;	return domain;}var firstPartyHost =  resolveFirstPartyHost();var useFirstPartyDomain =  shouldUseFirstPartyDomain();var useFpcMatchesUserAgent =  false;var browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};function setTest(testOn){if(typeof(testOn)!='undefined'&&(testOn==true||testOn==false)){test=testOn}}var ns,running=document.getElementById('LOTCC_'+client);if(running){var qs=parseQuery(running.src.replace(/^[^\?]+\??/,''));ns=qs['ns']||('LOTCC_'+client);if(mode=='BCP'){autoFire=!!(qs['autobcp']||false);delete qs['ns'];delete qs['autobcp'];for(var type in qs){if(isArray(qs[type])){for(var i=0,beh;beh=qs[type][i++];){add(type,beh)}}}}}else{ns=('LOTCC_'+client);}if(!(ns in window))window[ns]={};function parseQuery(query){var params={};if(!query)return params;var pairs=query.split(/[;&]/);for(var i=0;i<pairs.length;i++){var key_val=pairs[i].split('=');if(!key_val||key_val.length!=2)continue;var key=unescape(key_val[0]);var val=unescape(key_val[1]);val=val.replace(/\+/g,' ');(params[key]&&params[key].push)?params[key].push(val):params[key]=[val]}return params}function isArray(v){return v&&typeof v==='object'&&typeof v.length==='number'&&!(v.propertyIsEnumerable('length'))}function getDefinedValue(overrideVal,defaultVal){if(typeof(overrideVal)!='undefined'&&overrideVal!=null){return overrideVal}else{return defaultVal}}function append(url,val,vr,delimArg){if((typeof(val)!="undefined")&&(val.length>0)){var delimToUse=getDefinedValue(delimArg,delim);var vals;if(isArray(val)){vals=val}else{vals=val.split(",")}var vn=delimToUse+vr+"=";for(var i=0;i<vals.length;i++){url+=vn+vals[i]}}return url}function baseURL(is_pv,version,domainArg,sepArg,delimArg){if(typeof(version)=='undefined'||version==null){version='5'}is_pv=!window[ns].pvdone;var domainToUse;if(typeof(domainArg)!='undefined'&&domainArg!=null){domainToUse=domainArg}else{domainToUse=getDomain()}var url=addPortNumber(getPrefix()+domainToUse);var sepToUse=getDefinedValue(sepArg,sep);var delimToUse=getDefinedValue(delimArg,delim);url+='/'+version+sepToUse+'c='+bcpClient+delimToUse+'rand='+getRandomNumber();if(is_pv&&mode=='BCP'){url+=delimToUse+pv}return url}function getRandomNumber(){var min=100000000;var max=999999999;var randomnumber=Math.floor(min+(max-min)*Math.random());return randomnumber}function getPrefix(){return((document.location.protocol=='https:')?'https:':'http:')+'//'}function addPortNumber(url){if(typeof(portNumber)!='undefined'&&portNumber!=null){return url+=':'+portNumber}else{return url}}var addEvent=(function(){if(document.addEventListener){return function(obj,sEvent,func){obj.addEventListener(sEvent,func,false);return true}}else{if(document.attachEvent){return function(obj,sEvent,func){obj.attachEvent("on"+sEvent,func);return true}}else{return function(obj,sEvent,func){return false}}}})();if(!client)return false;for(var prop in async_props){if(prop in window[ns]){async_props[prop]=window[ns][prop]}else if(('LOTCC'in window)&&(typeof LOTCC==='object')&&(prop in LOTCC)){async_props[prop]=LOTCC[prop]}}window[ns].enableDiv=function(){};window[ns].enableNamedDiv=function(){};window[ns].fillDiv=function(){};window[ns].add=add;window[ns].addBehavior=addBehavior;window[ns].addInterest=addInterest;window[ns].addAction=addAction;window[ns].addMedia=addMedia;window[ns].bcp=bcp;window[ns].bcpd=bcpd;window[ns].bcpw=bcpw;window[ns].bcpdpv=bcpdpv;window[ns].setTest=setTest;window[ns].pvdone=false;LOTCC=window[ns];addEvent(window,"load",doneload);addEvent(window,"load",loadAsync);if(autoFire){bcp()}function flash(msg){var div;if(div=document.getElementById('LOTCC.status'))div.innerHTML=msg}function add(name,id){if(behaviors[name]==null){behaviors[name]=new Array()}var entry=behaviors[name];entry[entry.length]=encodeURIComponent(id)}function addBehavior(id){add("b",id)}function addAction(id){add("act",id)}function addInterest(id){add("int",id)}function addMedia(id){add("med",id)}function addMemberId(id){}function addContentId(id){}function addOpportunityId(id){placementOpps.p.push(id)}function addOpportunity(tag){placementOpps.pt.push(tag)}function appendInternal(url,vals,vr){if((typeof(vals)!="undefined")&&(vals.length>0)){var vn=delim+vr+"=";for(var i=0;i<vals.length;i++){url+=vn+vals[i]}}return url}function appendAll(url){for(var type in behaviors){url=appendInternal(url,behaviors[type],type)}for(var pl_type in placementOpps){url=append(url,placementOpps[pl_type],pl_type)}if(placementOpps.p.length>0||placementOpps.pt.length>0){url=append(url,'y','dp')}if(async_props.async){url=append(url,'y','async')}return url}function getDomain(){if (useFirstPartyDomain){return 'bcp.' + ( test ? 'test.' : '' ) + firstPartyHost;} else {return (test) ? 'bcp.test.lotame.com' : 'bcp.crwdcntrl.net';}}function bcp(){if(client=="15"||/fotolog/i.test(domain)){var foundUS=false;var ints=behaviors["int"]||[];for(var i=0;i<ints.length;i++){if(decodeURIComponent(ints[i]).toLowerCase()=="country:us"||decodeURIComponent(ints[i]).toLowerCase()=="country:ca"){foundUS=true}}if(!foundUS){return}}bcpinternal()}function bcpinternal(){(loaded)?firebcp():dobcp=true}function bcpdpv(){var pvbak=window[ns].pvdone;window[ns].pvdone=true;bcpd();window[ns].pvdone=pvbak}function bcpd(cb){var GTKPR_ABORT_BCP;var url=appendAll(baseURL(false));pixel(url,cb)}function bcpw(){var len=arguments.length;if(len>0){for(var i=0;i<len;i+=2){if(i+1<len){add(arguments[i],arguments[i+1])}}}bcpd()}function pixel(url,cb){var pi=new Image();pi.onload=img_done;pi.onerror=img_done;pi.onabort=img_done;bcpd_callback=cb;reset(url);pi.src=url}function img_done(url){if(bcpd_callback)bcpd_callback()}function reset(url){behaviors={};placementOpps={p:[],pt:[]};if(typeof(lotbcp)!="undefined")lotbcp="";if(typeof(lotact)!="undefined")lotact="";if(typeof(lotint)!="undefined")lotint="";if(typeof(lotmed)!="undefined")lotmed="";if(url&&url.indexOf(pv)>0){window[ns].pvdone=true}}function firebcp(){var GTKPR_ABORT_BCP;try{bindTriggers();}catch(exception){}var url=generateFirebcpURL('5');try{var tempIFrame=document.createElement('iframe');tempIFrame.setAttribute('id','LOTCCFrame'+new Date());url=append(url,"ifr","rt");tempIFrame.setAttribute('src',url.replace(/'/g,"%27"));tempIFrame.style.border='0px';tempIFrame.style.width='0px';tempIFrame.style.height='0px';tempIFrame.style.display='block';document.body.appendChild(tempIFrame)}catch(exception){var pixel=new Image(1,1);pixel.src=url.replace(/'/g,"%27")}reset(url)}function generateFirebcpURL(version){var url=appendAll(baseURL(true,version));if(typeof(lotbcp)!="undefined")url=append(url,lotbcp,"b");if(typeof(lotact)!="undefined")url=append(url,lotact,"act");if(typeof(lotint)!="undefined")url=append(url,lotint,"int");if(typeof(lotmed)!="undefined")url=append(url,lotmed,"med");return url}function doneload(){if(dobcp){firebcp();dobcp=false}loaded=true}function loadAsync(){if(async_props.async){try{with(async_props){for(type in asyncBehaviors){for(var i=0,b;b=asyncBehaviors[type][i++];){add(type,b)}}for(var i=0,id;id=asyncOpportunityIds[i++];){addOpportunityId(asyncOpportunityIds[id])}for(var i=0,tag;tag=asyncOpportunities[i++];){addOpportunity(asyncOpportunities[tag])}}bcp()}catch(e){}}}var GTKPR_INCLUDE_INVIEW;var placement_rules=[],addTrigger=addOptimusRule;function bindTriggers(){placement_rules.sort(function(a,b){var regex=/^#/;if(regex.test(a.element)&&!regex.test(b.element))return-1;if(!regex.test(a.element)&&regex.test(b.element))return 1;return 0});for(var i=0,pl;pl=placement_rules[i++];){pl.process()}if(OptimusRule.element_cache.length>0){for(var i=OptimusRule.element_cache.length-1;i>=0;i--){var el=OptimusRule.element_cache[i][0];var handlers=OptimusRule.element_cache[i][1];for(var ev in handlers){addEvent(el,ev,(function(h){var evt_el=el;return function(evt){for(var j=0,callback;callback=h[j++];){callback.call(evt_el,evt)}var b_count=0;for(var type in behaviors){b_count++}if(b_count>0)bcpw()}})(handlers[ev]))}delete OptimusRule.element_cache[i];OptimusRule.element_cache.length--}}};function addOptimusRule(r){var o=new OptimusRule(r);return o.process()};function addHapaxRule(r){var h=new HapaxRule(r);return h.process()};function addPlacementRule(r){placement_rules.push(new PlacementRule(r))};function OptimusRule(o){var o=o||{};this.location=o.location||null;this.rule_id=o.opr||null;this.element=o.element||null;this.event=o.event||null;this.location_matches=null;this.element_matches=null;this.current_document=document;for(var bt in o){if(typeof o[bt]==='object'&&o[bt]!==null&&o[bt].length>0){this.behavior_type=bt;this.behavior=o[bt][0]}}};OptimusRule.prototype={process:function(){var rule_matches=0;if(!this.is_valid())return false;for(var href in this.document_map){if(this.document_map[href]===null)continue;var loc_match=null;try{var re=new RegExp(this.location);loc_match=re.exec(href)}catch(e){this.add("opterr","location-match")}if(loc_match===null)continue;this.location_matches=loc_match;var doc=this.document_map[href];if(this.element!==null){this.query_regex.lastIndex=0;var query_element=(this.query_regex.test(this.element))?this.element:"{{#"+this.element+"}}";var elm_match=this.query(query_element,doc);if(elm_match.length==0&&this.event==null)continue;var missing_property=false;for(var i=0,el;el=elm_match[i++];){if(typeof el["property_name"]!=="undefined"&&el["property_name"]!==null&&el["property_content"]===null)missing_property=true}if(missing_property)continue;this.element_matches=elm_match;(this.event!==null)?this.create_event(doc):this.match(doc);rule_matches++}else{this.match(doc);rule_matches++}}return rule_matches},match:function(doc){var matches=this.query(this.behavior,doc);var p_behavior=this.behavior;for(var i=0,m;m=matches[i++];){p_behavior=p_behavior.replace(m.expression,(m.property_content!==null)?m.property_content:"")}p_behavior=p_behavior.replace(this.query_regex,"");if(this.location_matches!==null&&this.location_matches.length>0){for(var i=0;i<this.location_matches.length;i++){var sub_regex=new RegExp("\\$"+i.toString()+"\\b");p_behavior=p_behavior.replace(sub_regex,this.location_matches[i])}}if(p_behavior!==""){p_behavior=("#OpR#"+this.rule_id+"#"+p_behavior);this.add(p_behavior)}return p_behavior},add:function(b){add(this.behavior_type,b)},create_event:function(doc){var bind_to=[];if(this.element_matches.length>0){for(var i=0;i<this.element_matches.length;i++){for(var j=0;j<this.element_matches[i]["elements"].length;j++){bind_to.push(this.element_matches[i]["elements"][j])}}}else if(this.element_matches.length==0&&this.event=='click'){bind_to.push(doc)}else{return false}var create_callback=function(curr_elm,inst){var curDoc=doc;return function(evt){if(curr_elm===curDoc&&inst.element!==null){var els=inst.query(inst.element,curDoc);if(els.length==0)return;for(var i=0,el_list;el_list=els[i++];){var found=false;if(el_list.elements&&el_list.elements.length>0){for(var j=0,el;el=el_list.elements[j++];){if((evt.target&&evt.target==el)||(evt.srcElement&&evt.srcElement==el)){inst.match(curDoc);found=true;break}}}if(found)break}}else if(this===curr_elm){inst.match(curDoc)}}};for(var i=0,curr_elm;curr_elm=bind_to[i++];){if(!(curr_elm.nodeType&&(curr_elm.nodeType==1||curr_elm.nodeType==9)))continue;var found=false;for(var j=0,arr_elm;arr_elm=OptimusRule.element_cache[j++];){if(!isArray(arr_elm))continue;var cached_elm=arr_elm[0];var handler=arr_elm[1];if(curr_elm===cached_elm){if(!(this.event in handler))handler[this.event]=[];handler[this.event].push(create_callback(curr_elm,this));found=true}}if(found===false){var new_elm=[curr_elm,{}];new_elm[1][this.event]=[create_callback(curr_elm,this)];OptimusRule.element_cache.push(new_elm)}}return OptimusRule.element_cache},is_valid:function(){var valid=true;if((this.location==='')||(this.location===null)||(typeof this.location!=="string"))valid=false;if((this.rule_id===null)||isNaN(parseInt(this.rule_id)))valid=false;if((this.element!==null&&typeof this.element!=="string"))valid=false;if((this.event!==null)&&((this.element==null||typeof this.event!=="string")))valid=false;return valid},filter:function(c){var str=c.replace(/\<\/?[^>]+\/?\>/gi,'').replace(/\n|\t|\r/gi,' ').replace(/\s{2,}/g,' ').replace(/\[quote\][\s\S]*\[\/quote\]/gi,'');try{str=decodeURIComponent(str)}catch(e){}if(typeof client!=='undefined'&&client==2241){str=str.replace(/[^\u0020-\u007e]/g,'')}return str},query:function(q,doc){var matches=[],results,expr,selector,property,els,prefix;try{this.query_regex.lastIndex=0;while((results=this.query_regex.exec(q))!==null){expr=results[0];prefix=results[1]||"e";selector=results[2];property=results[4]||null;els=(typeof OptimusRule.supported_sources[prefix]==='function')?OptimusRule.supported_sources[prefix].call(this,selector,property,doc):[];if(els.length>0){matches.push({expression:expr,elements:els[0],property_name:property,property_content:els[1]})}}}catch(e){this.add("opterr","get-elements-by-selector");matches=[]}return matches},query_regex:/([a-zA-Z]+)?\{\{([^}}]*)\}\}(\.([a-zA-Z0-9\._-]+))?/g,document_map:(function(w,doc_map){doc_map[w.location.href]=w.document;var has_access=false;if(window.parent!=w){try{if(w.parent.location.href){has_access=true;return arguments.callee(w.parent,doc_map)}}catch(e){}if(!has_access){if(w.document.referrer!=='')doc_map[w.document.referrer]=null}}return doc_map})(window,{})};OptimusRule.element_cache=[];OptimusRule.supported_sources={e:function(s,p,d){var p=p||"value";var els=this.query_by_selector(s,d);var props=[];for(var i=0,e;e=els[i++];){var prop_arr=p.split('.');for(var j=0;typeof e[prop_arr[j]]!=="undefined";j++){e=e[prop_arr[j]]}if(j===prop_arr.length){props.push(this.filter(e.toString()))}}var p_content=(props.length>0)?props.join(','):null;return els.length>0?[els,p_content]:[]},r:function(s,p,d){var p=parseInt(p)||0;var re=new RegExp(s);var matches=re.exec(d.referrer);var r_prop=(matches!==null&&typeof matches[p]!=='undefined')?this.filter(matches[p]):null;return(r_prop!==null)?[matches,r_prop]:[]}};function HapaxRule(h){OptimusRule.call(this,h);this.behavior_type="ugc";this.behavior=h["ug"][0]||null};HapaxRule.prototype=new OptimusRule();HapaxRule.prototype.is_valid=function(){var valid=true;if((this.location==='')||(this.location===null)||(typeof this.location!=='string'))valid=false;if((this.element==='')||(this.element===null)||(typeof this.element!=='string'))valid=false;if((this.event==='')||(this.event===null)||(typeof this.event!=='string'))valid=false;if((this.behavior==='')||(this.behavior===null)||(typeof this.behavior!=='object'))valid=false;return valid};function PlacementRule(p){OptimusRule.call(this,p);this.placement_id=p.placement_id||null;this.placement=p.placement||null};PlacementRule.prototype=new OptimusRule();PlacementRule.prototype.process=function(){if(!this.is_valid)return false;var els=this.query((this.query_regex.test(this.element))?this.element:("{{"+this.element+"}}"),document);if(els.length<=0)return false;if(this.placement_id!==null){this.addOpportunityId()}else if(this.placement!==null){this.addOpportunity()}else{return false}return true};PlacementRule.prototype.addOpportunityId=function(){addOpportunityId(this.placement_id)};PlacementRule.prototype.addOpportunity=function(){addOpportunity(this.placement)};PlacementRule.prototype.is_valid=function(){var valid=true;if((this.placement==null||typeof this.placement!=='string')&&(this.placement_id==null||isNaN(parseInt(this.placement_id))))valid=false;if((this.element==='')||(this.element===null)||(typeof this.element!=="string"))valid=false;return valid};(function(){var doc=document;var isIE=/(?!.*?opera.*?)msie(?!.*?opera.*?)/i.test(navigator.userAgent);var isWebKit=/webkit/i.test(navigator.userAgent);var cache={};var cacheOn=!isIE&&!isWebKit;var persistCache={};var _uid=0;var reg={trim:/^\s+|\s+$/g,quickTest:/^[^:\[>+~ ,]+$/,typeSelector:/(^[^\[:]+?)(?:\[|\:|$)/,tag:/^(\w+|\*)/,id:/^(\w*|\*)#/,classRE:/^(\w*|\*)\./,attributeName:/(\w+)(?:[!+~*\^$|=])|\w+/,attributeValue:/(?:[!+~*\^$|=]=*)(.+)(?:\])/,pseudoName:/(\:[^\(]+)/,pseudoArgs:/(?:\()(.+)(?:\))/,nthParts:/([+-]?\d)*(n)([+-]\d+)*/i,combinatorTest:/[+>~ ](?![^\(]+\)|[^\[]+\])/,combinator:/\s*[>~]\s*(?![=])|\s*\+\s*(?![0-9)])|\s+/g,recursive:/:(not|has)\((\w+|\*)?([#.](\w|\d)+)*(\:(\w|-)+(\([^\)]+\))?|\[[^\}]+\])*(\s*,\s*(\w+|\*)?([#.](\w|\d)+)*(\:(\w|-)+(\([^\)]+\))?|\[[^\}]+\])*)*\)/gi};var arrayIt=function(a){if(!!(window.attachEvent&&!window.opera)){return function(a){if(a instanceof Array)return a;for(var i=0,result=[],m;m=a[i++];)result[result.length]=m;return result}}else{return function(a){return Array.prototype.slice.call(a)}}}();function filter(a,tag){var r=[],uids={};if(tag)tag=new RegExp("^"+tag+"$","i");for(var i=0,ae;ae=a[i++];){ae.uid=ae.uid||_uid++;if(!uids[ae.uid]&&(!tag||ae.nodeName.search(tag)!==-1)){r[r.length]=uids[ae.uid]=ae}}return r}function getAttribute(e,a){if(!e)return null;if(a==="class"||a==="className")return e.className;if(a==="for")return e.htmlFor;return e.getAttribute(a)||e[a]}function getByClass(selector,selectorRE,root,includeRoot,cacheKey,tag,flat){var result=[];if(!!flat){return selectorRE.test(root.className)?[root]:[]}if(root.getElementsByClassName){result=arrayIt(root.getElementsByClassName(selector));if(!!includeRoot){if(selectorRE.test(root.className))result[result.length]=root}if(tag!="*")result=filter(result,tag);cache[cacheKey]=result.slice(0);return result}else if(doc.getElementsByClassName){result=arrayIt(doc.getElementsByClassName(selector));if(tag!="*")result=filter(result,tag);cache[cacheKey]=result.slice(0);return result}var es=(tag=="*"&&root.all)?root.all:root.getElementsByTagName(tag);if(!!includeRoot)es[es.length]=root;for(var index=0,e;e=es[index++];){if(selectorRE.test(e.className)){result[result.length]=e}}return result}function getById(selector,root,includeRoot,cacheKey,tag,flat){var rs,result=[];if(!!flat){return getAttribute(root,"id")===selector?[root]:[]}if(root.getElementById){rs=root.getElementById(selector)}else{rs=doc.getElementById(selector)}if(rs&&getAttribute(rs,"id")===selector){result[result.length]=rs;cache[cacheKey]=result.slice(0);return result}var es=root.getElementsByTagName(tag);if(!!includeRoot)es[es.length]=root;for(var index=0,e;e=es[index++];){if(getAttribute(e,"id")===selector){result[result.length]=e;break}}return result}function getContextFromSequenceSelector(selector,roots,includeRoot,flat){var context,contextRE,tag,contextType="",result=[],tResult=[],root,rootCount,rootsLength;reg.id.lastIndex=reg.typeSelector.lastIndex=reg.classRE.lastIndex=0;if(!reg.tag.test(selector))selector="*"+selector;context=reg.typeSelector.exec(selector)[1];roots=roots instanceof Array?roots.slice(0):[roots];rootsLength=roots.length;rootCount=rootsLength-1;if(reg.id.test(context)){contextType="id";tag=(tag=context.match(/^\w+/))?tag[0]:"*";context=context.replace(reg.id,"")}else if(reg.classRE.test(context)){contextType="class";tag=(tag=context.match(reg.tag))?tag[0]:"*";context=context.replace(reg.tag,"");contextRE=persistCache[context+"RegExp"]||(persistCache[context+"RegExp"]=new RegExp("(?:^|\\s)"+context.replace(/\./g,"\\s*")+"(?:\\s|$)"));context=context.replace(/\./g," ")}while(rootCount>-1){root=roots[rootCount--];root.uid=root.uid||_uid++;var cacheKey=selector+root.uid;if(cacheOn&&cache[cacheKey]){result=result.concat(cache[cacheKey]);continue}if(contextType==="id"){tResult=getById(context,root,includeRoot,cacheKey,tag,flat)}else if(contextType==="class"){tResult=getByClass(context,contextRE,root,includeRoot,cacheKey,tag,flat)}else{tResult=arrayIt(root.getElementsByTagName(context));if(!!includeRoot&&(root.nodeName.toUpperCase()===context.toUpperCase()||context==="*"))tResult[tResult.length]=root}result=rootsLength>1?result.concat(tResult):tResult;cache[cacheKey]=result.slice(0)}return result}peppy={query:function(selectorGroups,root,includeRoot,recursed,flat){var elements=[];if(!recursed){selectorGroups=selectorGroups.replace(reg.trim,"").replace(/(\[)\s+/g,"$1").replace(/\s+(\])/g,"$1").replace(/(\[[^\] ]+)\s+/g,"$1").replace(/\s+([^ \[]+\])/g,"$1").replace(/(\()\s+/g,"$1").replace(/(\+)([^0-9])/g,"$1 $2").replace(/['"]/g,"").replace(/\(\s*even\s*\)/gi,"(2n)").replace(/\(\s*odd\s*\)/gi,"(2n+1)");}if(typeof root==="string"){root=(root=getContextFromSequenceSelector(root,doc)).length>0?root:undefined}root=root||doc;root.uid=root.uid||_uid++;var cacheKey=selectorGroups+root.uid;if(cacheOn&&cache[cacheKey])return cache[cacheKey];reg.quickTest.lastIndex=0;if(reg.quickTest.test(selectorGroups)){elements=getContextFromSequenceSelector(selectorGroups,root,includeRoot,flat);return(cache[cacheKey]=elements.slice(0))}var groupsWorker,groups,selector,parts=[],part;groupsWorker=selectorGroups.split(/\s*,\s*/g);groups=groupsWorker.length>1?[""]:groupsWorker;for(var gwi=0,tc=0,gi=0,g;groupsWorker.length>1&&(g=groupsWorker[gwi++])!==undefined;){var l,r;tc+=(((l=g.match(/\(/g))?l.length:0)-((r=g.match(/\)/g))?r.length:0));groups[gi]=groups[gi]||"";groups[gi]+=(groups[gi]===""?g:","+g);if(tc===0)gi++}var gCount=0;while((selector=groups[gCount++])!==undefined){reg.quickTest.lastIndex=0;if(reg.quickTest.test(selector)){result=getContextFromSequenceSelector(selector,root,includeRoot,flat);elements=groups.length>1?elements.concat(result):result;continue}reg.combinatorTest.lastIndex=0;if(reg.combinatorTest.test(selector)){var parts,pLength,pCount=0,combinators,cLength,cCount=0,result;parts=selector.split(reg.combinator);pLength=parts.length;combinators=selector.match(reg.combinator)||[""];cLength=combinators.length;while(pCount<pLength){var c,part1,part2;c=combinators[cCount++].replace(reg.trim,"");part1=result||peppy.query(parts[pCount++],root,includeRoot,true,flat);part2=peppy.query(parts[pCount++],c==""||c==">"?part1:root,c==""||c==">",true,flat);result=peppy.queryCombinator(part1,part2,c)}elements=groups.length>1?elements.concat(result):result;result=undefined}else{result=peppy.querySelector(selector,root,includeRoot,flat);elements=groups.length>1?elements.concat(result):result}}if(groups.length>1)elements=filter(elements);return(cache[cacheKey]=elements.slice(0))},queryCombinator:function(l,r,c){var result=[],uids={},proc={},succ={},fail={},combinatorCheck=peppy.simpleSelector.combinator[c];for(var li=0,le;le=l[li++];){le.uid=le.uid||_uid++;uids[le.uid]=le}for(var ri=0,re;re=r[ri++];){re.uid=re.uid||_uid++;if(!proc[re.uid]&&combinatorCheck(re,uids,fail,succ)){result[result.length]=re}proc[re.uid]=re}return result},querySelector:function(selector,root,includeRoot,flat){var context,passed=[],count,totalCount,e,first=true,localCache={};context=getContextFromSequenceSelector(selector,root,includeRoot,flat);count=context.length;totalCount=count-1;var tests,recursive;if(/:(not|has)/i.test(selector)){recursive=selector.match(reg.recursive);selector=selector.replace(reg.recursive,"")}if(!(tests=selector.match(/:(\w|-)+(\([^\(]+\))*|\[[^\[]+\]/g)))tests=[];if(recursive)tests=tests.concat(recursive);var aTest;while((aTest=tests.pop())!==undefined){var pc=persistCache[aTest],testFuncScope,testFunc,testFuncKey,testFuncArgs=[],isTypeTest=false,isCountTest=false;passed=[];if(pc){testFuncKey=pc[0];testFuncScope=pc[1];testFuncArgs=pc.slice(2);testFunc=testFuncScope[testFuncKey]}else if(!/^:/.test(aTest)){var n=aTest.match(reg.attributeName);var v=aTest.match(reg.attributeValue);testFuncArgs[1]=n[1]||n[0];testFuncArgs[2]=v?v[1]:"";testFuncKey=""+aTest.match(/[~!+*\^$|=]/);testFuncScope=peppy.simpleSelector.attribute;testFunc=testFuncScope[testFuncKey];persistCache[aTest]=[testFuncKey,testFuncScope].concat(testFuncArgs)}else{var pa=aTest.match(reg.pseudoArgs);testFuncArgs[1]=pa?pa[1]:"";testFuncKey=aTest.match(reg.pseudoName)[1];testFuncScope=peppy.simpleSelector.pseudos;if(/nth-(?!.+only)/i.test(aTest)){var a,b,nArg=testFuncArgs[1],nArgPC=persistCache[nArg];if(nArgPC){a=nArgPC[0];b=nArgPC[1]}else{var nParts=nArg.match(reg.nthParts);if(nParts){a=parseInt(nParts[1],10)||0;b=parseInt(nParts[3],10)||0;if(/^\+n|^n/i.test(nArg)){a=1}else if(/^-n/i.test(nArg)){a=-1}testFuncArgs[2]=a;testFuncArgs[3]=b;persistCache[nArg]=[a,b]}}}else if(/^:contains/.test(aTest)){var cArg=testFuncArgs[1];var cArgPC=persistCache[cArg];if(cArgPC){testFuncArgs[1]=cArgPC}else{testFuncArgs[1]=persistCache[cArg]=new RegExp(cArg)}}testFunc=testFuncScope[testFuncKey];persistCache[aTest]=[testFuncKey,testFuncScope].concat(testFuncArgs)}isTypeTest=/:(\w|-)+type/i.test(aTest);isCountTest=/^:(nth[^-]|eq|gt|lt|first|last)/i.test(aTest);if(isCountTest)testFuncArgs[3]=totalCount;var cLength=context.length,cCount=cLength-1;while(cCount>-1){e=context[cCount--];if(first){e.peppyCount=cCount+1}var pass=true;testFuncArgs[0]=e;if(isCountTest)testFuncArgs[2]=e.peppyCount;if(!testFunc.apply(testFuncScope,testFuncArgs)){pass=false}if(pass){passed.push(e)}}context=passed;first=false}return passed},simpleSelector:{attribute:{"null":function(e,a,v){return!!getAttribute(e,a)},"=":function(e,a,v){return getAttribute(e,a)==v},"~":function(e,a,v){return getAttribute(e,a).match(new RegExp('\\b'+v+'\\b'))},"^":function(e,a,v){return getAttribute(e,a).indexOf(v)===0},"$":function(e,a,v){var attr=getAttribute(e,a);return attr.lastIndexOf(v)===attr.length-v.length},"*":function(e,a,v){return getAttribute(e,a).indexOf(v)!=-1},"|":function(e,a,v){return getAttribute(e,a).match('^'+v+'-?(('+v+'-)*('+v+'$))*')},"!":function(e,a,v){return getAttribute(e,a)!==v}},pseudos:{":root":function(e){return e===doc.getElementsByTagName("html")[0]?true:false},":nth-child":function(e,n,a,b,t){if(!e.nodeIndex){var node=e.parentNode.firstChild,count=0,last;for(;node;node=node.nextSibling){if(node.nodeType==1){last=node;node.nodeIndex=++count}}last.IsLastNode=true;if(count==1)last.IsOnlyChild=true}var position=e.nodeIndex;if(n=="first")return position==1;if(n=="last")return!!e.IsLastNode;if(n=="only")return!!e.IsOnlyChild;return(!a&&!b&&position==n)||((a==0?position==b:a>0?position>=b&&(position-b)%a==0:position<=b&&(position+b)%a==0))},":nth-last-child":function(e,n){return this[":nth-child"](e,n)},":nth-of-type":function(e,n,t){return this[":nth-child"](e,n,null,null,t)},":nth-last-of-type":function(e,n,t){return this[":nth-child"](e,n,null,null,t)},":first-child":function(e){return this[":nth-child"](e,"first")},":last-child":function(e){return this[":nth-child"](e,"last")},":first-of-type":function(e,n,t){return this[":nth-child"](e,"first",null,null,t)},":last-of-type":function(e,n,t){return this[":nth-child"](e,"last",null,null,t)},":only-child":function(e){return this[":nth-child"](e,"only")},":only-of-type":function(e,n,t){return this[":nth-child"](e,"only",null,null,t)},":empty":function(e){for(var node=e.firstChild,count=0;node!==null;node=node.nextSibling){if(node.nodeType===1||node.nodeType===3)return false}return true},":not":function(e,s){return peppy.query(s,e,true,true,true).length===0},":has":function(e,s){return peppy.query(s,e,true,true,true).length>0},":selected":function(e){return e.selected},":hidden":function(e){return e.type==="hidden"||e.style.display==="none"},":visible":function(e){return e.type!=="hidden"&&e.style.display!=="none"},":input":function(e){return e.nodeName.search(/input|select|textarea|button/i)!==-1},":radio":function(e){return e.type==="radio"},":checkbox":function(e){return e.type==="checkbox"},":text":function(e){return e.type==="text"},":header":function(e){return e.nodeName.search(/h\d/i)!==-1},":enabled":function(e){return!e.disabled&&e.type!=="hidden"},":disabled":function(e){return e.disabled},":checked":function(e){return e.checked},":contains":function(e,s){return s.test((e.textContent||e.innerText||""))},":parent":function(e){return!!e.firstChild},":odd":function(e){return this[":nth-child"](e,"2n+2",2,2)},":even":function(e){return this[":nth-child"](e,"2n+1",2,1)},":nth":function(e,s,i){return s==i},":eq":function(e,s,i){return s==i},":gt":function(e,s,i){return i>s},":lt":function(e,s,i){return i<s},":first":function(e,s,i){return i==0},":last":function(e,s,i,end){return i==end}},combinator:{"":function(r,u,f,s){var rUID=r.uid;while((r=r.parentNode)!==null&&!f[r.uid]){if(!!u[r.uid]||!!s[r.uid]){return(s[rUID]=true)}}return(f[rUID]=false)},">":function(r,u,f,s){return r.parentNode&&u[r.parentNode.uid]},"+":function(r,u,f,s){while((r=r.previousSibling)!==null&&!f[r.uid]){if(r.nodeType===1)return r.uid in u}return false},"~":function(r,u,f,s){var rUID=r.uid;while((r=r.previousSibling)!==null&&!f[r.uid]){if(!!u[r.uid]||!!s[r.uid]){return(s[rUID]=true)}}return(f[rUID]=false)}}}};if(doc.querySelectorAll){(function(){var oldpeppy=peppy.query;peppy.query=function(sel,context){context=context||doc;if(context===doc){try{return context.querySelectorAll(sel)}catch(e){}}return oldpeppy.apply(oldpeppy,arrayIt(arguments))}})()}else{var aEvent=doc.addEventListener||doc.attachEvent;function clearCache(){cache={}}aEvent("DOMAttrModified",clearCache,false);aEvent("DOMNodeInserted",clearCache,false);aEvent("DOMNodeRemoved",clearCache,false)}OptimusRule.prototype.query_by_selector=function(){try{return peppy.query.apply(peppy,arguments)}catch(e){if(typeof console!='undefined'){console.log("Error processing selector: "+arguments[0])}return[]}}})();;bcp();;var GTKPR_INCLUDE_FIREBCP_FPC_FUNCTS})();
