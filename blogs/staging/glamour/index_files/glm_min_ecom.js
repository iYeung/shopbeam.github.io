/*!
* @version ecomfw.js v2.6.3:1101 01.11.2010
* @author Paul Bronshteyn
* @author Russell Munson
* @comment Built by a geek loaded on caffeine ...
* @copyright (c) Conde Nast Digital
*/
if(typeof window.CNP==="undefined"||!window.CNP){window.CNP={}}CNP.ecom=(function(){var ac="ecom",X=null,q=null,k=true,R=false,M={idx:0},ae="",p=[],G=document,y=location,s=y.search,am=ac+"_test",U="ecommerce_test_site",Q=0,v=false,I="Please enter a valid ",W=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,ak=/(^\d{5}$)|(^\d{5}-\d{4}$)/,S=navigator.userAgent.toLowerCase(),f={safari:/webkit/.test(S),opera:/opera/.test(S),msie:/msie/.test(S)&&!/opera/.test(S),moz:/mozilla/.test(S)&&!/(compatible|webkit)/.test(S)},F=((f.moz||f.safari)?"offset":"scroll")+"Height",V={},z=function(){var an=document;return Math.max(Math.max(an.body.scrollHeight,an.documentElement.scrollHeight),Math.max(an.body.offsetHeight,an.documentElement.offsetHeight),Math.max(an.body.clientHeight,an.documentElement.clientHeight))},af=function(an){var aq,ap,ao=jQuery(window);if(e(ac+"usc")){aq=e(ac+"usc")}else{aq=A("div");aq.id=ac+"usc"}if(e(ac+"usf")){ap=e(ac+"usf")}else{ap=A("iframe");ap.id=ac+"usf"}G.body.style.overflow="hidden";aa(aq.style,{width:G.body.scrollWidth+"px",height:z()+"px",filter:"alpha(opacity = 80)",opacity:".80",zIndex:110000000,position:"absolute",left:"0px",top:"0px",background:"#000000"});P(G.body,aq,"ap");ab(true);aa(ap,{name:ac+"usf",src:h(g(an).replace(/^https*:\/\//g,x()),"iframe","true"),width:749,height:669,scrolling:"no"});aa(ap.style,{background:"#ffffff",border:"0px",position:"absolute",zIndex:120000000,left:(ao.width()/2-ap.width/2)+"px",top:(ao.scrollTop()+(ao.height()/7))+"px"});P(G.body,ap,"ap");j("load",ap,function(){try{this.height=this.contentDocument.body[F]+"px"}catch(ar){}});j("resize",window,function(){var at=e(ac+"usc"),ar=e(ac+"usf");at.style.width=G.body.scrollWidth+"px";at.style.height=G.body.scrollHeight+"px";ar.style.left=(ao.width()/2-ar.width/2)+"px";ar.style.top=(ao.scrollTop()+(ao.height()/7))+"px"});aq=ap=null},A=function(ao,an){return(an||G).createElement(ao)},e=function(ao,an){return(an||G).getElementById(ao)},l=function(an,ao){return(ao||G).getElementsByTagName(an)||[]},P=function(ao,ap,an){(an==="rm"?ao.removeChild(ap):(an==="ap"?ao.appendChild(ap):false))},c=function(ao,an){ao.style.display=(an==="hide"?"none":"block")},Z=function(ao,an){ao.innerHTML=an},ab=function(aq){var ap=l("select"),ao=0,an=ap.length;for(;ao<an;ao++){ap[ao].style.visibility=(aq)?"hidden":""}},g=function(ao,an){return(an)?encodeURIComponent(ao):decodeURIComponent(ao)},o=function(an){return(an&&an.firstChild)?an.firstChild.nodeValue:""},h=function(ap,aq,ao){if((a(ap)&&ao==null)||a(aq)){return""}var an=new RegExp("(^|[?=&|]+)"+aq+"=([^&|]*)(&|$)?","i"),ar=ap.match(an);if(ao==null){return(ar||"")[2]||""}if(ar){return ap.replace(an,(a(ao)?"":"$1"+aq+"="+ao))}else{return ap+=(ap.match(/\?/)?"&":"?")+aq+"="+ao}},ai=function(an){if(M[an].fid){try{M[an].fid.frameElement.style.height=M[an].doc.body[F]+"px"}catch(ao){}}},j=function(an,ao,ap){if(ao.attachEvent){ao.attachEvent("on"+an,ap)}else{ao.addEventListener(an,ap,false)}ao=null},E=function(an,ao,ap){if(ao.detachEvent){ao.detachEvent("on"+an,ap)}else{ao.removeEventListener(an,ap,false)}ao=null},x=function(){return(location.protocol==="https:"||aj.https)?"https://":"http://"},w=function(){var ao=location.hostname.split(":")[0].split("."),an=ao.length;return ao.slice(an-2,an).join(".")},N=function(){return h(O.get("amg_user_record"),"uid")},D=function(){var an=y.pathname.split("/")[1]||"";return((an!==""?an.match(/^[^\.]*$/):["homepage"])||[""])[0]},ad=function(){q=A("img");j("load",q,d);j("error",q,T);j("abort",q,T);q.src=aj.host+aj.pingPath+"?ts="+(new Date()).getTime()+((aj.user)?"&amgUserId="+aj.user:"")+"&parent.referrer="+g(G.referrer,true);X=setTimeout(T,aj.timeout*1000)},J=function(){clearTimeout(X);E("load",q,d);E("error",q,T);E("abort",q,T);q=null},d=function(){if(!k){return}J();R=true;if(aj.callalive){Y(aj.callalive)}for(var an;an=p.shift();){al(an)}},T=function(){J();k=R=false;p=M=null;if(aj.calldead){Y(aj.calldead)}},u=function(ap,ar,aq,ao){aq=aa(aq,{"js.enc":(aj.jsEnc==="jsesc"?"jsesc":true),encType:M[ap].enc,"js.callback":((M[ap].fid)?"parent.":"")+"CNP.ecom.response","js.reqId":ap,tgt:M[ap].tgt});var an=A("script");an.type="text/javascript";an.id=ac+ap+((ao)?ao:"");an.src=aj.host+ar+"?ts="+(new Date()).getTime()+"&"+i(aq);P(M[ap].p,an,"ap");an=null},n=function(an){var ao=e(ac+an);if(ao){P(M[an].p,ao,"rm")}ao=null},al=function(an){if(aj.user){M[an].params.amgUserId=aj.user}if(aj.section){M[an].params.section=aj.section}if(M[an].callbefore){Y(M[an].callbefore,M[an].fid)}u(an,aj.offerPath,M[an].params)},Y=function(ao,an){ao.func=ao.func||"";ao.params=ao.params||{};an=an||window;if(typeof ao.func==="function"){ao.func.call(this,ao.params)}else{if(typeof an[ao.func]==="function"){an[ao.func].call(this,ao.params)}}},i=function(ap){var ao=[],an;for(an in ap){ao.push(an+"="+g(ap[an],true))}return ao.join("&")},O={get:function(ao){var aq=G.cookie.split("; "),ap=[],ar=0,an=aq.length;for(;ar<an;ar++){ap=aq[ar].split("=");if(ap[0]===ao){return g(ap.slice(1).join("="))}}return""},del:function(an){return this.set(an,"",{expires:-1})},set:function(ao,aq,an){an=an||{};aq=aq||"";if(an.expires){an.expires=an.expires instanceof Date?an.expires.toUTCString():typeof an.expires==="number"?(new Date(+(new Date)+an.expires*60*60*1000)).toUTCString():""}an.path="/";an.domain=aj.domain;var ap=[ao+"="+g(aq,true)];if(an.expires){ap.push("expires="+an.expires)}if(an.path){ap.push("path="+an.path)}if(an.domain){ap.push("domain="+an.domain)}if(an.secure){ap.push("secure")}return an.secure&&ap.push("secure"),G.cookie=ap.join(";"),true}},aa=function(an,ap){for(var ao in ap){an[ao]=ap[ao]}return an},b=function(ao){ao=ao||"";var ap=-1,an=ao.length;while(ao.charCodeAt(--an)<33){}while(++ap<an&&ao.charCodeAt(ap)<33){}return ao.slice(ap,an+1)},a=function(an){return !/\S/.test(an||"")},ah={required:function(an){return{res:!a(an),msg:this.title+" is required"}},email:function(an){return{res:a(an)||W.test(an),msg:I+"email address"}},zipcode:function(an){return{res:a(an)||ak.test(an),msg:I+"zipcode"}}},K=function(ap,ao,an){return function(){var ar=e(ap.name+"_err_"+an),aq={},au=0,at=ao.length;for(;au<at;au++){aq=ah[ao[au]].call(ap,ap.value);if(!aq.res){Z(ar,aq.msg);c(ar);break}c(ar,"hide")}ai(an);return aq.res}},m=function(aq){if(!aq){return{}}var an={},ap=aq.elements,at,ar=0,ao=ap.length;for(;ar<ao;ar++){at=ap[ar];if(at.tagName!=="FIELDSET"&&at.type!=="submit"){an[at.name]=at.value}}return an},C=function(ay){var an=l("form",M[ay].p)[0],ap=an.elements,at=0,ao=ap.length;if(!an||!ao){return false}M[ay].fh=[];for(;at<ao;at++){var ax=[],au=ap[at],aq=(au.className)?au.className.split(/\s/):[],av=0,aw=aq.length;if(!aw){continue}if(au.type==="submit"){M[ay].btn=au;continue}for(;av<aw;av++){if(aq[av] in ah){ax.push(aq[av])}}if(ax.length){var ar=new K(au,ax,ay);M[ay].fh.push(ar);j("blur",au,ar)}}j("submit",an,function(aC){if(aC.cancelable){aC.preventDefault()}aC.returnValue=false;var aB=true,aA=0,az=M[ay].fh.length;for(;aA<az;aA++){aB&=M[ay].fh[aA]()}if(aB){M[ay].btn.disabled="disabled";M[ay].btn.value="Processing";u(ay,aj.subPath,m(aC.srcElement||aC.target));M[ay].frmto=setTimeout(function(){an.reset();M[ay].btn.disabled="";M[ay].btn.value="Submit";var aD=e("frm_error_"+ay,M[ay].doc);Z(aD,"There was an error processing your order.<br />Please try again.");c(aD)},5000)}return false})},r=function(aq){var ap=l("input",M[aq].p),ao=0,an=ap.length,ar=h(s,"as"),at;for(;ao<an;ao++){at=ap[ao];if(at.value===ar&&!at.checked){at.checked=true;L.apply(at,[at])}if(at.type!=="hidden"){j("change",at,L)}}},L=function(ao){var ap=ao.srcElement||ao.target||ao,an=ap.form.action.split("?");an[1]=((!an[1])?"":"?"+an[1]);ap.form.action=an[0]+h(an[1],"as",ap.checked?ap.value:0)},t=function(an,ap){var ao=ap.match(/mboxCreate\(([^\)]*)\)/)[1];if(!ao||typeof mbox!=="function"){return}M[an].p.firstChild.className="";j("load",self,function(){H(an,ao)})},H=function(ao,ap){var an=A("div"),ar=ap.replace(/'/g,"").split(","),aq;an.id="tempmbox"+ao;c(an,"hide");P(M[ao].p,an,"ap");ar.unshift(an.id);aq=mboxDefine.apply(this,ar);aq.w.addParameter("rid",ao);aq.setFetcher(new mboxAjaxFetcher());aq.getUID=function(){var av=this.w.getParameters(),au=0,at=av.length;for(;au<at;au++){if(av[au].name==="rid"){return av[au].value}}return 0};ar.shift();mboxUpdate.apply(this,ar);an=null},B={s:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d:function(ar){var aq,an="",ap=0,ao=ar.length;for(;ap<ao;ap+=4){aq=(this.s.indexOf(ar.charAt(ap))&255)<<18|(this.s.indexOf(ar.charAt(ap+1))&255)<<12|(this.s.indexOf(ar.charAt(ap+2))&255)<<6|this.s.indexOf(ar.charAt(ap+3))&255;an+=String.fromCharCode((aq&16711680)>>16,(aq&65280)>>8,aq&255)}if(ar.charCodeAt(ap-2)===61){return an.substring(0,an.length-2)}else{if(ar.charCodeAt(ap-1)===61){return an.substring(0,an.length-1)}else{return an}}}},ag=function(){var ao=A("div"),an=A("a");ao.id=am;Z(ao,"!!! ATTENTION !!! YOU ARE USING ECOM PREVIEW SERVER !!! ATTENTION !!!<br />");aa(ao.style,{zIndex:100000000,backgroundColor:"#FFD700",color:"#809000",padding:"4px",fontWeight:"bold",textAlign:"center",border:"1px solid #333",marginBottom:"10px",position:"fixed",width:"100%",top:"0px"});Z(an,"[ return to normal mode ]");an.href="#";P(ao,an,"ap");P(G.body,ao,"ap");j("click",an,function(ap){O.del(am);P(G.body,(ap.srcElement||ap.target).parentNode,"rm");y.search=h(s,U,"");return false});ao=an=null},aj={pingPath:"status.jsp",offerPath:"targetedOffer.jsp",subPath:"embeddedForm.jsp",showPath:"showOffer.jsp",docDomain:true,domain:w(),host:"magazine."+this.domain,path:"/ecom/",user:N(),section:D(),timeout:2,https:false,callback:null,params:{},cdn:false,onload:false,contentEnc:"xml",jsEnc:"true"};return{start:function(an){if(h(s,"nojoy")==="1"){return k=R=false}for(var ap in aj){aj[ap]=h(s,ac+ap)||(an||{})[ap]||aj[ap]}if(aj.cdn===false){var ao=h(s,U)||O.get(am)||"";if(ao){O.set(am,ao);j("load",self,ag);aj.host=ao}else{O.del(am)}}else{O.del(am)}if(aj.docDomain&&aj.domain){G.domain=aj.domain}aj.host=x()+aj.host.replace(/^https*:\/\/|\/+$/g,"")+aj.path;ad();j("load",self,function(){mboxCreate=function(){return false};if(h(s,"ecomupsell")==="true"){af(g(h(s,"ecomupsellurl")).replace(/^https*:\/\//g,x()))}if(aj.onload){aj.onload=false;for(var aq;aq=p.shift();){al(aq)}}});ae=h(s,"nojoytgt");Q=(h(s,"edebug")==="1")?1:0;if(Q){v=h(s,"targetVer")||false}},mbox:function(ao,an){if(typeof ao.getUID==="function"){u(ao.getUID(),aj.showPath,{placementId:an},"mbox")}},setCallback:function(ao){var an=ao.name;for(var ap=0;ap<ao.callback.length;ap++){if(!V[an]){V[an]=[]}V[an].push(ao.callback[ap])}},closeiframe:function(){G.body.style.overflow="visible";c(e(ac+"usf"),"hide");c(e(ac+"usc"),"hide");ab(false);setTimeout(function(){P(G.body,e(ac+"usf"),"rm");P(G.body,e(ac+"usc"),"rm")},2000)},openiframe:function(an){if(!an){return}af(an)},request:function(an){if((!k&&!R)||ae.indexOf(an.pid)!==-1){return}an=an||{};an.doc=(an.fid)?an.fid.document:G;an.p=e(an.pid,an.doc);an.params=an.params||{};if(v){an.params.targetVer=v}if(!an.p){return}an.enc=an.enc||aj.contentEnc;M[++M.idx]=an;if(!R||aj.onload){return p.push(M.idx)}al(M.idx)},response:function(ay,ap){if(typeof M[ay]==="undefined"||a(ap)){return}M[ay].code=ap;var au=b((aj.jsEnc==="jsesc"?unescape(ap):B.d(ap))),az=null;if(a(au)){return}if(M[ay].enc==="xml"){if(typeof DOMParser==="function"||typeof DOMParser==="object"){az=(new DOMParser()).parseFromString(au,"text/xml");if(az.documentElement.nodeName==="parsererror"){return}}else{az=new ActiveXObject("Microsoft.XMLDOM");az.async="false";az.loadXML(au);if(az.parseError.errorCode!==0){return}}if(!az){return}if(l("targetedOffer",az)[0]){var at=b(o(l("content",az)[0])),ao=(at.match(/<script(?:[^>]*src=["']([^"']*)["'][^>]*|[^>]*)>([\s\S]*?)<\/script>/i)||[null,null,null]);js_scr=ao[1],js_txt=b(ao[2]);if(a(at)){return}Z(M[ay].p,at.replace(/<script(.|\s)*?\/script>/g,""));switch(o(l("placementType",az)[0])){case"Banner":case"Link":if(!(js_scr||js_txt)){break}var aw=A("script");aw.type="text/javascript";aw.id=ac+"js"+ay;if(js_txt){if(f.msie){aw.text=js_txt}else{P(aw,G.createTextNode(js_txt),"ap")}}else{aw.src=js_scr}P(M[ay].p,aw,"ap");aw=null;break;case"embeddedForm":C(ay);break;case"autoSub":r(ay);break;case"testPlacement":case"testPlacement_Banner":case"testPlacement_Link":t(ay,ao);break;case"testPlacement_autoSub":t(ay,ao);r(ay);break;case"testPlacement_embeddedForm":t(ay,ao);C(ay);break}if(M[ay].callafter){Y(M[ay].callafter,M[ay].fid)}}else{if(l("response",az)[0]){clearTimeout(M[ay].frmto);var ar=e("frm_error_"+ay,M[ay].doc);if(l("errors",az)[0]){var an="",ax=l("error",az),av=0,aq=ax.length;for(;av<aq;av++){an+=o(l("errorMessage",ax[av])[0])+"<br />"}Z(ar,an);c(ar)}else{c(ar,"hide");Z(ar,"");if(l("ccUpsellPage",az)[0]){af(o(l("ccUpsellPage",az)[0]).replace(/^https*:\/\//g,x()))}l("form",M[ay].p)[0].reset()}M[ay].btn.disabled="";M[ay].btn.value="Submit"}}}else{Z(M[ay].p,ap)}ai(ay);n(ay)},displayCmPlacement:function(ao){if((typeof pageAds!="undefined")&&(typeof pageAds[ao]!="undefined")&&(CN.url.params("nojoy")!=1)){var an=document.getElementById(ao);an.innerHTML=pageAds[ao]}else{}},displayEcomErrors:function(){var aq=jQuery("#country").val(),ap=jQuery("input[name=offer_id]:checked").val(),an=jQuery("input[id=subscribeY]:checked").val(),ar=CN.site.tld,ao='<div id="nonus"><p> We apologize for the inconvenience but we cannot automatically process subscriptions with a Canadian or International address from our registration forms.</p><p> Please <a href="http://www.'+ar+'/subscribe" style="color:#000000;" target="_blank">click here</a> to have your subscription sent to a non-U.S. address.</p><p> If you supplied a country other than the United States by accident, please fill out your U.S. address below and click Submit.</p></div>';if(ap=="undefined"||ap==undefined){if(aq!="US"&&an=="SUBSCRIBED"){jQuery("#nonus").show();if(jQuery("#nonus").size()==0){jQuery("#sweepSignup").prepend(ao)}jQuery("html, body").animate({scrollTop:0},"fast");return false}else{jQuery("#nonus").hide();return true}}if(aq!="US"&&ap!="0"){jQuery("#nonus").show();if(jQuery("#nonus").size()==0){jQuery("#sweepSignup").prepend(ao)}jQuery("html, body").animate({scrollTop:0},"fast");return false}else{jQuery("#nonus").hide();return true}},messageHandler:function(an){if(an.data=="closeIframe"){CNP.ecom.closeiframe()}}}})();if(window.addEventListener){window.addEventListener("message",CNP.ecom.messageHandler,false)}else{if(window.attachEvent){window.attachEvent("onmessage",CNP.ecom.messageHandler);
/*!
* @file magnet.ecom.js
* @author Paul Bronshteyn
* @comment Built by a geek loaded on caffeine ...
* @copyright (c) Conde Nast Digital
*/
}}if(typeof window.CN==="undefined"){window.CN={}}CN.ecom=CN.ecom||{};CN.ecom.rolloverAd=(function(k){var m=true,j="rolloverAd",b={},h={},n=10,c,l={rolloverAd:false},f=0,i=0,e=function(p,r){if(l[r]){return}l[r]=true;h[r]=k(p.target);var q=h[r].offset();b[r].css({top:(q.top+h[r].height()+f),left:(q.left+i)}).show();c=setTimeout(function(){g(p,r)},n*1000);k(window).bind("resize",{id:r},a)},a=function(p){var q=h[p.data.id].offset();b[p.data.id].css({top:(q.top+h[p.data.id].height()+f),left:(q.left+i)})},g=function(q,r){var p;if(!r&&!q){for(p in b){b[p].hide();l[p]=false}}else{r=r||q.data.id;b[r].hide();l[r]=false}d()},o=function(p){g(p);if(!p.target.href||p.target.href.indexOf("#")>-1){p.stopImmediatePropagation();return false}},d=function(p){clearTimeout(c)};return{init:function(q){q=q||j;if(m){k("#"+q+"_show,#logo-link-a,.showForm,#global_navBar a,#header-subscribe a").live("mouseover",function(r){e(r,q)});b[q]=k("#"+q);l[q]=false;var p=b[q].bind("click mousedown keypress",d).find("form");b[q].find("#"+q+"_header,#"+q+"_footer").bind("mousedown",d).find("a").bind("click",{id:q},o);if(p.length){p.bind("reset",{id:q},g)}else{b[q].find("#"+q+"_content a").bind("click",{id:q},g)}}return this},setRollover:function(p){m=p===true;return this},closeAd:g,setOffset:function(q,p){f=CN.utils.intval(q);i=CN.utils.intval(p);return this},timeout:function(p){n=CN.utils.intval(p)||n;return this}}})(jQuery);CN.ecom.collapseAd=(function(k){var m=true,j="collapseAd",b={},h={},n=10,c,l={collapseAd:false},f=0,i=-15,e=function(p,r){if(l[r]){return}jQuery(p.currentTarget).addClass("show-ad");l[r]=true;h[r]=k(p.target);var q=h[r].offset();b[r].css({top:41,left:jQuery(p.currentTarget).offset().left+i}).show();c=setTimeout(function(){g(p,r)},n*1000);k(window).bind("resize",{id:r},a)},a=function(p){var q=h[p.data.id].offset();b[p.data.id].css({top:(q.top+h[p.data.id].height()+f),left:(q.left+i)})},g=function(q,r){var p;if(!r&&!q){for(p in b){b[p].hide();l[p]=false}}else{r=r||q.data.id;b[r].hide();l[r]=false}jQuery(".show-ad").removeClass("show-ad");d()},o=function(p){g(p);if(!p.target.href||p.target.href.indexOf("#")>-1){p.stopImmediatePropagation();return false}},d=function(p){clearTimeout(c)};return{init:function(q){q=q||j;if(m){k(".subscribe-promo a").live("mouseover",function(r){e(r,q)});b[q]=k("#"+q);l[q]=false;var p=b[q].bind("click mousedown keypress",d).find("form");b[q].find("#"+q+"_header,#"+q+"_footer").bind("mousedown",d).find("a").bind("click",{id:q},o);if(p.length){p.bind("reset",{id:q},g)}else{b[q].find("#"+q+"_content a").bind("click",{id:q},g)}}return this},setRollover:function(p){m=p===true;return this},closeAd:g,setOffset:function(q,p){f=CN.utils.intval(q);i=CN.utils.intval(p);return this},timeout:function(p){n=CN.utils.intval(p)||n;return this}}})(jQuery);CN.ecom.videoRolloverAd=(function(c){var j=true,a,g,k=10,b,i=false,e=0,h=0,d=function(){if(i){return}i=!i;g=jQuery(this);var m=g.offset();a.show("slow");b=setTimeout(f,k*1000)},f=function(){a.hide("slow");clearTimeout(b);i=!i},l=function(m){f();if(!this.href||this.href.indexOf("#")>-1){m.stopImmediatePropagation();return false}};return{init:function(){if(j){jQuery("#video_utilities").live("mouseover",d);a=jQuery("#videoRolloverAd");var m=a.bind("click mousedown keypress",function(){clearTimeout(b)}).find("form");jQuery("#videoRolloverAd_header,#videoRolloverAd_footer",a).bind("mousedown",function(){clearTimeout(b)}).find("a").bind("click",l);if(m.length){m.bind("reset",f)}else{jQuery("#videoRolloverAd_content a",a).bind("click",l)}}return this},setRollover:function(m){j=m;return this},setOffset:function(n,m){e=c.utils.intval(n);h=c.utils.intval(m);return this},timeout:function(m){k=c.utils.intval(m)||k;return this}}})(CN);CN.ecom.floatingAd=(function(b){var a,e=15,g,d=function(){a.show();g=setTimeout(f,e*1000)},f=function(){a.hide();clearTimeout(g)},c=function(h){f();if(!this.href||this.href.indexOf("#")>-1){h.stopImmediatePropagation();return false}};return{init:function(){jQuery(function(){a=jQuery("#floatingAd");if(!a.length){return this}var h=a.bind("click mousedown keypress",function(){clearTimeout(g)}).find("form");jQuery("#floatingAd_header",a).bind("mousedown",function(){clearTimeout(g)}).find("a").bind("click",c);if(h.length){h.bind("reset",f)}else{jQuery("#floatingAd_content a",a).bind("click",function(i){i.stopImmediatePropagation();f()})}d()});return this},timeout:function(h){e=b.utils.intval(h)||e;return this}}})(CN);CN.ecom.interstitialAd=(function(c){var a,i,h=7,b,g=CN.site.domain,f,d=function(){jQuery("#interstitialAd,#interstitialAdBg").appendTo("body");a.centerAd();a.show();i.show();b=setTimeout(e,h*1000)},e=function(){a.hide();i.hide();clearTimeout(b)};return{init:function(){jQuery(function(){jQuery("#interstitialAd").click(function(){clearTimeout(b)});jQuery("#interstitialAdBg,#interstitialAd #decline,#interstitialAd .skip input,#interstitialAd #signup").click(function(){e()})});return this},setAdParameters:function(l,k,j){CN.ecom.interstitialAd.init();a=jQuery("#interstitialAd");i=jQuery("#interstitialAdBg");jQuery("#interstitial-called").val("true");f=CN.cookie.get("interstitialAd");if(f!="true"&&l!="false"){CN.cookie.set("interstitialAd","true",{expires:7,path:"/",domain:g});if(l=="true"){d()}else{if((jQuery("body").hasClass("home"))){if(k=="true"){d()}}else{if((!jQuery("body").hasClass("home"))){if(j=="true"){d()}}}}return this}else{return 0}}}})(CN);jQuery.fn.centerAd=function(){this.css({position:"fixed",left:"50%",top:"50%","margin-left":-this.width()/2+"px","margin-top":-this.height()/2+"px"});return this};jQuery(document).ready(function(){if(jQuery("#interstitialAdDefault").val()=="false"){CN.ecom.interstitialAd.setAdParameters("true","","")}});CN.validateRegistration=(function(){var a,b=window.location.href;return{checkSuccessURL:function(){if(CN.url.params("ecomUpsell",b)=="true"){a=decodeURIComponent(decodeURIComponent(CN.url.params("ecomUpsellURL",b)));a=a.replace(/^https*:\/\//g,window.location.protocol+"//");var c=CN.config.get("isiFrame");if(c==true){CNP.ecom.openiframe(a)}else{window.open(a,"PaymentPage","menubar=1,status=0,resizable=0,toolbar=0,scrollbars=0,width=910,height=560,left="+((screen.width)/3)+",top="+((screen.height)/3))}}}}})();CN.hearstQue=(function(){var b=[],c=false,a=0;return{register:function(d){if(!d){return}b.push(d);if(c){this.run(window.pageAds)}},getQue:function(){return b},run:function(d){while(b.length>0){b[0](d);b.shift()}c=true}}})();jQuery(document).ready(function(){CN.validateRegistration.checkSuccessURL()});