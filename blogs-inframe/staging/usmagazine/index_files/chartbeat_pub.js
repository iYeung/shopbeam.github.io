(function(){var g=void 0,k=true,l=null,o=false,p,s=this;function aa(a){var b=t;function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a};function u(){var a="",b,c;for(c=0;c<16;c++)b=Math.floor(Math.random()*36).toString(36),a+=b;return a}function ba(){for(var a="",b=0;b<16;b++)a+=Math.random();return a}function ca(a){a+=ba();var b="";v(da(encodeURIComponent(a)),function(a,d){if(a>2)return o;var e;e=d;if(e==0)e="A";else{e>>>=0;for(var f="",h;e>0;)h=e%64,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(h)+f,e>>>=6;e=f}b+=e});return b}
function da(a){a+=String.fromCharCode(128);for(var b=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,h=3285377520,j=[],i,q,m,z,A,B=Math.ceil((a.length/4+2)/16),D=[B],r=0,n;r<B;r++){D[r]=[];for(i=0;i<16;i++)D[r][i]=a.charCodeAt(r*64+i*4)<<24|a.charCodeAt(r*64+i*4+1)<<16|a.charCodeAt(r*64+i*4+2)<<8|a.charCodeAt(r*64+i*4+3)}r=(a.length-1)*8;a=B-1;D[a][14]=Math.floor(r/Math.pow(2,32));D[a][15]=r&4294967295;for(r=0;r<B;r++){for(n=0;n<16;n++)j[n]=D[r][n];
for(n=16;n<80;n++)j[n]=(j[n-3]^j[n-8]^j[n-14]^j[n-16])<<1|(j[n-3]^j[n-8]^j[n-14]^j[n-16])>>>31;a=c;i=d;q=e;m=f;z=h;for(n=0;n<80;n++)A=Math.floor(n/20),A=(a<<5|a>>>27)+(A==0?i&q^~i&m:A==1?i^q^m:A==2?i&q^i&m^q&m:i^q^m)+z+b[A]+j[n]&4294967295,z=m,m=q,q=i<<30|i>>>2,i=a,a=A;c=c+a&4294967295;d=d+i&4294967295;e=e+q&4294967295;f=f+m&4294967295;h=h+z&4294967295}return[c,d,e,f,h]}
function w(a){var b=l;if(a){for(var b=l,a=document.getElementsByTagName("link"),c=0,d=a.length;c<d;++c)if(a[c].rel=="canonical")b=a[c].href,b=b.substring(b.indexOf("/",9));if(b)return b}c=s.location;b=c.pathname+(c.search||"");b=b.replace(/PHPSESSID=[^&]+/,"");a=/&utm_[^=]+=[^&]+/ig;(c=a.exec(c.search))&&(b=b.replace(a,""));a=/\?utm_[^=]+=[^&]+(.*)/i;(c=a.exec(b))&&(b=b.replace(a,c[1]!=""?"?"+c[1]:""));return b}function x(a,b){return function(){a.apply(b,arguments)}}
function y(a){return a.replace(/^www\./,"")}function C(a,b,c){a.addEventListener?a.addEventListener(b,c,o):a.attachEvent&&a.attachEvent("on"+b,c)}function E(a){return typeof a=="number"}function F(a){a=new Date(+a);return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate())}function G(){return(new Date).getTime()}function H(a){return encodeURIComponent(a)}
function v(a,b){if((!!a&&a.constructor===Object)===k)for(var c in a){if(a.hasOwnProperty(c)&&b(c,a[c])===o)break}else{c=a.length;for(var d=0;d<c;d++)if(b(d,a[d])===o)break}}function ea(a,b){var c=[];v(a,function(a,e){b(e)&&c.push(e)});return c}function fa(a){(!!a&&a.constructor===Object)===k&&(a="");var b={};v(a.split("&"),function(a,d){var e=d.split("::");e.length===2&&(b[decodeURIComponent(e[0])]=decodeURIComponent(e[1]))});return b}
function ga(a,b){if(a===b)return 0;if(a.length===0)return b.length;if(b.length===0)return a.length;for(var c=[],d=0,e=b.length;d<=e;d++)c[d]=[d];for(var f=0,h=a.length;f<=h;f++)c[0][f]=f;for(var j,i,q,d=1;d<=e;d++)for(f=1;f<=h;f++)j=d-1,i=f-1,q=c[j][i],b.charAt(j)==a.charAt(i)?c[d][f]=q:(i=c[d][i]+1,j=c[j][f]+1,q+=2,c[d][f]=Math.min(i,j,q));return c[b.length][a.length]};function I(){this.t=[];this.T=o;this.S=this.s=l;this.D=[];J(this,s,"onscroll");J(this,document.body,"onkeydown");J(this,document.body,"onmousemove");this.h()}I.prototype.h=function(){this.w={};this.e=0;ha(this);this.w.onmousemove=G()};function ha(a){a.Z&&clearInterval(a.Z);a.ea();a.Z=setInterval(x(a.ea,a),1E3)}function K(a){for(var b=0,c=a.D.length;b<c;b++)if(ia(a,a.D[b],5E3))return k;return o}
function J(a,b,c){var d=b[c]||function(){};a.D.push(c);b[c]=function(b){d.apply(this,arguments);if(b&&c=="onkeydown"){var f=b.keyCode?b.keyCode:b.which;if(f==32||f>36&&f<41){a.w.onscroll=G();return}}a.w[c]=G();if(a.T)a.s===l&&a.Y(),s.clearTimeout(a.S),a.S=s.setTimeout(x(a.Y,a),500)}}I.prototype.Y=function(){var a=this;this.s=s.setTimeout(function(){s.clearTimeout(a.s);a.s=l},500);for(var b=0,c=this.t.length;b<c;b++)if(typeof this.t[b]==="function")this.t[b]()};
function ia(a,b,c){a=a.w[b];if(a===g)return o;a=G()-a;return a<=(c||15E3)&&a>=0}I.prototype.ea=function(){K(this)&&this.e++};function L(a){var b=a.e;a.e=0;ha(a);return b};var ja=/[?&]__cb_debug=/i;function ka(){};function M(){this.K=k;la(this,"focus","focusin",this.oa);la(this,"blur","focusout",this.na)}M.prototype.oa=function(){this.K=k};M.prototype.na=function(){this.K=o};function la(a,b,c,d){a=x(d,a);window.addEventListener?window.addEventListener(b,a,o):document.attachEvent&&document.attachEvent(c,a)};function ma(a,b,c){b=b||"*";c=c||document;if(typeof c.querySelectorAll==="function")return c.querySelectorAll(b+"["+a+"]");for(var d=[],b=c.getElementsByTagName(b),c=b.length;c--;)b[c].getAttribute(a)&&d.push(b[c]);return d}function na(a,b,c){return a===g?o:c===g&&a.getAttribute(b)||a.getAttribute(b)===c?a:a===document.body?o:na(a.parentNode,b,c)}
function N(){var a=document.body,b=document.documentElement;if(E(s.pageYOffset))return s.pageYOffset;else if(a&&a.scrollTop)return a.scrollTop;else if(b&&b.scrollTop)return b.scrollTop;return 0}function oa(){var a=window,b=document.body,c=document.documentElement;if(E(a.pageXOffset))return a.pageXOffset;else if(b&&b.scrollLeft)return b.scrollLeft;else if(c&&c.scrollLeft)return c.scrollLeft;return 0}
function pa(a){var b=document;return b[b.compatMode==="CSS1Compat"?"documentElement":"body"]["client"+a]||0}function O(){return pa("Height")}function P(a){a="scroll"+a;return Math.max(document.body[a],document.documentElement[a])||0}function Q(){return P("Height")};function R(a){var b=a.offsetHeight,c=a.offsetWidth;if(b<=1||c<=1)for(var a=a.getElementsByTagName("iframe"),d,e,f=0,h=a.length;f<h;f++)if(d=a[f].offsetHeight,e=a[f].offsetWidth,d>1&&e>1){b=d;c=e;break}return{height:b,width:c}}function S(a,b){for(var c=0,d=o;a;)c+=a["offset"+b],qa(a)==="fixed"&&(d=k),a=a.offsetParent;d&&(c+=b==="Left"?oa():N());return c}
function qa(a){s.getComputedStyle?(a=s.getComputedStyle(a,l),a=a.position||a.getPropertyValue("position")):a=a.currentStyle?a.currentStyle.position:a.style&&a.style.position;return a||""};function ra(a,b,c,d){this.f=a;this.H=a.getAttribute("data-cb-ad-id")||a.id||"";this.F=b;this.v=c;this.ia=d;this.U=this.V=g;this.m=l;this.W=0;this.Q=setInterval(x(this.fa,this),sa);this.fa()}var sa=1E3;function ta(a,b,c){a.U=b;a.V=c}function ua(a){var b=R(a.f);return{id:a.H,engagedSeconds:a.W,positionLeft:S(a.f,"Left"),positionTop:S(a.f,"Top"),width:b.width,height:b.height,campaignId:a.U,creativeId:a.V}}
function va(a){var b=a.v.K,c=a.f,a=O(),d=pa("Width"),e=S(c,"Left"),f=S(c,"Top"),h=oa(),j=N(),i=R(c),c=i.height,i=i.width,d=Math.min(h+d,e+i)-Math.max(h,e),a=Math.min(j+a,f+c)-Math.max(j,f);return b&&(d<0||a<0?o:d*a>0.5*i*c)}ra.prototype.fa=function(){var a=sa/1E3;K(this.F)&&va(this)&&(this.W+=a);this.ia&&wa(this)};
function wa(a){function b(a,b,c){var d=document.createElement("div"),e=document.createElement("span");e.setAttribute("style","font-weight: bold;");e.textContent=a;d.textContent=b;d.insertBefore(e,d.firstChild);c.appendChild(d)}var c=a.f;if(c){var d;if(a.m)d=document.getElementById(a.m);else{a.m="engagementLog-"+a.H+"-"+Math.floor(Math.random()*1E3);d=document.createElement("div");d.setAttribute("id",a.m);document.body.appendChild(d);var e=c.getAttribute("style")||"",f=qa(c),f=f==="fixed"||f==="absolute"||
f==="relative"?"":"position: relative;";e+="box-shadow: 0px 0px 0px 3px #49A2DC; z-index: 2000;"+f;c.setAttribute("style",e);var h="box-shadow: 0px 0px 0px 3px #5BC3BD, 10px 5px 5px #C8DAE8; z-index: 2000;"+f;d.onmouseover=function(){c.setAttribute("style",h)};d.onmouseout=function(){e?c.setAttribute("style",e):c.removeAttribute("style")}}d.innerHTML="";f="background-color: #F1F7FB; z-index: 9000000; position: absolute; padding: 10px; border-radius: 5px; font-size: 12px; color: #658BA1; border: 1px solid #C8DAE8; margin: 3px; font-family: 'Proxima-Nova','Helvetica Neue',Helvetica,Arial,sans-serif; top: "+
S(c,"Top")+"px; left: "+S(c,"Left")+"px;";d.setAttribute("style",f);f=ua(a);b("Ad Name: ",f.id+" ["+f.width+"x"+f.height+"]",d);var j=f.campaignId;j&&b("Campaign: ",j,d);(j=f.creativeId)&&b("Creative: ",j,d);d.appendChild(document.createElement("br"));var j=K(a.F),i="Out Of View";va(a)&&(i=j?"Engaged In View":"In View");b(i,"",d);b("Engaged Time: ",f.engagedSeconds+" seconds",d)}};function xa(a){var b={};if(a){a.charAt(0)=="?"&&(a=a.substring(1));for(var a=a.replace("+"," "),a=a.split(/[&;]/g),c=0,d=a.length;c<d;c++){var e=a[c].split("=");b[decodeURIComponent(e[0])]=decodeURIComponent(e[1])}}return b}function ya(a,b,c){var d="",e=s.location.href.split("?");e.length&&(e=xa(e[1]),b=c||b,e[b]&&(d="&"+a+"="+e[b]));return d};function T(a,b,c){a[b]=a[b]||c}function U(a,b,c){return a[c]?"&g"+b+"="+encodeURIComponent(a[c]):""};var V={b:function(a){a+="=";for(var b=document.cookie.split(";"),c,d=0,e=b.length;d<e;d++){for(c=b[d];c.charAt(0)===" ";)c=c.substring(1,c.length);if(c.indexOf(a)===0)return c.substring(a.length,c.length)}return""},create:function(a,b,c){var d=s._sf_async_config;if(!d||!d.noCookies)d=new Date,d.setTime(G()+c*864E5),document.cookie=a+"="+b+("; expires="+d.toGMTString())+"; path=/"}};V.remove=function(a){V.b(a)&&V.create(a,"",-1)};var W={};W.d=function(a){var b=s._sf_async_config;if(!a&&b&&b.noCookies)return l;if(W.d.I!==g)return W.d.I;var a=G()+"",c,d;try{if((d=s.localStorage).setItem(a,a),c=d.getItem(a)===a,d.removeItem(a),c)return W.d.I=d}catch(e){}return W.d.I=l};W.b=function(a){var b=W.d();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&G()>c)?(W.remove(a),""):b.getItem(a)||""};
W.create=function(a,b,c){var d=W.d();if(d){try{d.setItem(a,b)}catch(e){}b=new Date;b.setTime(G()+c*864E5);try{d.setItem(a+"_expires",b.getTime())}catch(f){}}};W.remove=function(a){var b=W.d();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function X(a){this.A=a||"";this.P=o;za(this)}
function za(a){if(!V.b("_cb_ls")){var b=W.d()!==l,c=V.b("_SUPERFLY_nosample");c&&v(["","_v_","_p_"],function(b,d){a.create(d+"_SUPERFLY_nosample",c,0.007,k)});var d=V.b("_chartbeat3");d&&(a.create("_v__chartbeat3",d,30,k),V.remove("_chartbeat3"));b&&((b=V.b("_chartbeat2"))&&a.create("_chartbeat2",b,30,k),(b=V.b("_chartbeat_uuniq"))&&a.create("_chartbeat_uuniq",b,30,k),(b=V.b("_chartbeat5"))&&a.create("_chartbeat5",b,6.944444444444445E-4,k));V.create("_cb_ls","1",30)}}
function Aa(a){var b=a.P;a.P=o;return b}X.prototype.create=function(a,b,c,d){a=d?a:this.A+a;(W.d()?W:V).create(a,b,c);W.d()&&V.create(a,b,c)};X.prototype.update=function(a,b,c,d,e,f){a=d?a:this.A+a;e=typeof e==="string"?e:"::";d=(d=this.b(a,k))?d.split(e):[];typeof f==="number"&&d.length>=f&&d.splice(0,d.length-f+1);d.push(b);this.create(a,d.join(e),c,k)};
X.prototype.b=function(a,b){var a=b?a:this.A+a,c=(W.d()?W:V).b(a);if(!c&&W.d()&&(c=V.b(a))&&V.b("_cb_ls")){this.P=k;var d;switch(a){case "_SUPERFLY_nosample":d=0.007;break;case "_chartbeat4":d=0.0417;break;case "_cb_cp":d=0.0417;break;default:d=30}W.create(a,c,d)}return c};X.prototype.remove=function(a,b){a=b?a:this.A+a;(W.d()?W:V).remove(a);W.d()&&V.remove(a)};function t(a){this.a=s._sf_async_config||{};this.ja=x(this.qa,this);this.n=[];this.k=a;this.c=new X(this.sa);this.h();C(s,"unload",x(this.o,this));for(var a=x(this.ra,this),b=s._cbq||[];b.length;)a(b.shift());s._cbq={push:a}}p=t.prototype;p.h=function(){this.M=this.i=0;this.r=G();this.q=u();this.p=k;this.$=72E5;this.g=this.e=0;this.k.h();var a=+this.a.sessionLength;if(!isNaN(a))this.$=a*6E4};
function Ba(a){if(!a.c.b("_SUPERFLY_nosample"))a.ma?a.O():(a.ma=k,!s._sf_async_config&&!s._cbq?C(s,"load",x(a.O,a)):a.O())}p.O=function(){var a=s._sf_startpt,b=s._sf_endpt;if(E(a))this.z=E(b)?b-a:G()-a;this.L=setInterval(x(this.aa,this),15E3);this.aa()};p.aa=function(){this.g=L(this.k);this.e+=this.g;var a=this.a.reading&&+this.a.reading||this.g>0;this.M<this.i&&!a?this.M++:(a?this.i=0:Ca(this),this.M=0,this.n.push(0),this.n.length>18&&this.n.shift(),this.ca(),G()-this.r>=this.$&&clearInterval(this.L))};
function Da(a,b){var c;c=new Image(1,1);c.onerror=a.ja;c.src=b}p.qa=function(){this.n.push(1);for(var a=0,b=0,c=this.n.length;b<c;++b)a+=this.n[b];a<3?(this.p=k,Ca(this)):clearInterval(this.L)};p.o=function(){this.c.update("_cb_cp",this.q,0.0417,o,",")};p.ra=function(a){this.a[a[0]]=a[1];this.i=0};function Ca(a){var b=a.i,b=b?Math.min(b*2,16):1;a.i=b}p.R=function(a,b){this.ga=s.location.protocol+"//"+this.a.domain+this.a.path;this.a.path=a;b&&(this.a.title=b);clearInterval(this.L);this.h();Ba(this)};
function Ea(a){if(a.ga)return k;a=(document.referrer||"").indexOf("://"+s.location.host+"/");return a!=-1&&a<9}function Y(a){return encodeURIComponent(a.ga||document.referrer||"")}function Fa(a){a=a.a.title.slice(0,100);return encodeURIComponent(a)}
function Ga(a,b){var c=s.navigator,d=s.window.screen,e=[Y(a),document.title,c.userAgent,c.platform,s.location.href,(new Date).getTimezoneOffset(),d.width+d.height+d.colorDepth];v(c.plugins,function(a,b){e.push(b.name+b.description+b.filename+b[0].type)});if(b===o)c=s.performance,e=e.concat([c&&c.now?c.now():"",G(),P("Width"),Q()]);return e.join()};function Z(a,b){this.l=[];this.v=b;!!window.postMessage===k&&C(window,"message",x(this.la,this));this.sa="_p_";t.call(this,a)}aa(Z);var Ha=o;p=Z.prototype;
p.h=function(){Z.B.h.call(this);var a=s.location;T(this.a,"pingServer","ping.chartbeat.net");T(this.a,"title",document.title);T(this.a,"domain",a.host);T(this.a,"engaged",o);Ha=!!w(o).match(ja)||o;this.u=this.a.adIdentifier||"data-cb-ad-id";this.a.domain=y(this.a.domain);this.N=(this.j=this.c.b("_chartbeat2",k))?0:1;if(!this.j)this.j=u();this.j=this.j.split(".")[0];this.da();a=this.k;a.t.push(x(this.da,this));a.T=k;Ia(this)};
p.o=function(){Z.B.o.call(this);this.g=L(this.k);this.e+=this.g;this.c.update("_chartbeat4",["t="+this.q,"E="+this.e,"ad="+H(Ja(this)),"x="+N(),"c="+Math.round((G()-this.r)/600)/100,"y="+Q(),"w="+O()].join("&"),0.0417)};function Ja(a){var b=[];v(a.l,function(a,d){var e=ua(d);b.push(encodeURIComponent(e.id)+"="+[e.engagedSeconds,e.positionLeft,e.positionTop,e.width,e.height,encodeURIComponent(e.campaignId||""),encodeURIComponent(e.creativeId||"")].join("::"))});return b.join("&")}
p.ca=function(){var a=N(),b=this.a,c="",d="";if(this.p)this.p=o,c=(Ea(this)?"&v=":"&r=")+Y(this),d="&i="+Fa(this);var e=this.c.b("_cb_cp"),e=e?"&D="+e:"";this.c.remove("_cb_cp");var f="",h=this.c.b("_chartbeat4");h&&(v(h.split("::"),function(a,b){f+="&z="+encodeURIComponent(b)}),this.c.remove("_chartbeat4"));h=this.z?"&b="+this.z:"";ka("[a] ping with path: "+H(w(!!b.useCanonical)));var j=encodeURIComponent("ads."+b.domain),i=s.location,q=[],m;for(m in b)m.charAt(0)=="_"&&q.push(m+"="+b[m]);Da(this,
(i.protocol||"http:")+"//"+b.pingServer+"/ping/ad?h="+j+"&p="+H(w(!!b.useCanonical))+"&u="+this.j+"&d="+H(y(i.host))+"&g="+b.uid+U(b,0,"sections")+U(b,1,"authors")+U(b,2,"zone")+U(b,3,"sponsorName")+"&n="+this.N+"&c="+Math.round((G()-this.r)/600)/100+"&x="+a+"&y="+Q()+"&o="+P("Width")+"&w="+O()+"&j="+Math.round((this.i+2)*15E3/1E3)+"&E="+this.e+c+h+"&t="+this.q+e+d+(Aa(this.c)?"&l=1":"")+(q.length?"&"+q.join("&"):"")+"&ad="+H(Ja(this))+f+"&_")};
function Ka(a){a=ma(a.u,"div");return ea(a,function(a){a=R(a);return a.height>1&&a.width>1})}
p.da=function(){for(var a=Ka(this),b,c=0,d=a.length;c<d;c++)if(!La(this,a[c])){var e=a[c];b=new ra(e,this.k,this.v,Ha);this.l.push(b);var f=e.getAttribute("data-cb-campaign-id"),h=e.getAttribute("data-cb-creative-id");if(f===l||h===l){var j=ma("data-cb-campaign-id","*",e),e=ma("data-cb-creative-id","*",e);j.length!==0&&(f=j[0].getAttribute("data-cb-campaign-id"));e.length!==0&&(h=e[0].getAttribute("data-cb-creative-id"))}f&&h&&ta(b,f,h)}Ma(this)};
function Ma(a){var b=[];v(a.l,function(a,d){var e;typeof document.contains==="function"&&!document.contains(d.f)?e=o:(e=R(d.f),e=e.height>1&&e.width>1);if(e===k)b.push(d);else{if(d.Q)clearInterval(d.Q),d.Q=l;d.f=l;d.F=l;d.v=l;d.m&&(e=document.getElementById(d.m),(e.parentElement?e.parentElement:e.parentNode).removeChild(e))}});a.l=b}function La(a,b){var c=o;v(a.l,function(a,e){if(e.f===b)return c=k,o});return c}
p.la=function(a){var b=fa(a.data),c=a.source;if(b.cbType==="campaignMessage"){var a=document.getElementsByTagName("iframe"),d=g;v(a,function(a,b){if(b.contentWindow===c)return d=b,o});var e=d.getAttribute(this.u);if(e===l){a=na(d,this.u);if(a===o)return;e=a.getAttribute(this.u)}var f=g;v(this.l,function(a,b){if(e===b.H)return f=b,o});f!==g&&(ta(f,b.campaignId,b.creativeId),!!window.postMessage===k&&d.contentWindow.postMessage("cbdata::ack","*"))}};p.R=function(){};
function Ia(a){if(Ha){var b=document.createElement("div");b.setAttribute("style","position:fixed; left:0; right:0 ;top:0 ;bottom:0; background-color: rgba(0, 0, 0, 0.3); z-index:1000;");document.body.appendChild(b);var c=document.createElement("div");document.body.appendChild(c);var d=a.a;v(["sections","zone","sponsorName"],function(a,b){if(d[b]!==g){var h=document.createElement("div");h.textContent=b+": "+d[b];c.appendChild(h)}});c.children.length&&c.setAttribute("style","background-color: #F1F7FB; z-index: 9000000; position: fixed;padding: 10px; border-radius: 5px; font-size: 12px;color: #658BA1; border: 1px solid #C8DAE8;font-family: 'Proxima-Nova','Helvetica Neue',Helvetica,Arial,sans-serif;top: "+
Math.round(O()*0.9)+"px;left: "+Math.round(pa("Width")*0.45)+"px;")}};if(!s.pSUPERFLY_pub){var Na=new Z(new I,new M);s.pSUPERFLY_pub=Na;Z.prototype.virtualPage=Z.prototype.R;Ba(Na)};var Oa=(document.location.protocol=="https:"?"https://a248.e.akamai.net/chartbeat.download.akamai.com/102508/":"http://static.chartbeat.com/")+"js/inpage.js";function Pa(){var a=document.createElement("script");a.async=k;a.src=Oa;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}function Qa(a){if(/[\/|\.]chartbeat\.com$/.test(a.origin)){var b=W.d(k),c=String(a.data);b&&c.indexOf("_cb_ip")==0&&(b.setItem("_cb_ip","1"),a.source.postMessage(1,a.origin),Pa())}};function $(a){t.call(this,a);C(document.body,"click",x(this.pa,this))}aa($);p=$.prototype;
p.h=function(){$.B.h.call(this);this.G=l;for(var a=this.a,b=document.getElementsByTagName("script"),c=0,d=b.length;c<d;++c)if(b[c].src.match(/chartbeat.js/)){b=xa(b[c].src.split("?")[1]);T(a,"uid",b.uid);T(a,"domain",b.domain);break}a=s.location;T(this.a,"pingServer","ping.chartbeat.net");T(this.a,"title",document.title);T(this.a,"domain",a.host);T(this.a,"path",w(!!this.a.useCanonical));this.J=y(a.host);this.a.domain=y(this.a.domain);var a=(this.c.b("_chartbeat2",k)||"").split("."),b=G(),c=b-+(a[1]||
0),e="1",f=a&&+a[2],d=a&&a[3];if(a&&f&&d)if(e=Math.abs((F(b)-F(f))/864E5)){e=Math.min(e,16)-1;for(f="";e--;)f+=0;e=(d+f+"1").slice(-16)}else e=d;this.N=a[0]&&c>18E5?0:1;a[0]||(a[0]=u(),a[1]=b);a[2]=b;a[3]=e;this.C=a[0];this.j=a.join(".");this.c.create("_chartbeat2",this.j,30,k);this.a.utoken=this.C;var h;b=+a[1];c=+a[2];if((a=a[3])&&b&&c)h=(Math.min((Math.abs((F(c)-F(b))/864E5)||0)+1,16,a.length)-1).toString(16),h+=("0000"+parseInt(a,2).toString(16)).slice(-4);this.X=h;s.postMessage&&C(s,"message",
x(this.ka,this));h=this.c.b("_chartbeat_uuniq")==="2";this.c.create("_chartbeat_uuniq","2",30);h||Da(this,"//ping.chartbeat.net/uuniq?u="+this.C+"&u2="+ca(Ga(this,k))+"&u3="+ca(Ga(this,o)))};p.ha=function(a){this.G=a};p.o=function(){$.B.o.call(this);this.g=L(this.k);this.e+=this.g;this.c.update("_chartbeat4",["t="+this.q,"E="+this.e,"x="+N(),"c="+Math.round((G()-this.r)/600)/100,"y="+Q(),"w="+O()].join("&"),0.0417)};
p.ca=function(){var a=this.a,b=N(),c=Math.round((G()-this.r)/600)/100,d=0,e=0,f=0;ia(this.k,"onkeydown")?e=1:this.a.reading&&+this.a.reading||this.g>0||c<0.09?d=1:f=1;var h="",j="",i="",q="",m=Ea(this);if(this.p){this.p=o;var h=(m?"&v=":"&r=")+Y(this),j="&i="+Fa(this),z=this.a.hudTrackable;z!==g&&(i="&L="+(z?"1":"0"));if(m&&(m=Ra(this)))h="&v="+encodeURIComponent(m.path),q="&K="+m.left+"::"+m.top,m.ba>1&&(q+="&l1="+m.ba)}var m=this.z?"&b="+this.z:"",z=this.G?"&A="+this.G:"",A=this.X?"&f="+this.X:
"",B=this.c.b("_cb_cp"),B=B?"&D="+B:"";this.c.remove("_cb_cp");var D="",r=this.c.b("_chartbeat4");r&&(v(r.split("::"),function(a,b){D+="&z="+encodeURIComponent(b)}),this.c.remove("_chartbeat4"));var r=[],n;for(n in a)n.charAt(0)=="_"&&r.push(n+"="+a[n]);Da(this,(s.location.protocol||"http:")+"//"+a.pingServer+"/ping?h="+encodeURIComponent(a.domain)+"&p="+encodeURIComponent(a.path)+"&u="+this.C+"&d="+encodeURIComponent(this.J)+"&g="+a.uid+U(a,0,"sections")+U(a,1,"authors")+(a.noCookies?"":"&n="+this.N)+
A+"&c="+c+"&x="+b+"&y="+Q()+"&o="+P("Width")+"&w="+O()+"&j="+Math.round((this.i+2)*15E3/1E3)+"&R="+d+"&W="+e+"&I="+f+"&E="+this.e+"&e="+this.g+h+q+m+z+ya("C","utm_campaign",a.campaignTag)+ya("M","utm_medium",a.mediumTag)+"&t="+this.q+"&V=19"+B+D+j+i+(Aa(this.c)?"&l=1":"")+(r.length?"&"+r.join("&"):"")+"&_")};
p.ka=function(a){var b=this.a;if(a.origin==="http://"+(b.playerdomain||this.J)){var c=a.data;if(typeof c=="string"&&c.indexOf("cbqpush::")===0){if(a=c.split("::"),a.length==3)a[1].indexOf("_")===0&&(b[a[1]]=a[2]),this.i=0}else c=="cbdata?"&&(b="domain="+encodeURIComponent(b.domain)+"&path="+encodeURIComponent(b.path)+"&title="+Fa(this)+"&referrer="+Y(this)+"&internal="+(Ea(this)?"1":"0")+"&subdomain="+encodeURIComponent(this.J)+"&utoken="+this.C,a.source.postMessage(b,"*"))}};
p.pa=function(a){if(a=a||window.event){var b=a.target||a.srcElement;if(b.tagName!=="A")if(b.parentNode)if(b.parentNode.tagName==="A")b=b.parentNode;else{if(b.parentNode.parentNode&&b.parentNode.parentNode.tagName==="A")b=b.parentNode.parentNode}else return;a=b.href||"";a=a.replace(/-{2,}/g,"-");var c=a,d="",e="";if(c){var e=document.createElement("a"),f=s.location;c.indexOf("http")!==0&&c.indexOf("javascript")!==0&&(c=f.protocol+c);e.href=c;d=e.hostname;e=e.protocol;if(d==="")d=f.hostname;if(e===
"")e=f.protocol;e==="javascript:"&&(d="")}d!==s.location.hostname||e==="javascript:"||(c=S(b,"Left"),b=S(b,"Top"),this.c.update("_chartbeat5",[c,b,encodeURIComponent(this.a.path),encodeURIComponent(a)].join(","),6.944444444444445E-4,o,g,5))}};
function Ra(a){var b=a.c.b("_chartbeat5");if(!b)return l;var b=b.split("::"),c=b.length,d,e;if(c===1)d=b[0].split(","),e=0;else{var f,h=s.location.href;v(b,function(a,b){var c=b.split(","),m=ga(h,decodeURIComponent(c[3]));if(m===0)return d=c,e=a,o;if(f===g||m<f)f=m,d=c,e=a})}b.splice(e,1);a.c.create("_chartbeat5",b.join("::"),6.944444444444445E-4);return{left:d[0],top:d[1],path:decodeURIComponent(d[2]),ba:c}};if(!s.pSUPERFLY){var Sa=new $(new I);s.pSUPERFLY=Sa;$.prototype.virtualPage=$.prototype.R;$.prototype.activity=$.prototype.ha;Ba(Sa);var Ta=W.d(k);Ta&&(C(s,"message",Qa),Ta.getItem("_cb_ip")&&Pa())};})();