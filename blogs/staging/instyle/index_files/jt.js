function jt(m,g,p){var a=(new Date()).getTime();var f=document.location.href,h="";try{h=top.document.referrer}catch(k){if(parent){try{h=parent.document.referrer}catch(j){h=""}}}if(h==""){h=document.referrer}if(h==""&&opener!=null){try{h=opener.location.href}catch(t){h=""}}var o=document.cookie.match(/jt_time=([0-9]+)/);var l=(o?parseInt(o[1]):a);document.cookie="jt_time="+a+";path=/";var d=(new Date(a+630720000000)).toGMTString();var r;var n=document.cookie.match(/jt_uuid=([\-0-9a-fA-F]+)/);if(n){r=n[1]}else{var b=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};r=a.toString(16)+"-"+b()+b()+b()+b();document.cookie="jt_uuid="+r+";path=/;expires="+d+";"}var q=document.cookie.match(/jt_num=([0-9]+)/);var s=(q?parseInt(q[1]):0);if(!o){s=s+1;document.cookie="jt_num="+s+";path=/;expires="+d+";"}var i=m+".gif?url="+escape(f)+"&uuid="+r+"&proj="+g+"&t="+(a-l)+"&w="+screen.width+"&h="+screen.height+"&dt="+a+"&sn="+s+"&title="+escape(document.title)+"&ref="+escape(h);if(p){jQuery(document).ready(function(){jQuery("body").append("<img src='"+i+"' style='display:none' />")})}else{var u=document.createElement("img");u.src=i;u.style.display="none";document.body.appendChild(u)}var c=function(v){var w=/jumptime\.com(:[0-9]+)?$/;if(!v.origin.match(w)){return}var e=document.createElement("script");e.src=v.data;e.id="jt_init";document.body.appendChild(e)};arguments.callee.pmh=c;if(window.addEventListener){window.addEventListener("message",c,false)}else{if(window.attachEvent){window.attachEvent("onmessage",c,false)}}};