var _w=window,BAP=BAP||function(){function da(a){var f,c,d={};try{if(k._bab){f=k._bab;k._bab=C;for(c=0;c<f[u];c++)da(f[c])}}catch(h){}if(a){if(a.uqid){if(f=a.uqid,b[f])return}else return;try{for(c in a)a.hasOwnProperty(c)&&(d[c.toLowerCase()]=a[c]);a=d}catch(g){}if(a.ad_oas)try{a.ad_oas=a.ad_oas.toLowerCase(),a.ad_wxh=a.ad_oas.replace("width=","").replace("height=","").replace(" ","x")}catch(e){}if(a.ad_wxh)try{a.ad_wxh=a.ad_wxh.toLowerCase(),a.ad_w=a.ad_w||a.ad_wxh.split("x")[0],a.ad_h=a.ad_h||a.ad_wxh.split("x")[1]}catch(j){}if(!a.ad_w||
!a.ad_h){U(a,13);return}if(!r(a.ad_w)||!r(a.ad_h)){U(a,15);return}if(15>a.ad_h&&20>a.ad_w){U(a,14);return}if(!a.coid){U(a,9);return}a.nid=a.nid.toString().match(/\d/g).join("");a.ecaid&&(a.ecaid=a.ecaid.split("%")[0]);E[f]=a.nid;d="n/"+a.coid+"/"+a.nid;b[f]=a;if(!Fa&&(a.check_container&&"true"==a.check_container||/^(1525|4501|7420|8573)$/.test(a.nid)))c=v.createElement("script"),c.src=F+"/a/e.js",p.appendChild(c);d?ea[a.nid]||(fa++,c=v.createElement("script"),c.src=$a+d+".js",p.appendChild(c)):(delete b[f],
U(a,11));try{m("bap-pixel-"+f).style.display="none"}catch(l){}}else U(C,10);546==a.nid&&(a.delay_start=1);ga?ga&&ha&&(ha=!1,aa()):(c=function(){ga=!0;a.delay_start?M(aa,1E3*a.delay_start):aa()},"complete"===v.readyState?c():ia(window,"load",c),V&&clearTimeout(V),V=M(aa,5E3))}function P(a){try{delete b[a];var f=m("bap-pixel-"+a);f&&f.parentNode.removeChild(f);(f=m("trigger-container-"+a))&&f.parentNode.removeChild(f)}catch(c){}}function aa(){function a(a,c,f){for(f in k.bap_overrides[c])b[a].hasOwnProperty(f)&&
(b[a][f]=k.bap_overrides[c][f])}if(0!=fa)M(function(){fa=0;aa()},500);else if(!ha){ha=!0;k.bap_skip&&(Q=Q.concat(bap_skip));var f=[],c,d,h=!1;pa=!(!m("abgc")||!k.abgp);try{for(var g=v.getElementsByTagName("iframe"),e=0;e<g[u];e++)qa[e]=g[e],I("BAPTANGO?|"+e,g[e]);Ga("COMMON");for(pageId in b)f.push([pageId,b[pageId].order]);f.sort(function(a,b){return a[1]-b[1]});for(d=0;d<f[u];d++)if(pageId=f[d][0],!b[pageId].processed)if(ea[b[pageId].nid]){ab(pageId,b[pageId].nid);for(c=0;c<Q[u];c++){if(Q[c]==b[pageId].nid||
Q[c]==b[pageId].nid+"|"+pageId||Q[c]=="size|"+b[pageId].ad_w+"x"+b[pageId].ad_h){P(pageId);h=!0;break}h=!1}if(!h)if(k.bap_546_h&&546==b[pageId].nid)P(pageId);else{k.bap_amzn&&(b[pageId].amzn=1);k.bap_overrides&&k.bap_overrides.hasOwnProperty(b[pageId].nid)&&a(pageId,b[pageId].nid);k.bap_overrides&&k.bap_overrides.hasOwnProperty(b[pageId].nid+"|"+pageId)&&a(pageId,b[pageId].nid+"|"+pageId);pa&&(b[pageId].position="top-right",b[pageId].icon_display="expandable",b[pageId].server={name:"Google"},b[pageId].ad_z=
9011,m("abgc").style.display="none");for(var g=pageId,j=e=void 0,l=void 0,n=b[g].ad_h,R=b[g].ad_w,S=m("bap-pixel-"+g),q=v.getElementsByTagName("*"),l=0;l<q[u];l++)S==q[l]&&(b[g].proximityId=l);if(Ha&&J()[0]==n&&J()[1]==R)l=5;else if(0<ba.indexOf("mail.yahoo.com")&&1==v.getElementsByTagName("object")[u]&&y.IE)e=v.getElementsByTagName("object")[0],l=4.1;else if(b[g].container&&(e=m(b[g].container))||"true"==b[g].check_container&&(e=S.parentNode))l=8,"true"==b[g].check_container?Ha&&0!=(j=Ia(J()[0],
J()[1]))?(b[g].ad_h=J()[0],b[g].ad_w=J()[1],b[g].ns=j,e=C,l=5):(e=Y(e,n,R)||e,e=ra(e,g)):(l=9,e=ca(Y(e,n,R))||e);else if(e=Ja(S.previousSibling,n,R,1))l=3;else{var s;if(s=0<ba.indexOf("yahoo.com")){for(var j=R,w=n,x=void 0,t=C,N=v.getElementsByTagName("img"),x=0;x<N[u];x++)if(N[x].height||N[x].getAttribute("height"))if(N[x].width||N[x].getAttribute("width"))N[x].height==w&&N[x].width==j?t=N[x]:r(N[x].getAttribute("height"))==w&&r(N[x].getAttribute("width"))==j&&(t=N[x]);s=e=t}if(s)l=4.2;else if(e=
Ka(b[g].proximityId,R,n,S))l=7;else{l=6;try{m("bap-pixel-"+g).style.display=""}catch(z){}}}if(5!=l&&/^(1525|4501|7420|8573)$/.test(b[g].nid))try{e=Y(S.parentNode,n,R)||e,e=ra(e,g),3!=l&&(l=4)}catch(D){}if(3==l||7==l)e=La(e,n,R);0<=ba.indexOf("l.yimg.com")&&y.Chrome&&(l=6);b[g].dm=l;b[g].ad=e;b[g].px=S;try{b[g].ad_z=b[g].ad_z||Ma(e)}catch(A){}5===l&&(b[g].ad_z=1E5);6!=l&&S.parentNode.removeChild(S);for(c=0;c<Q[u];c++){if(Q[c]=="size|"+b[pageId].ad_w+"x"+b[pageId].ad_h){P(pageId);h=!0;break}h=!1}if(!h){var G=
b[pageId],K;var B=b[pageId].ad_w,H=b[pageId].ad_h;K=728<=B&&990>=B&&90<=H&&125>=H?!1:160==B&&600==H?!1:190>B||145>H;G.mini=K;90>b[pageId].ad_w&&(b[pageId].icon_display="icon");var O;if(O=b[pageId].adi){var g=pageId,x=w=j=l=e=void 0,L=b[g].adi.split(",");try{if(5==b[g].dm)for(j in L){if(0<v.location.href.indexOf("/"+L[j]+"/")){l=!0;break}}else for(e=b[g].ad.parentNode;;){for(w=0;w<e.children[u];w++)if(x=e.children[w],x.src)for(j in L)if(0<x.src.indexOf("/"+L[j]+"/")){l=!0;break}if(l)break;e=e.parentNode;
if(!e||!e.children)break}}catch(da){}O=!l}if(O)P(pageId);else if(b[pageId].ad&&"none"==b[pageId].ad.style.display)P(pageId);else if(8==b[pageId].dm&&!b[pageId].ad.ds)P(pageId);else{var e=g=pageId,W=b[e].ad;if(W&&!W.notice)W.notice=e;else if(W&&W.notice!=e)b[e].noticeExists=!0,E[W.notice]!=E[e]&&sa(W.notice,e);else if(5==b[e].dm)if(k.notice)b[e].noticeExists=!0,E[k.notice]!=E[e]&&sa(k.notice,e);else try{k.notice=e,b[e].ad={nodeName:"EXACT-FRAME"},k.bap_frameid?I("BAPFRAME|"+E[e]+"|"+k.bap_frameid):
k.parent!=k.top?k.top.postMessage("BAPFRAMEBROADCAST|"+E[e]+"|"+(v.referrer?v.referrer:"")+"|"+b[e].ad_w+"|"+b[e].ad_h,"*"):k.top.postMessage("BAPFRAMEID|"+E[e]+"|"+v.location.href,"*")}catch(ga){}if(b[e].ad&&!b[e].noticeExists&&("IFRAME"==b[e].ad.nodeName&&b[e].ad.src in ja||"EXACT-FRAME"==b[e].ad.nodeName&&ja.contents))b[e].noticeExists=!0;if(b[g].noticeExists)T(g,"I"),T(g,"O");else{ta(g);var e=g,w=j=l=void 0,t=x="",Z=m("BAP-holder"),V="BAP.action('"+e+"', 'S'); BAP.createL2('"+e+"');";Z||(Z=v.createElement("div"),
Z.setAttribute("id","BAP-holder"),p.appendChild(Z));try{w=r(b[e].container_opacity)/100}catch(na){w=1}w=1>w?"opacity:"+w+";-moz-opacity:"+w+";-ms-filter:DXImageTransform.Microsoft.Alpha(Opacity="+100*w+");filter:alpha(opacity="+100*w+");":"";"expandable"==b[e].icon_display?(l='<img src="'+F+"/icon/"+ka+'.png">',j=19,t=' onmouseover="BAP.expandIcon('+e+')" ',!y.Opera&&(t+=' onmouseout="BAP.collapseIcon('+e+')" ')):"icon"==b[e].icon_display&&b[e].mini?(l='<img src="'+F+"/icon/"+ka+'.png">',j=19):(j=
b[e].ciconWidth,l='<img src="'+F+"/icon/c_"+b[e].icon_grayscale+(b[e].cicon?b[e].cicon:Na)+'.png">');if(b[e].mini||b[e].skipL2)V="BAP.action('"+e+"', 'S'); BAP.action('"+e+"', 'M'); _w.open(BAP.moreInfoHref("+e+"), '_newtab');";b[e].ad_z&&(x="z-index:"+r(b[e].ad_z)+";");b[e].amzn&&(V="BAP.action('"+e+"', 'S'); _w.open('http://www.amazon.com/gp/dra/info/?pn=1&pg=daaedisc&pp=1,e,"+b[e].coid+","+b[e].nid+"', '_newtab');");l='<span id="trigger-'+e+'" style="'+x+'position:absolute;" class="bap-trigger" onclick="'+
V+'"'+t+">"+l+"</span>";l='<div id="trigger-container-'+e+'" style="position: static !important;"><span id="trigger-box-'+e+'" class="bap-trigger" style="'+x+"position:absolute;"+w+"width:"+j+'px;height:15px;"><img id="trigger-box-image-'+e+'" src="'+F+"/icon/box_"+j+"_"+b[e].position+'.png"></span>'+l+"</div>";Z.innerHTML+=l;ua(g);bb(g)}b[pageId].noticeExists?P(pageId):(cb(pageId),b[pageId].processed=!0)}}}}else U(b[pageId],12),P(pageId)}catch(oa){}X.vs=J()[0]<p.scrollHeight;va=J()[1];ia(window,
"resize",db);var $=0,la=function(){try{if(0===$)$++,M(la,200);else{var a=function(a){for(var c in a)for(var f in b)if(b[f].ad==a[c]){P(f);return}},c=k.truste;try{a(c.ca.contMap)}catch(f){}try{a(c.ca2.contMap)}catch(d){}var e=k.__MicrosoftAdvertising,g,h;if(e&&e.Ad)for(h in b)if(b.hasOwnProperty(h)&&!b[h]._ms&&(g=e.Ad.getByPlacementId(b[h].atl_id)||e.Ad.get(b[h].ad)))g.removePlugin("AdChoices"),b[h]._ms=!0;wa();100>$?($++,M(la,100)):115>$&&($++,M(la,5E3))}}catch(j){}};la();ia(window,"scroll",eb);ma=
!0}}function ab(a,f){try{var c=ea[f].data;b[a].advName=c.adv_name||C;b[a].advMessage=c.adv_msg||C;b[a].advLogo=F+c.adv_logo.slice(19)||C;b[a].advLink=c.adv_link||C;b[a].rev=c.revision||0;b[a].behavioral=c.behavioral||"definitive";b[a].behavioralCustomMessage=c.generic_text||"";c.hide_wi&&(b[a].hideWhatIs=!0);c.hide_cl&&(b[a].hideCustom=!0);b[a].defTrans={};c.default_generic1&&(b[a].defTrans.generic1=c.default_generic1);c.default_generic2&&(b[a].defTrans.generic2=c.default_generic2);c.default_generic3&&
(b[a].defTrans.generic3=c.default_generic3);c.default_generic4&&(b[a].defTrans.generic4=c.default_generic4);c.default_generic5&&(b[a].defTrans.generic5=c.default_generic5);c.default_generic6&&(b[a].defTrans.generic6=c.default_generic6);c.default_link1&&(b[a].defTrans.link1=c.default_link1);c.default_link2&&(b[a].defTrans.link2=c.default_link2);c.default_link2&&(b[a].defTrans.link3=c.default_link3);c.default_footer&&(b[a].defTrans.footer=c.default_footer);b[a].skipL2=c.skip_L2||970==b[a].ad_w&&66==
b[a].ad_h;var d=c.message_properties||"";d["behavioral_"+q]&&(b[a].behavioral=d["behavioral_"+q]);d["behavioral_"+q]&&(b[a].noDefault=!0);c.default_icon&&!b[a].noDefault&&(b[a].cicon=c.default_icon);d["generic_text_"+q]&&(b[a].behavioralCustomMessage=d["generic_text_"+q]);d["adv_name_"+q]&&(b[a].advName=d["adv_name_"+q]);d["adv_msg_"+q]&&(b[a].advMessage=d["adv_msg_"+q]);d["adv_logo_"+q]&&(b[a].advLogo=F+d["adv_logo_"+q].slice(19));d["adv_link_"+q]&&(b[a].advLink=d["adv_link_"+q]);d["translation_"+
q]&&(b[a].translation=d["translation_"+q]);d["translation_"+q]&&(b[a].cicon=d["translation_"+q].icon);d.hasOwnProperty("skip_L2_"+q)&&(b[a].skipL2=d["skip_L2_"+q]);b[a].icon_delay=c.icon_delay||0;b[a].icon_display=c.icon_display||"normal";b[a].icon_display=c.icon_expandable?"expandable":b[a].icon_display;b[a].icon_grayscale=c.icon_grayscale||100;b[a].container_opacity=c.container_opacity||100;b[a].offsetTop=c.offset_y?!isNaN(r(c.offset_y))?r(c.offset_y):0:0;b[a].offsetLeft=c.offset_x?!isNaN(r(c.offset_x))?
r(c.offset_x):0:0;try{b[a].server=c.server[0]}catch(h){b[a].server={id:0,name:"Evidon"}}b[a].position||(b[a].position=c.icon_position||"top-right");b[a].positionVertical=function(){return 0<=this.position.indexOf("top")?"top":"bottom"};b[a].positionHorizontal=function(){return 0<=this.position.indexOf("left")?"left":"right"};E[a]||(E[a]=b[a].nid=c.nid||C);b[a].ad_h=r(b[a].ad_h);b[a].ad_w=r(b[a].ad_w);b[a].dm=-1;D[a]={};b[a].ciconWidth=77;if("_nl"==b[a].cicon||!b[a].cicon&&"nl"==q)b[a].ciconWidth=
47;if(/_(de|es|nl_be|si|mt|lt|gr|ee|is|bg|tr|il|ar)$/.test(b[a].cicon)||!b[a].cicon&&/de|es|be|si|mt|lt|gr|cy|ee|is|bg|tr|il|sa|eg/.test(q))b[a].icon_display="expandable",b[a].ciconWidth=107;322==b[a].coid&&/row|ru|cn|il|mx|tr|eg|sa|br|ar|tw|kr|jp/.test(q)&&(b[a].icon_display="expandable",b[a].icon_grayscale="",b[a].ciconWidth=107,b[a].cicon="g",ka="gi")}catch(g){}}function eb(){try{wa(),M(wa,100)}catch(a){}}function wa(){var a,f,c,d;for(d in b){a=b[d];if(5==a.dm)break;else c=6==a.dm?a.px:a.ad;f=
c;if(!b[d].hidden&&!b[d].detached&&f)for(;;){f=f.parentNode;if(f==p)break;if(!f){b[d].detached=!0;break}}else{f=Ka(b[d].proximityId,b[d].ad_w,b[d].ad_h);if(f=La(f,b[d].ad_h,b[d].ad_w))b[d].ad=f;b[d].detached=!1}b[d].hidden=6!=a.dm&&(0===c.offsetWidth&&0===c.offsetHeight||"none"==s(c,"display"))?!0:!1;if(b[d].detached||b[d].hidden)na(d),m("trigger-container-"+d).style.display="none";else{m("trigger-container-"+d).style.display="";try{var h=B(c);if(h.top!=a.pxt||h.left!=a.pxl)na(d),ta(d),ua(d)}catch(g){}}}}
function db(){try{var a,f=J()[1]-va,c=J()[0]<p.scrollHeight,d=X.vs!=c;if(0!==f||d){for(a in b)ta(a),ua(a),m("bap-notice-"+a)&&(na(a),Oa(a));va=J()[1]}X.vs=c}catch(h){}}function Pa(a){return[L(a.aid||0),L(a.icaid||0),L(a.ecaid||0).replace(/_/g,"$underscore$").replace(/%2F/g,"$fs$"),L(a.nid||0)].join("_")+"/"}function Qa(a,b,c){Ra("//l.betrad.com/ct/"+Pa(a)+[q,b,a.ad_w,a.ad_h,242,a.coid,a.rev].join("/")+"/pixel.gif?v="+Sa+"&ttid="+fb+"&d="+ba+c+"&r="+Math.random())}function Ra(a){var b=new Image(0,
0);b.src=a;b.style.display="none";p.appendChild(b)}function T(a,f){var c,d,h="",g=Ta[a],e=!1;g||(g={I:[0,"0/1/0/0/0/0"],S:[0,"0/0/1/0/0/0"],A:[0,"0/0/0/1/0/0"],B:[0,"0/0/0/0/1/0"],M:[0,"0/0/0/0/0/1"],O:[0,"0/1/0/0/0/0"]});0===g[f][0]&&(g[f][0]=1,c=g[f][1],e=!0);"O"==f&&(h="&o=1");Ta[a]=g;if(e&&(Qa(b[a],c,h),!b[a].noticeExists&&D[a]&&("B"==f||"M"==f)))for(d in h="&o=1",D[a])Qa(D[a][d],c,h)}function U(a,b){var c=Pa(a);Ua[c]!=b&&(Ua[c]=b,c&&Ra("//l.betrad.com/ct/"+c+"pixel.gif?e="+b+"&v="+Sa+"&d="+ba+
"&r="+Math.random()))}function Va(a){if(b[a].expanded){var f=F+"/icon/"+ka+".png",c=m("trigger-"+a),d=B(c).left;"right"==b[a].positionHorizontal()&&(d=d+b[a].ciconWidth-19);c.style.left=d+"px";c.innerHTML='<img src="'+f+'">';m("trigger-box-"+a).style.left=d+"px";m("trigger-box-"+a).style.width="19px";m("trigger-box-image-"+a).src=F+"/icon/box_19_"+b[a].position+".png";b[a].expanded=!1}}function oa(a){try{var b=a.height,c=a.width;b||(b=r(s(a,"height")));c||(c=r(s(a,"width")));b||(b=a.offsetHeight);
c||(c=a.offsetWidth);return[c,b]}catch(d){}return!1}function xa(a,b,c){try{var d=oa(a)[1],h=oa(a)[0];if(d===b&&h===c||d<=b+5&&d>=b-5&&h>=c-5&&h<=c+5)return!0}catch(g){}return!1}function ca(a){if(y.Safari&&0>y.SafariVersion.indexOf("5.1"))return a;var b,c,d,h;try{if("object"===a.nodeName.toLowerCase())for(d=a.childNodes[u]-1;0<d;d--){h=a.childNodes[d];if("embed"===h.nodeName.toLowerCase()){b=h;break}"object"===h.nodeName.toLowerCase()&&"application/x-shockwave-flash"===h.type&&(c=h)}!b&&c&&(b=c);if(y.Gecko&&
b)return b;if(0===b.offsetHeight&&0===b.offsetWidth)return a;if(y.Chrome&&b||0!==B(b).top)a=b}catch(g){}return a}function Ja(a,b,c,d){try{return 15==d||!a?!1:/DIV|IMG|EMBED|OBJECT|IFRAME/.test(a.nodeName)&&xa(a,b,c)?a:Ja(a.previousSibling,b,c,++d)}catch(h){return!1}}function Y(a,b,c){try{if(a){var d=a.children||a.childNodes,h,g;if(0===d[u])return!1;for(g=0;g<d[u];g++)if(ya(d[g])){if(xa(d[g],b,c))return d[g];if(h=Y(d[g],b,c))return h}}else return!1}catch(e){return!1}}function La(a,b,c){for(var d=a;;)if(d=
Y(d,b,c))if("EMBED"==d.nodeName)if("OBJECT"==d.parentNode.nodeName){a=ca(d.parentNode);break}else a=d;else"OBJECT"==d.nodeName&&(ad2=ca(d)),a=d;else break;return a}function na(a){try{var b=m("bap-notice-"+a);b&&(b.style.display="none")}catch(c){}}function Wa(a){a.id||(a=m("bap-notice-"+a));a.style.display="none"!=s(a,"display")?"none":"block"}function za(a,f){var c=[],d;b[a][f]&&c.push(f+"["+E[a]+"]="+L(b[a][f]));if(D[a])for(d in D[a]){var h=D[a][d];h[f]&&c.push(f+"["+d+"]="+L(h[f]))}return c.join("&")}
function Xa(a){var b,c,d=[],h=Aa+"more_info/"+E[a];for(c in D[a])h+=","+c;(b=za(a,"cps"))&&d.push(b);(b=za(a,"seg"))&&d.push(b);(b=za(a,"ecaid"))&&d.push(b);pa&&d.push("gdn=1");0<d[u]&&(h+="?"+d.join("&"));return h}function Ba(a,b){m(a).href=b}function Ga(a){var b;a&&!m("bass-"+a)&&X["CSS_"+a]&&(y.IE?(b=v.createStyleSheet(""),b.cssText=X["CSS_"+a]):(b=v.createElement("style"),b.setAttribute("id","bass-"+a),b.setAttribute("type","text/css"),b.innerHTML=X["CSS_"+a],p.appendChild(b)))}function m(){var a,
b=[];for(a=0;a<arguments[u];a++){var c=arguments[a];"string"==typeof c&&(c=v.getElementById(c));if(1==arguments[u])return c;b.push(c)}return b}function ia(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):(b="on"+b,a.attachEvent?a.attachEvent(b,c):a[b]=c)}function J(){var a=-1,b=-1,c=k.innerWidth,d=v.documentElement;try{"number"==typeof c?(a=c,b=k.innerHeight):d&&d.clientWidth?(a=d.clientWidth,b=d.clientHeight):p&&p.clientWidth&&(a=p.clientWidth,b=p.clientHeight)}catch(h){}return[b,a]}function s(a,
b){try{var c;a.currentStyle?c=a.currentStyle[b]:k.getComputedStyle&&(c=v.defaultView.getComputedStyle(a,C).getPropertyValue(b));if(!c&&"text-align"===b)try{c=a.currentStyle.textAlign}catch(d){}return c}catch(h){return C}}function Ma(a){var b=y.IE?"zIndex":"z-index",c=C;if(a)return"auto"==s(a,b)?c=Ma(a.parentNode):0<r(s(a,b))&&(c=s(a,b)),r(c)+10}function ya(a){return 0===a.offsetWidth&&0===a.offsetHeight||"none"==s(a,"display")||!a.height&&!a.getAttribute("height")&&!s(a,"height")||!a.width&&!a.getAttribute("width")&&
!s(a,"width")?!1:!0}function Ka(a,b,c,d){var h,g,e,j,l,n,k=C,m={},p,q=v.getElementsByTagName("*");for(h=0;h<q[u];h++)if(/DIV|IMG|EMBED|OBJECT|IFRAME/.test(q[h].nodeName)&&(j=q[h],!("EMBED"==j.nodeName&&"OBJECT"==j.parentNode.nodeName)&&ya(j)))if(j.height==c&&j.width==b||r(j.getAttribute("height"))==c&&r(j.getAttribute("width"))==b)m[h]=j;else try{g=r(s(j,"width").replace("px","")),e=r(s(j,"height").replace("px","")),e==c&&g==b&&(m[h]=j)}catch(w){}for(l in m)if(b=Math.abs(a-l),!(50<b)){if(!p||b<p)p=
b,k=m[l];d&&d.parentNode==m[l].parentNode&&(n={d:b,cm:m[l]})}n&&5>Math.abs(p-n.d)&&(k=n.cm);try{k&&"OBJECT"==k.nodeName&&(k=ca(k))}catch(x){}return k}function bb(a){T(a,"I");0<b[a].icon_delay&&(m("trigger-container-"+a).style.display="none",M(function(){try{m("trigger-container-"+a).style.display="block"}catch(b){}},1E3*r(b[a].icon_delay)))}function ua(a){var f=m("trigger-"+a),c=m("trigger-box-"+a);f.style.top=b[a].posTop+"px";f.style.left=b[a].posLeft+"px";c.style.top=b[a].posTop+"px";c.style.left=
b[a].posLeft+"px"}function ta(a){var f,c,d,h,g,e,j=b[a].ad,l=b[a].ad_h,k=b[a].ad_w;if(5==b[a].dm)d=g=e=h=0;else if(/^(1|2|3|4|4.1|4.2|7|8|9)$/.test(b[a].dm))d=B(j).left,h=B(j).top,g=d,e=h;else if(6==b[a].dm){j=b[a].px;d=B(j).left;h=B(j).top;y.Opera&&(j.width=j.height="1",h=B(j).top,j.width=j.height="0");g=d-k-4;e=h-l;try{if((f=j.parentNode.width)||(f=r(s(j.parentNode,"width"))),f===k||f<=k)g+=k,0<=s(j,"text-align").toLowerCase().indexOf("center")?(g-=k/2,y.IE&&(e-=4)):0<=s(j,"text-align").toLowerCase().indexOf("right")&&
(g-=k,y.IE&&(e-=4))}catch(m){}}try{"relative"==s(p,"position")&&(c=p.getBoundingClientRect(),g-=c.left)}catch(q){}f=e;c=g;"top-right"==b[a].position?c+=k:"bottom-right"==b[a].position?(f+=l-14,c+=k):"bottom-left"==b[a].position&&(f+=l-14);f+=b[a].offsetTop;c+=b[a].offsetLeft;f+="top"==b[a].positionVertical()?0:-1;"expandable"==b[a].icon_display||"icon"==b[a].icon_display&&b[a].mini?"right"==b[a].positionHorizontal()&&(c-=19):"right"==b[a].positionHorizontal()&&(c-=b[a].ciconWidth);b[a].pxl=d;b[a].pxt=
h;b[a].posTop=f;b[a].posLeft=c;b[a].spotTop=e;b[a].spotLeft=g}function sa(a,f,c){var d=c?f:E[f];if(E[a]!=d){if(D[a])for(var h in D[a])if(h==d)return;D[a][d]=c||b[f]}}function O(a,b){return"BAPACCEPT|"+b+"|"+a.nid+"|"+(a.aid||0)+"|"+(a.icaid||0)+"|"+(a.ecaid||0)+"|"+a.coid+"|"+a.ad_w+"|"+a.ad_h+"|"+a.rev+"|"+(a.cps||"-")+"|"+(a.seg||"-")}function I(a,b){var c;c=b?b.postMessage?b:b.contentWindow:k.parent;c.postMessage&&c.postMessage(a,"*")}function Ya(){if(ma&&0<K[u]){var a,b=[];for(a=0;a<K[u];a++)0<=
K[a].indexOf("BAPFRAMEBROADCAST")&&b.push(K[a]);for(;0<K[u];)a=K.pop(),0<=a.indexOf("BAPFRAMEBROADCAST")||b.push(a);for(;0<K[u];)b.push(K.pop());for(;0<b[u];)Ca(b.pop())}else!ma&&0<K[u]&&M(Ya,1E3)}function Ca(a){try{var f,c,d,h,g,e,j,l,n=a;a.data&&(n=a.data);if(0===n.indexOf("BAP"))if(ma){var p=n.substring(0,n.indexOf("|")||n[u]);if("BAPFRAMEBROADCAST"==p){if(k.top==window){d=n.split("|");h=d[1];var q=d[2],r=d[3],t=d[4];for(j in b)if((e=b[j].ad)&&("IFRAME"==e.nodeName&&b[j].ad_h==t&&b[j].ad_w==r)&&
(q==e.src||y.IE&&0<q.indexOf(e.src))){var w=a.source;I(O(b[j],h),w);y.IE||T(j,"O");m("trigger-"+j)&&m("BAP-holder").removeChild(m("trigger-container-"+j));delete b[j];break}}}else if("BAPFRAMEID"==p){d=n.split("|");h=d[1];var x=d[2];l=v.getElementsByTagName("iframe");for(c=0;c<l[u];c++)l[c].src&&l[c].src==x&&(qa[c]=l[c],I("BAPTANGO?|"+c,l[c]))}else if("BAPTANGO?"==p){var s=n.substring(n.indexOf("|")+1);k.bap_frameid=s;I("BAPLETSDANCE|"+s);k.notice&&I("BAPFRAME|"+E[k.notice]+"|"+s)}else if("BAPLETSDANCE"==
p)f=n.substring(n.indexOf("|")+1),qa[f].tango=f;else if("BAPFRAME"==p){d=n.split("|");h=d[1];var C=d[2];ja[B]=h;ja.contents=!0;for(j in b)if((e=b[j].ad)&&"IFRAME"==e.nodeName&&e.tango==C&&!b[j].noticeExists||"EXACT-FRAME"==e.nodeName){d="";if("EXACT-FRAME"==e.nodeName){l=v.getElementsByTagName("iframe");for(c=0;c<l[u];c++){var z=l[c];I(O(b[j],h),z);k.passFrame=l[c]}}else c=e,I(O(b[j],h),c),d=e;k.passNid=h;for(g in D[j]){var A=d||k.passFrame;I(O(D[j][g],h),A)}T(j,"O");m("trigger-"+j)&&m("BAP-holder").removeChild(m("trigger-container-"+
j));delete b[j];break}}else if("BAPFLASH"==p){d=n.substring(n.indexOf("|")+1);h=d.substring(0,d.indexOf("|"));var B=d.substring(d.indexOf("|")+1);for(j in b)if(e=b[j].ad,f=e.src||e.data||e.movie||"",e&&("OBJECT"==e.nodeName||"EMBED"==e.nodeName)&&f==B&&!b[j].noticeExists||"EXACT-FRAME"==e.nodeName){try{e.flashGetMessage(O(b[j],h))}catch(G){}k.passFrame=e;k.passNid=h;for(g in D[j])try{e.flashGetMessage(O(b[j],h))}catch(H){}T(j,"O");m("trigger-"+j)&&m("BAP-holder").removeChild(m("trigger-container-"+
j));delete b[j]}}else if("BAPACCEPT"==p){d=n.split("|");g={};var F=d[1];g.nid=d[2];g.aid=d[3];g.icaid=d[4];g.ecaid=d[5];g.coid=d[6];g.ad_w=d[7];g.ad_h=d[8];g.rev=d[9];d[10]&&"-"!==d[10]&&(g.cps=d[10]);d[12]&&"-"!==d[11]&&(g.seg=d[11]);0===g.ecaid&&delete g.ecaid;if(k.passFrame){var J=k.passFrame;I(O(g,k.passNid),J)}else for(j in b)h=E[j],F==h&&sa(j,g.nid,g)}else if("BAPPING"==p)d="",k.notice?(d="BAPPONG|"+b[k.notice].position,I(d)):k.passFrame&&I("BAPPING|",k.passFrame);else if("BAPPONG"==p)I(n);
else if("BAPAMZN"==p)for(j in k.bap_amzn=!0,b)m("trigger-"+j).onclick=function(){T(j,"S");k.open("http://www.amazon.com/gp/dra/info/?pn=1&pg=daaedisc&pp=1,e,"+b[j].coid+","+b[j].nid,"_newtab")}}else K.push(n),M(Ya,1E3)}catch(L){}}function Oa(a){var f=m("bap-notice-"+a),c;if("right"==b[a].positionHorizontal())try{c=b[a].spotLeft+b[a].ad_w-b[a].popupWidth,f.style.left=(c||0)+"px"}catch(d){}else f.style.left=(b[a].spotLeft||0)+"px";"top"==b[a].positionVertical()?f.style.top=b[a].posTop+"px":(c=r(f.style.height)||
b[a].popupHeight,f.style.top=(0<b[a].spotTop+b[a].ad_h-c?b[a].spotTop+b[a].ad_h-c:0)+"px");y.QuirksMode&&(b[a].popupWidth&&"none"!=f.style.display)&&(f.style.display="block",f.style.width=b[a].popupWidth+(728==b[a].popupWidth?4:0)+"px",f.style.margin="0 0");c=b[a].advLogo;m("bap-logo-"+a)&&(c&&"none"!=f.style.display&&!m("bap-logo-"+a).src)&&(m("bap-logo-"+a).src=c)}function cb(a){function f(a){try{a.generic1&&(x=a.generic1,z=a.generic2,A=a.generic3,B=a.generic4,D=a.generic5,sg6=a.generic6,s=a.link1,
t=a.link2,u=a.link3,w=a.footer)}catch(b){}}if(!b[a].skipL2){var c="",d=C,h=b[a].ad_w,g=b[a].ad_h,e="",j="",k=m("BAP-holder"),n="",q="",s="More information &#38; opt-out options",t="What is interest based advertising?",u="Learn about your choices",w="Privacy Controls by Evidon&#153;",x="This ad has been matched to your interests. It was selected for you based on your browsing activity.",z="This ad may have been matched to your interests based on your browsing activity.",A="helped",B="determine that you might be interested in an ad like this.",
D="select this ad for you.";sg6="selected this ad for you.";b[a].noDefault||f(b[a].defTrans);f(b[a].translation);w='<span class="bap-gray">'+w+"</span>";"definitive"==b[a].behavioral?(e=x,b[a].advName&&(e+="<br><br>"+b[a].server.name+" "+A+" "+b[a].advName+" "+B)):"single"==b[a].behavioral?(e=z,b[a].advName&&(e+="<br><br>"+b[a].advName+" "+sg6)):"uncertain"==b[a].behavioral?(e=z,b[a].advName&&(e+="<br><br>"+b[a].server.name+" "+A+" "+b[a].advName+" "+D)):"custom"==b[a].behavioral&&(e=b[a].behavioralCustomMessage);
b[a].ad_z&&(j="z-index:"+(r(b[a].ad_z)+1)+";");d=190<=h&&300>h&&145<=g&&250>g?5:300<=h&&250<=g?1:5;160==h&&600==g&&(d=2);728<=h&&990>=h&&(90<=g&&125>=g)&&(d=6);if(1==d)n=y.QuirksMode?' style="width:294px !important"':"",q=y.QuirksMode?"width:296px !important;":"width:auto !important;max-width:299px;min-width:276px;",c='<div id="bap-notice-'+a+'" class="bap1 bap-notice" style="'+q+";display:none;"+j+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle('+a+');return false;">[ X ]</div><div class="bap-img-container">'+
(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':"")+"</div><p>"+e+'</p><div class="bap-link-div"'+n+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+s+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"'+
n+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+t+" &raquo;</a></div>"),b[a].hideCustom||(b[a].advLink&&b[a].advMessage?c+='<div class="bap-link-div"'+n+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+" &raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div"'+n+">"+b[a].advMessage+"</div>")),c+='<div class="bap-link-div"'+
n+">"+w+"</div></div></div>";else if(2==d)c='<div id="bap-notice-'+a+'" class="bap2 bap-notice" style="width:156px;display:none;'+j+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':
"")+"</div><p>"+e+'</p><div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+s+" &raquo;</a></div>"+(b[a].hideWhatIs?"":'<div class="bap-link-div"><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+t+" &raquo;</a></div>"),b[a].hideCustom||(b[a].advLink&&b[a].advMessage?
c+='<div class="bap-link-div"><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+"&nbsp;&raquo;</a></div>":b[a].advMessage&&(c+='<div class="bap-link-div">'+b[a].advMessage+"</div>")),c+='<div class="bap-link-div">'+w+"</div></div></div>";else if(5==d)c+='<div id="bap-notice-'+a+'" class="bap5 bap-notice" style="display:none;'+j+'"><div class="bap-div"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+"'));return false;\">[ X ]</div><p>"+
e+' <a class="bap-blue-link" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.link('bap-link-1-"+a+"', '"+Aa+"more_info/"+E[a]+"')\">"+u+'</a></p><div class="bap-link-div">'+w+"</div></div></div>";else if(6==d){q=y.QuirksMode?"width: 728px !important;":"min-width: 675px !important; width: auto !important;";n=y.QuirksMode?' style="width:275px !important; height: 20px;"':"";if(b[a].hideCustom&&b[a].hideWhatIs)c+="<style>#bap-first-link-div { padding-top:45px !important; }</style>";
else if(b[a].hideCustom||b[a].hideWhatIs)c+="<style>#bap-first-link-div { margin-top: 20px !important; }</style>";c=c+('<div id="bap-notice-'+a+'" class="bap6 bap-notice" style="display:none;'+q+j+'"><div class="bap-div"><div id="bap-gradient-1" class="bap-gradient"><div id="bap-first-link-div" class="bap-link-div"'+n+'><a class="bap-blue" href="about:blank" id="bap-link-1-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'M');\" onmouseover=\"BAP.moreInfoLink('"+a+"')\">"+s+" &raquo;</a></div>")+
(b[a].hideWhatIs?"":'<div class="bap-link-div"'+n+'><a class="bap-blue" href="about:blank" id="bap-link-2-'+a+'" target="_blank" onclick="BAP.action(\''+a+"', 'B');\" onmouseover=\"BAP.iabLink('"+a+"')\">"+t+" &raquo;</a></div>");b[a].hideCustom||(c=b[a].advLink&&b[a].advMessage?c+('<div class="bap-link-div"'+n+'><a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\">"+b[a].advMessage+" &raquo;</a></div>"):b[a].advMessage?c+('<div class="bap-link-div"'+n+
">"+b[a].advMessage+"</div>"):c+"&nbsp;");c+='<div class="bap-link-div"'+n+">"+w+'</div></div><div id="bap-gradient-2" class="bap-gradient"><div class="bap-close" onclick="BAP.toggle(BAP.$(\'bap-notice-'+a+'\'));return false;">[ X ]</div><div class="bap-img-container">'+(b[a].advLogo?b[a].advLink&&!b[a].hideCustom?'<a class="bap-blue" target="_blank" href="'+b[a].advLink+'" onclick="BAP.action(\''+a+"', 'A');\"><img id=\"bap-logo-"+a+'" border="0"></a>':'<img id="bap-logo-'+a+'" border="0">':"")+
"</div><p>"+e+"</p></div></div></div>"}k||(k=v.createElement("div"),k.setAttribute("id","BAP-holder"),p.appendChild(k),k=m("BAP-holder"));k.innerHTML+=c;Ga(d)}}function B(a){var b;if(!a||!a.ownerDocument)return C;if(a===a.ownerDocument.body){b=p.offsetTop;var c=p.offsetLeft;a=v.createElement("div");var d,h,g=Da(s(p,"marginTop"))||0;a.style.position="absolute";a.style.top=0;a.style.left=0;a.style.margin=0;a.style.border=0;a.style.width="1px";a.style.height="1px";a.style.visibility="hidden";a.innerHTML=
'<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';p.insertBefore(a,p.firstChild);d=a.firstChild;h=d.firstChild;h.style.position="fixed";h.style.top="20px";h.style.position=h.style.top="";d.style.overflow="hidden";d.style.position="relative";p.removeChild(a);
p.offsetTop!==g&&(b+=Da(s(p,"marginTop"))||0,c+=Da(s(p,"marginLeft"))||0);return{top:b,left:c}}try{b=a.getBoundingClientRect()}catch(e){}d=a.ownerDocument;c=d.documentElement;if(!b)return b?{top:b.top,left:b.left}:{top:0,left:0};d=d.body;a=a&&"object"===typeof a&&"setInterval"in a?a:9===a.nodeType?a.defaultView||a.parentWindow:!1;return{top:b.top+(a.pageYOffset||Ea&&c.scrollTop||d.scrollTop)-(c.clientTop||(y.QuirksMode?d.clientTop:0)||0),left:b.left+(a.pageXOffset||Ea&&c.scrollLeft||d.scrollLeft)-
(c.clientLeft||(y.QuirksMode?d.clientLeft:0)||0)}}var t={},Q=[1525,1598,692],Fa=!1,ha=!1,ma=!1,ga=!1,Sa="1211",fb="2",q="us",Na="_us",ka="ci",X={CSS_COMMON:".bap-blue,.bap-close,.bap-div,.bap-gradient,.bap-gray,.bap-img-container,.bap-notice,.bap-link-div{color:#000;white-space:normal;word-wrap:normal;vertical-align:middle!important;margin:0;padding:0;border:0;outline:0;font-family:Arial!important;font-size:100%;border-collapse:collapse;border-spacing:0;line-height:13px;list-style:none;letter-spacing:0!important;text-align:left;overflow:visible!important}.bap-notice{background-color:#fff;padding:2px;font-size:16px;line-height:13px;z-index:9991;top:-100px;left:-100px}.bap-blue,.bap-blue:link,.bap-blue:visited{color:#2b2f98}.bap-close{width:20px;color:#707070;font-size:10px;font-weight:bold;margin-left:-22px;position:relative;top:1px;left:100%;cursor:pointer}.bap-div{border:1px solid #ababab}.bap-div p{float:none;padding:0}.bap-gray,.bap-gray:visited{color:#444}.bap-img-container a{vertical-align:middle;display:table-cell;height:45px}.bap-link-div{height:14px;color:#2b2f98;border-top:1px solid #ababab;padding:3px 10px 4px 10px;text-decoration:none;font-size:.67em!important;font-weight:bold}.bap-link-div a,.bap-link-div span{text-decoration:none;font-size:inherit;font-weight:bold}#BAP-holder img{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;max-width:100%;box-shadow:0 0!important;-moz-box-shadow:0 0!important;-webkit-box-shadow:0 0!important;background:none!important}#BAP-holder{position:static!important}#BAP-holder .bap-trigger{z-index:9990}.bap-trigger{cursor:pointer;display:block;font-family:Arial;font-size:8pt;white-space:nowrap}.bap-trigger img{width:auto;height:auto}",
CSS_1:".bap1 .bap-img-container{margin:-18px 0 9px 10px;height:45px;position:static}.bap1 .bap-img-container img{margin-top:6px!important}.bap1 p{font-size:.7em;margin:4px 5px 0 10px;padding-bottom:6px;line-height:13px;width:259px}.bap1 .bap-close{\x3c!--[if lte IE 7]>top:0;left:273px!important;<![endif]--\x3e}",CSS_2:".bap2 .bap-close{z-index:1}.bap2 .bap-close{\x3c!--[if lte IE 7]>top:0;left:152px!important;<![endif]--\x3e}.bap2 .bap-gray,.bap-gray:visited{padding-right:0!important;word-spacing:-2px;font-size:.8em}.bap2 .bap-img-container{position:relative;top:-7px;margin-left:10px}.bap2 .bap-link-div{height:100%}.bap2 .bap-notice{font-size:12px}.bap2 .bap-img-container img{display:block;margin-top:10px}.bap2 p{font-size:11px;margin:2px 5px 0 10px;padding-bottom:7px;line-height:13px}",
CSS_5:".bap5 .bap-gray,.bap-gray:visited{font-size:95%}.bap5 .bap-link-div{background-color:#dcdcdc;font-size:.8em;padding:3px 3px 4px 6px}.bap5{font-size:12px;width:190px}.bap5 .bap-spacer-div{height:1px}.bap5 p{font-size:.8em;margin:3px 6px 0 5px;padding-bottom:3px;line-height:13px}.bap5 .bap-close{\x3c!--[if lte IE 7]>top:0;left:185px!important;<![endif]--\x3e}",CSS_6:".bap6 .bap-close{margin-left:0;display:inline;float:right;right:10px;left:0!important}.bap6 .bap-div{height:84px;min-width:688px}.bap6 .bap-gradient{float:left;height:84px}.bap6 .bap-img-container{float:right;clear:right;margin-top:10px;height:45px;width:115px}.bap6 .bap-link-div{padding:4px 10px 3px 10px;overflow:hidden}.bap6 .bap-link-div a,.bap6 .bap-link-div span{display:block;width:auto!important;max-width:275px;min-width:210px;line-height:130%}.bap6 p{font-size:.7em;width:310px;margin:5px 0 0 10px;line-height:13px}#bap-gradient-1{border-right:1px solid #ababab;width:auto!important;max-width:280px;min-width:230px}#bap-gradient-2{width:441px}#bap-first-link-div{border:0}",
options:{}},k=window,v=document,L=encodeURIComponent,b=X.options,C=null,M=setTimeout,r=parseInt,Da=parseFloat;location.href.indexOf("tech-ticker");var u="length",F="//c.betrad.com",$a=F+"/a/",Aa="http://info.evidon.com/",p=v.getElementsByTagName("body")[0],Ua={},qa={},D={},va=0,V,K=[],ja={},ea={},E={},Ta={},fa=0,ba=v.domain,pa,y,A=navigator.userAgent,z="[object Opera]"==Object.prototype.toString.call(k.opera),G=A.substring(A.indexOf("Version")+"Version"[u]+1),Za=!!k.attachEvent&&!z&&v.createStyleSheet;
try{G=G.substring(0,G.indexOf(" "))}catch(gb){}y={IE:Za,IE6:-1<A.indexOf("MSIE 6"),IE7:-1<A.indexOf("MSIE 7"),IE8:-1<A.indexOf("MSIE 8"),Opera:z,Gecko:-1<A.indexOf("Gecko")&&-1===A.indexOf("KHTML"),Safari:-1<A.indexOf("Safari")&&-1>=A.indexOf("Chrome"),Chrome:!!A.match("Chrome"),QuirksMode:Za&&"BackCompat"==v.compatMode,SafariVersion:G};var Ha=top.location!=location,A=[0,0,0],z=C,G=navigator;if("undefined"!=typeof G.plugins&&"object"==typeof G.plugins["Shockwave Flash"]){if((z=G.plugins["Shockwave Flash"].description)&&
!("undefined"!=typeof G.mimeTypes&&G.mimeTypes["application/x-shockwave-flash"]&&!G.mimeTypes["application/x-shockwave-flash"].enabledPlugin))z=z.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),A[0]=r(z.replace(/^(.*)\..*$/,"$1"),10),A[1]=r(z.replace(/^.*\.(.*)\s.*$/,"$1"),10),A[2]=/[a-zA-Z]/.test(z)?r(z.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if("undefined"!=typeof k.ActiveXObject)try{var H=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(H&&(z=H.GetVariable("$version")))z=z.split(" ")[1].split(","),
A=[r(z[0],10),r(z[1],10),r(z[2],10)]}catch(hb){}var ra,Ia,Ea=C,H=v.createElement("div");H.style.width=H.style.paddingLeft="1px";p.appendChild(H);Ea=2===H.offsetWidth;p.removeChild(H).style.display="none";try{ia(window,"message",Ca)}catch(ib){}k._bao&&da(_bao);t.options=b;t.flashPostMessage=function(a){Ca({data:a})};t.createL2=function(a){var f=m("bap-notice-"+a);f.style.position="absolute";Wa(f);b[a].popupHeight=f.offsetHeight;b[a].popupWidth=f.offsetWidth;Oa(a)};t.link=Ba;t.iabLink=function(a){var b,
c=Aa+"about_behavioral_advertising/section1?n="+E[a];for(b in D[a])c+=","+b;Ba("bap-link-2-"+a,c)};t.moreInfoLink=function(a){Ba("bap-link-1-"+a,Xa(a))};t.moreInfoHref=Xa;t.toggle=Wa;t.expandIcon=function(a){if(!b[a].expanded){var f=F+"/icon/c_"+b[a].icon_grayscale+(b[a].cicon?b[a].cicon:Na)+".png",c=m("trigger-"+a),d=B(c).left;"right"==b[a].positionHorizontal()&&(d=d+19-b[a].ciconWidth);c.style.left=d+"px";c.innerHTML='<img src="'+f+'">';m("trigger-box-"+a).style.left=d+"px";m("trigger-box-"+a).style.width=
b[a].ciconWidth+"px";m("trigger-box-image-"+a).src=F+"/icon/box_"+b[a].ciconWidth+"_"+b[a].position+".png";b[a].expanded=!0;y.Opera&&M(function(){Va(a)},3E3)}};t.collapseIcon=Va;t.action=T;t.start=da;t.copyJSON=function(a){try{ea[a.data.nid]=a,fa--}catch(b){}};t.$=m;t.inject=function(a){Fa=!0;ra=a.rh;Y=a.checkChildren;Ia=a.getAdStandard;a.inject({isValidElement:ya,getDims:oa,checkElement:xa,getObjectEmbed:ca})};return t}();BAP.SVNREV="r1211";