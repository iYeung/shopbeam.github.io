(function(){var l=this,aa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ba=function(a,b,c){return a.call.apply(a.bind,arguments)},ca=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,e);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},m=function(a,b,c){m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?
ba:ca;return m.apply(null,arguments)};var r=(new Date).getTime();var v=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a},x=function(a,b){return/^true$/.test(a)?!0:/^false$/.test(a)?!1:b},da=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,ea=function(a,b){if(!a)return b;var c=a.match(da);return c?c[0]:b};var fa=v("0.15"),ga=v("0.01"),ha=v("0.001"),ia=v("0.001"),ja=v("0.2"),ka=x("true",!0);var la=x("false",!1),ma=x("false",!1);var z=function(a){z[" "](a);return a};z[" "]=function(){};var A=function(a){try{var b;if(b=!!a&&null!=a.location.href)o:{try{z(a.foo);b=!0;break o}catch(c){}b=!1}return b}catch(e){return!1}},B=function(a,b){if(!(1E-4>Math.random())){var c=Math.random();if(c<b){try{var e=new Uint16Array(1);window.crypto.getRandomValues(e);c=e[0]/65536}catch(d){c=Math.random()}return a[Math.floor(c*a.length)]}}return null};var na=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var e;a!=e;)e=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){b=c}}return b};var D=document,F=window,G,oa=null,H=D.getElementsByTagName("script");H&&H.length&&(oa=H[H.length-1]);G=oa;var pa=/&/g,qa=/</g,ra=/>/g,sa=/"/g,ta=/'/g,ua=/\x00/g,I={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},J={"'":"\\'"};var K=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(null,a[c],c,a)},L=function(a){return!!a&&"function"==typeof a&&!!a.call},va=function(a,b){if(!(2>arguments.length))for(var c=1,e=arguments.length;c<e;++c)a.push(arguments[c])},wa=function(a,b){a.addEventListener?a.addEventListener("load",b,!1):a.attachEvent&&a.attachEvent("onload",b)},xa=function(a){"google_onload_fired"in a||(a.google_onload_fired=!1,wa(a,function(){a.google_onload_fired=!0}))},ya=function(){var a=
F.google_unique_id;return"number"==typeof a?a:0},za=function(a){var b=a.length;if(0==b)return 0;for(var c=305419896,e=0;e<b;e++)c^=(c<<5)+(c>>2)+a.charCodeAt(e)&4294967295;return 0<c?c:4294967296+c};var M=!0,Aa={},Da=function(a,b,c,e){var d=Ba,f,g=M;try{f=b()}catch(h){try{var k=na(h);b="";h.fileName&&(b=h.fileName);var p=-1;h.lineNumber&&(p=h.lineNumber);g=d(a,k,b,p,c)}catch(n){try{var q=na(n);a="";n.fileName&&(a=n.fileName);c=-1;n.lineNumber&&(c=n.lineNumber);Ba("pAR",q,a,c,void 0,void 0)}catch(t){Ca({context:"mRE",msg:t.toString()+"\n"+(t.stack||"")},void 0)}}if(!g)throw h;}finally{if(e)try{e()}catch(C){}}return f},Ba=function(a,b,c,e,d,f){var g={};if(d)try{d(g)}catch(h){}g.context=a;g.msg=
b.substring(0,512);c&&(g.file=c);0<e&&(g.line=e.toString());g.url=D.URL.substring(0,512);g.ref=D.referrer.substring(0,512);Ea(g);Ca(g,f);return M},Ca=function(a,b){try{if(Math.random()<(b||.01)){var c="/pagead/gen_204?id=jserror"+Fa(a),e="http"+("http:"==F.location.protocol?"":"s")+"://pagead2.googlesyndication.com"+c,c=e=e.substring(0,2E3);F.google_image_requests||(F.google_image_requests=[]);var d=F.document.createElement("img");d.src=c;F.google_image_requests.push(d)}}catch(f){}},Ea=function(a){var b=
a||{};K(Aa,function(a,e){b[e]=F[a]})},Ga=function(a,b){return function(){var c=arguments;return Da(a,function(){return b.apply(void 0,c)},void 0,void 0)}},N=function(a,b){return Ga(a,b)},Fa=function(a){var b="";K(a,function(a,e){if(0===a||a)b+="&"+e+"="+("function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a))});return b};M=!la;Aa={client:"google_ad_client",format:"google_ad_format",slotname:"google_ad_slot",output:"google_ad_output",ad_type:"google_ad_type",async_oa:"google_async_for_oa_experiment",dimpr:"google_always_use_delayed_impressions_experiment",peri:"google_top_experiment",pse:"google_pstate_expt"};var Ha=!!window.google_async_iframe_id,Ia=/MSIE [2-7]|PlayStation|Gecko\/20090226|Android 2\.|Opera/i,Ja=/Android/;var O=null,Ka=function(){if(!O){for(var a=window,b=a,c=0;a!=a.parent;)if(a=a.parent,c++,A(a))b=a;else break;O=b}return O};var P=function(a,b,c){c||(c=ma?"https":"http");return[c,"://",a,b].join("")};var La=function(){},Q=function(a,b,c){switch(typeof b){case "string":Ma(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(b instanceof Array){var e=b.length;c.push("[");for(var d="",f=0;f<e;f++)c.push(d),Q(a,b[f],c),d=",";c.push("]");break}c.push("{");e="";for(d in b)b.hasOwnProperty(d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ma(d,c),c.push(":"),Q(a,f,c),e=
","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},R={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Na=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ma=function(a,b){b.push('"');b.push(a.replace(Na,function(a){if(a in R)return R[a];var b=a.charCodeAt(0),d="\\u";16>b?d+="000":256>b?d+="00":4096>b&&(d+="0");return R[a]=d+b.toString(16)}));b.push('"')};var S="google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_unit_key_2 google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_analytics_url_parameters google_available_width google_bid google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ui_type google_contents google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_ed google_eids google_enable_content_recommendations google_enable_ose google_enable_ose_periscope google_encoding google_floating_ad_position google_font_face google_font_size google_frame_id google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_mtl google_num_radlinks google_num_radlinks_per_unit google_only_ads_with_video google_only_pyv_ads google_only_userchoice_ads google_original_width google_override_format google_page_url google_pgb_reactive google_previous_watch google_previous_searches google_referrer_url google_region google_responsive_formats google_reuse_colors google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_sc_id google_scs google_source_type google_sui google_skip google_tag_for_child_directed_treatment google_tag_info google_tag_origin google_targeting google_tdsma google_tfs google_tl google_ui_features google_ui_version google_video_doc_id google_video_product_type google_video_url_to_fetch google_with_pyv_ads google_yt_pt google_yt_up".split(" "),
Oa={google_analytics_domain_name:!0,google_analytics_uacct:!0},Pa=function(a){a.google_page_url&&(a.google_page_url=String(a.google_page_url));var b=[];K(a,function(a,e){if(null!=a){var d;try{var f=[];Q(new La,a,f);d=f.join("")}catch(g){}d&&va(b,e,"=",d,";")}});return b.join("")};var T=null;var U=function(a){this.j=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:m(this.u,this)});this.r=a.google_iframe_oncopy},Qa;var V="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
/[\x00&<>"']/.test(V)&&(-1!=V.indexOf("&")&&(V=V.replace(pa,"&amp;")),-1!=V.indexOf("<")&&(V=V.replace(qa,"&lt;")),-1!=V.indexOf(">")&&(V=V.replace(ra,"&gt;")),-1!=V.indexOf('"')&&(V=V.replace(sa,"&quot;")),-1!=V.indexOf("'")&&(V=V.replace(ta,"&#39;")),-1!=V.indexOf("\x00")&&(V=V.replace(ua,"&#0;")));Qa=V;U.prototype.set=function(a,b){this.r.handlers[a]=b;this.j.addEventListener&&this.j.addEventListener("load",m(this.s,this,a),!1)};
U.prototype.s=function(a){a=this.j.document.getElementById(a);try{var b=a.contentWindow.document;if(a.onload&&b&&(!b.body||!b.body.firstChild))a.onload()}catch(c){}};U.prototype.u=function(a,b){var c=Ra("rx",a),e;o:{if(a&&(e=a.match("dt=([^&]+)"))&&2==e.length){e=e[1];break o}e=""}e=(new Date).getTime()-e;c=c.replace(/&dtd=(\d+|M)/,"&dtd="+(1E4>e?e+"":"M"));this.set(b,c);return c};var Ra=function(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),e=c.exec(b);e&&(b=b.replace(c,a+"="+(+e[1]+1||1)));return b};var W;o:{var Sa=l.navigator;if(Sa){var Ta=Sa.userAgent;if(Ta){W=Ta;break o}}W=""};var Ua=-1!=W.indexOf("Opera")||-1!=W.indexOf("OPR"),Va=-1!=W.indexOf("Trident")||-1!=W.indexOf("MSIE"),Wa=-1!=W.indexOf("Gecko")&&-1==W.toLowerCase().indexOf("webkit")&&!(-1!=W.indexOf("Trident")||-1!=W.indexOf("MSIE")),Xa=-1!=W.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&l.opera)return a=l.opera.version,"function"==aa(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(W))?a[1]:"");return Va&&(b=(b=l.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=function(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};var Za={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};var X,Y=function(a){this.k=[];this.j=a||window;this.i=0;this.l=null;this.m=0},$a=function(a,b){this.t=a;this.q=b};Y.prototype.w=function(a,b){0!=this.i||0!=this.k.length||b&&b!=window?this.p(a,b):(this.i=2,this.o(new $a(a,window)))};Y.prototype.p=function(a,b){this.k.push(new $a(a,b||this.j));Z(this)};Y.prototype.A=function(a){this.i=1;if(a){var b=N("sjr::timeout",m(this.n,this,!0));this.l=this.j.setTimeout(b,a)}};
Y.prototype.n=function(a){a&&++this.m;1==this.i&&(null!=this.l&&(this.j.clearTimeout(this.l),this.l=null),this.i=0);Z(this)};Y.prototype.B=function(){return!(!window||!Array)};Y.prototype.C=function(){return this.m};Y.prototype.nq=Y.prototype.w;Y.prototype.nqa=Y.prototype.p;Y.prototype.al=Y.prototype.A;Y.prototype.rl=Y.prototype.n;Y.prototype.sz=Y.prototype.B;Y.prototype.tc=Y.prototype.C;var Z=function(a){var b=N("sjr::tryrun",m(a.v,a));a.j.setTimeout(b,0)};
Y.prototype.v=function(){if(0==this.i&&this.k.length){var a=this.k.shift();this.i=2;var b=N("sjr::run",m(this.o,this,a));a.q.setTimeout(b,0);Z(this)}};Y.prototype.o=function(a){this.i=0;a.t()};
var ab=function(a){try{return a.sz()}catch(b){return!1}},bb=function(a){return!!a&&("object"==typeof a||"function"==typeof a)&&ab(a)&&L(a.nq)&&L(a.nqa)&&L(a.al)&&L(a.rl)},cb=function(){if(X&&ab(X))return X;var a=Ka(),b=a.google_jobrunner;return bb(b)?X=b:a.google_jobrunner=X=new Y(a)},db=function(a,b){cb().nq(a,b)},eb=function(a,b){cb().nqa(a,b)};var fb=Ha?1==ya():!ya(),gb=function(){var a=z("script"),b;b=ea("","pagead2.googlesyndication.com");return["<",a,' src="',P(b,"/pagead/js/r20141204/r20141119/show_ads_impl.js",""),'"></',a,">"].join("")},hb=function(a,b,c,e){return function(){var d=!1;e&&cb().al(3E4);var f=a.document.getElementById(b);f&&!A(f.contentWindow)&&3==
a.google_top_js_status&&(a.google_top_js_status=6);try{if(A(a.document.getElementById(b).contentWindow)){var g=a.document.getElementById(b).contentWindow,h=g.document;h.body&&h.body.firstChild||(h.open(),g.google_async_iframe_close=!0,h.write(c))}else{var k=a.document.getElementById(b).contentWindow,p;f=c;f=String(f);if(f.quote)p=f.quote();else{g=['"'];for(h=0;h<f.length;h++){var n=f.charAt(h),q=n.charCodeAt(0),t=h+1,C;if(!(C=I[n])){var E;if(31<q&&127>q)E=n;else{var w=n;if(w in J)E=J[w];else if(w in
I)E=J[w]=I[w];else{var u=w,y=w.charCodeAt(0);if(31<y&&127>y)u=w;else{if(256>y){if(u="\\x",16>y||256<y)u+="0"}else u="\\u",4096>y&&(u+="0");u+=y.toString(16).toUpperCase()}E=J[w]=u}}C=E}g[t]=C}g.push('"');p=g.join("")}k.location.replace("javascript:"+p)}d=!0}catch(ob){k=Ka().google_jobrunner,bb(k)&&k.rl()}d&&(d=Ra("google_async_rrc",c),(new U(a)).set(b,hb(a,b,d,!1)))}},ib=function(a){var b=["<iframe"];K(a,function(a,e){null!=a&&b.push(" "+e+'="'+a+'"')});b.push("></iframe>");return b.join("")},jb=
function(a){var b;if(b=fb){if(!T)o:{var c=[F.top];b=[];for(var e=0,d;d=c[e++];){b.push(d);try{if(d.frames)for(var f=d.frames.length,g=0;g<f&&1024>c.length;++g)c.push(d.frames[g])}catch(h){}}for(f=0;f<b.length;f++)try{var k=b[f].frames.google_esf;if(k){T=k;break o}}catch(p){}T=null}b=!T}return b?(k={style:"display:none"},k["data-ad-client"]=Ya(a),k.id="google_esf",k.name="google_esf",a=P(ea("","googleads.g.doubleclick.net"),"/pagead/html/r20141204/r20141119/zrt_lookup.html"),
k.src=a,ib(k)):""},lb=function(a,b,c){var e=b.google_ad_output,d=b.google_ad_format;d||"html"!=e&&null!=e||(d=b.google_ad_width+"x"+b.google_ad_height,c&&(d+="_as"));c=!b.google_ad_slot||kb(b);d=d&&c?d.toLowerCase():"";b.google_ad_format=d;d=[b.google_ad_slot,b.google_ad_format,b.google_ad_type,b.google_ad_width,b.google_ad_height];c=[];for(var e=0,f=G.parentElement;f&&25>e;f=f.parentNode,++e)c.push(9!=f.nodeType&&f.id||"");(c=c.join())&&d.push(c);b.google_ad_unit_key=za(d.join(":")).toString();d=
a.google_adk2_experiment=a.google_adk2_experiment||B(["C","E"],ia)||"N";if("E"==d){d=G;c=[];for(e=0;d&&25>e;++e){var f=(f=9!=d.nodeType&&d.id)?"/"+f:"",g;o:{if(d&&d.nodeName&&d.parentElement){g=d.nodeName.toLowerCase();for(var h=d.parentElement.childNodes,k=0,p=0;p<h.length;++p){var n=h[p];if(n.nodeName&&n.nodeName.toLowerCase()==g){if(d==n){g="."+k;break o}++k}}}g=""}c.push((d.nodeName&&d.nodeName.toLowerCase())+f+g);d=d.parentElement}d=c.join()+":";c=[];if(a)try{for(var q=a.parent,e=0;q&&q!=a&&
25>e;++e){for(var t=q.frames,f=0;f<t.length;++f)if(a==t[f]){c.push(f);break}a=q;q=a.parent}}catch(C){}b.google_ad_unit_key_2=za(d+c.join()).toString()}else"C"==d&&(b.google_ad_unit_key_2="ctrl")},mb=Math.floor(1E6*Math.random()),nb=function(a){for(var b=a.data.split("\n"),c={},e=0;e<b.length;e++){var d=b[e].indexOf("=");-1!=d&&(c[b[e].substr(0,d)]=b[e].substr(d+1))}b=c[3];if(c[1]==mb&&(window.google_top_js_status=4,a.source==top&&0==b.indexOf(a.origin)&&(window.google_top_values=c,window.google_top_js_status=
5),window.google_top_js_callbacks)){for(a=0;a<window.google_top_js_callbacks.length;a++)window.google_top_js_callbacks[a]();window.google_top_js_callbacks.length=0}},kb=function(a){return a.google_override_format||!Za[a.google_ad_width+"x"+a.google_ad_height]&&"aa"==a.google_loader_used};Da("sa::main",function(){var a=window;xa(a);if(!window.google_top_experiment&&!window.google_top_js_status){var b=window;if(2!==(b.top==b?0:A(b.top)?1:2))window.google_top_js_status=0;else if(top.postMessage){var c;try{c=F.top.frames.google_top_static_frame?!0:!1}catch(e){c=!1}if(c){if(window.google_top_experiment=B(["jp_c","jp_zl","jp_wfpmr","jp_zlt","jp_wnt"],fa),"jp_c"!==window.google_top_experiment){b=window;b.addEventListener?b.addEventListener("message",nb,!1):b.attachEvent&&b.attachEvent("onmessage",
nb);window.google_top_js_status=3;b={0:"google_loc_request",1:mb};c=[];for(var d in b)c.push(d+"="+b[d]);top.postMessage(c.join("\n"),"*")}}else window.google_top_js_status=2}else window.google_top_js_status=1}d=window.google_ad_output;void 0!==window.google_always_use_delayed_impressions_experiment||d&&"html"!=d||(window.google_always_use_delayed_impressions_experiment=B(["C","E"],ha));(d=!1===window.google_enable_async)||(d=navigator.userAgent,Ia.test(d)?d=!1:(void 0!==window.google_async_for_oa_experiment||
!Ja.test(navigator.userAgent)||Ia.test(navigator.userAgent)||(window.google_async_for_oa_experiment=B(["E","C"],ga)),d=Ja.test(d)?"E"===window.google_async_for_oa_experiment:!0),d=!d||window.google_container_id||window.google_ad_output&&"html"!=window.google_ad_output);if(d)a.google_loader_used="sb",a.google_start_time=r,lb(a,a),document.write(jb(a.google_ad_client)+gb());else{fb&&(b=a.google_ad_client,d=navigator,ka&&a&&b&&d&&(c=a.document,d=c.createElement("script"),b=Ya(b),d.async=!0,d.type="text/javascript",
d.src=P("www.gstatic.com","/pub-config/"+b+".js"),b=c.getElementsByTagName("script")[0],b.parentNode.insertBefore(d,b)));a.google_unique_id?++a.google_unique_id:a.google_unique_id=1;b={};d=0;for(c=S.length;d<c;d++){var f=S[d];null!=a[f]&&(b[f]=a[f])}b.google_loader_used="sa";d=0;for(c=S.length;d<c;d++)f=S[d],Oa[f]||(a[f]=null);d=z("script");c={};f=b.google_ad_height;c.width='"'+b.google_ad_width+'"';c.height='"'+f+'"';c.frameborder='"0"';c.marginwidth='"0"';c.marginheight='"0"';c.vspace='"0"';c.hspace=
'"0"';c.allowtransparency='"true"';c.scrolling='"no"';c.allowfullscreen='"true"';c.onload='"'+Qa+'"';for(var g,f=a.document,h=c.id,k=0;!h||f.getElementById(h);)h="aswift_"+k++;c.id=h;c.name=h;var k=b.google_ad_width,p=b.google_ad_height,h=["<iframe"];for(g in c)c.hasOwnProperty(g)&&va(h,g+"="+c[g]);h.push('style="left:0;position:absolute;top:0;"');h.push("></iframe>");g=c.id;k="border:none;height:"+p+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+k+"px;background-color:transparent";
f.write(['<ins id="',g+"_expand",'" style="display:inline-table;',k,'"><ins id="',g+"_anchor",'" style="display:block;',k,'">',h.join(" "),"</ins></ins>"].join(""));g=c.id;c=kb(b)?B(["c","e"],ja):null;lb(a,b,"e"==c);f=Pa(b);b=jb(b.google_ad_client);h=(new Date).getTime();k=a.google_top_experiment;if(p=a.google_async_for_oa_experiment)a.google_async_for_oa_experiment=void 0;var n=a.google_always_use_delayed_impressions_experiment,q=a.google_auto_width_experiment,t=a.google_floating_ads_js_experiment;
d=["<!doctype html><html><body>",b,"<",d,">",f,"google_show_ads_impl=true;google_unique_id=",a.google_unique_id,';google_async_iframe_id="',g,'";google_start_time=',r,";",k?'google_top_experiment="'+k+'";':"",p?'google_async_for_oa_experiment="'+p+'";':"",n?'google_always_use_delayed_impressions_experiment="'+n+'";':"",c?'google_append_as_for_format_override="'+c+'";':"",q?'google_auto_width_experiment="'+q+'";':"",t?'google_floating_ads_js_experiment="'+t+'";':"","google_bpp=",h>r?h-r:1,";google_async_rrc=0;</",
d,">",gb(),"</body></html>"].join("");(a.document.getElementById(g)?db:eb)(hb(a,g,d,!0))}});})();
