CN.socialmedia=CN.socialmedia||{};CN.socialmedia=(function(h){var f={status:true,cookie:true,xfbml:true,image:"http://subscribe.condenet.com/images_covers/cover_teenvogue_80.jpg"},q={},n=h("#blogs_body .hentry.entry, #blogs .hentry.entry, #blogs-body .hentry.entry"),i=(n.length>0&&!n.hasClass("single")),d=function(s){if(typeof CN.slideshow!=="undefined"&&location.search.length>0){if(typeof s.tag==="undefined"){s.tag=location.search.replace("?","")}else{s.tag=s.tag+location.search.replace("?","&")}}var r=(typeof s.tag==="undefined")?"":(CN.page.config.url.indexOf("?")>-1?"&"+s.tag:"?"+s.tag);return(i)?h(".entry-title a",s.obj.parent().parent()).attr("href")+r:CN.page.config.url+r},g=function(r){return(i)?h(".entry-title a",r.parent().parent()).html():CN.page.config.title},l=function(){if(typeof CN.slideshow!=="undefined"){if(h("header .content-headline").length>0){return h("header .content-headline").text()}}if(CN.page.type.toLowerCase().indexOf("article")>-1){if(h("article .content-headline").length>0){return h("article .content-headline").text()}}if(CN.page.type.toLowerCase().indexOf("list")>-1){if(h("header .content-headline").length>0){return h("header .content-headline").text()}}return CN.page.config.title},j=function(){if(typeof CN.slideshow!=="undefined"){if(h(".sub-header").length>0){return h(".sub-header").text()}}if(CN.page.type.toLowerCase().indexOf("article")>-1){if(h(".sub-header").length>0){return h(".sub-header").text()}}if(CN.page.type.toLowerCase().indexOf("list")>-1){if(h(".sub-header").length>0){return h(".sub-header").text()}}return""},p=function(){var r=location.protocol+"//"+location.host;if(typeof CN.slideshow!=="undefined"){if(h("#items-container figure img:first").length>0){if(h("#items-container figure img:first").attr("data-original")){return r+h("#items-container figure img:first").attr("data-original")}else{return r+h("#items-container figure img:first").attr("src")}}}if(CN.page.type.toLowerCase().indexOf("article")>-1){if(h("article .main-column .article-pic:first").length>0){return r+h("article .main-column .article-pic:first").attr("data-original")}}if(CN.page.type.toLowerCase().indexOf("list")>-1){if(h("#items-container figure img:first").length>0){return r+h("#items-container figure img:first").attr("src")}}return f.image},k=function(){return(typeof CN.page.config.tweet.source!=="undefined"&&CN.page.config.tweet.source!=="")?'data-via="'+CN.page.config.tweet.source+'"':""},a=function(){var r=h(".utility-tweet iframe.twitter-share-button");if(r.length===0){r.remove()}},e=function(r){var s={version:"2.0.1",login:r.login,apiKey:r.apiKey,longUrl:r.url};h.getJSON("http://api.bit.ly/shorten?"+h.param(s)+"&format=json&callback=?",function(t){h(window).trigger("CN.customEvents.bitlyShortenUrl",[t])})},o=function(){if(typeof FB==="undefined"){if(h("#fb-root").length===0){h("body").prepend('<div id="fb-root"></div>')}(function(v,r,w){var u,t=v.getElementsByTagName(r)[0];if(v.getElementById(w)){return}u=v.createElement(r);u.id=w;u.src="//connect.facebook.net/en_US/all.js#xfbml=1";t.parentNode.insertBefore(u,t)}(document,"script","facebook-jssdk"))}},b=function(){!function(v,r,w){var u,t=v.getElementsByTagName(r)[0];if(!v.getElementById(w)){u=v.createElement(r);u.id=w;u.src="//assets1.whicdn.com/assets/heart_it_button.js";t.parentNode.insertBefore(u,t)}else{if(whi){whi.HeartItWidget()}}}(document,"script","whi-heartitbutton")},m=function(r){var s={twitter:function(){jQuery.getScript("http://platform.twitter.com/widgets.js",function(){})},tumblr:function(){jQuery.getScript(document.location.protocol+"//platform.tumblr.com/v1/share.js")},facebook:function(){o()},pinterest:function(){jQuery.getScript(document.location.protocol+"//assets.pinterest.com/js/pinit.js")},stumbleupon:function(){jQuery.ajaxSetup({cache:true});jQuery.getScript(document.location.protocol+"//platform.stumbleupon.com/1/widgets.js");jQuery.ajaxSetup({cache:false})},googleplus:function(){jQuery.getScript(document.location.protocol+"//apis.google.com/js/plusone.js")},iheartit:function(){b()}};if(s.hasOwnProperty(r)){s[r].call()}else{CN.debug.error("CN Social Media: attempt to load invalid social media service api.")}},c=function(r){var s={twitter:function(){h(".utilities .utility-tweet").each(function(){h(this).html("");h('<a href="http://twitter.com/share" class="twitter-share-button" '+k()+'data-text="'+l()+'" data-url="'+d({obj:h(this)})+'" data-count="'+(h(this).attr("data-count")||"vertical")+'" data-counturl="'+d({obj:h(this)})+'">Tweet</a>').appendTo(h(this))});CN.socialmedia.loadApi("twitter")},tumblr:function(t){h(".utilities .utility-tumblr").each(function(){h(this).html("");h('<a target="_blank" href="http://www.tumblr.com/share/photo?source='+encodeURIComponent(p())+"&caption="+encodeURIComponent(l())+"&clickthru="+encodeURIComponent(d({obj:h(this)}))+'" title="Share on Tumblr" class="tumblr-share" style="display:inline-block; text-indent:-9999px; overflow:hidden; width:20px; height:20px; background:url(\'http://platform.tumblr.com/v1/share_4T.png\') top left no-repeat transparent;">Share on Tumblr</a>').appendTo(h(this))});CN.socialmedia.loadApi("tumblr");return this},facebook:function(){if(h(".utilities .utility-like").length>0){CN.page.config.facebook.like=CN.page.config.facebook.like||{width:400,showfaces:false,layout:"standard",action:"like"};h(".utilities .utility-like").each(function(){h(this).html("");h('<div class="fb-like" data-href="'+d({obj:h(this)})+'" data-send="false" data-layout="'+h(this).attr("data-layout")+'" data-width="'+CN.page.config.facebook.like.width+'" data-show-faces="'+CN.page.config.facebook.like.showfaces+'"></div>').appendTo(h(this))});CN.socialmedia.loadApi("facebook")}if(h(".utilities .utility-share").length>0){CN.page.config.facebook.like=CN.page.config.facebook.like||{width:400,showfaces:false,layout:"standard",action:"like"};var t=(CN.isMobile)?"button_count":"box_count";h(".utilities .utility-share").each(function(){h(this).html("");h('<div class="fb-share-button" data-href="'+d({obj:h(this)})+'" data-width="40" data-type="'+t+'"></div>').appendTo(h(this))});CN.socialmedia.loadApi("facebook")}return this},pinterest:function(){h(".utilities .utility-pinterest").each(function(){h(this).html("");h('<a href="http://pinterest.com/pin/create/button/?url='+encodeURIComponent(d({obj:h(this)}))+"&media="+encodeURIComponent(p())+"&description="+encodeURIComponent(l())+'" class="pin-it-button" count-layout="vertical"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>').appendTo(h(this))});CN.socialmedia.loadApi("pinterest");return this},stumbleupon:function(){h(".utilities .utility-stumbleupon").each(function(){var t=h(this).attr("data-layout");h(this).html("");h('<su:badge layout="'+(t?t:5)+'"></su:badge>').appendTo(h(this))});CN.socialmedia.loadApi("stumbleupon");return this},googleplus:function(){h(".utilities .utility-gplusone").each(function(){h(this).html("");h('<div class="g-plusone" data-href="'+d({obj:h(this)})+'" data-size="'+h(this).attr("data-size")+'"></div>').appendTo(h(this))});CN.socialmedia.loadApi("googleplus");return this},comments:function(){var t=CN.config.get("pluckIds")||"";h(".utilities .utility-comment-now").each(function(){t+=h(this).find("[data-uid]").attr("data-uid")+","});CN.config.set({pluckIds:t})},iheartit:function(){if(h(".utilities .utility-heart").length>0){h(".utilities .utility-heart").each(function(){var t=(CN.isMobile)?"horizontal":"vertical";h(this).html("");h('<a href="//weheartit.com/heart-it" class="heart-it-button" data-type="'+t+'" data-image-url="'+p()+'" data-source-url="'+d({obj:h(this)})+'"">Heart It</a>').appendTo(h(this))});CN.socialmedia.loadApi("iheartit")}return this}};if(s.hasOwnProperty(r)){s[r].call();if(!q.hasOwnProperty(r)){q[r]=s[r]}}else{CN.debug.error("CN Social Media: attempt to load invalid social media service.")}};return{trackCount:0,loadApi:m,get:c,getSource:k,refresh:function(s){var r;CN.page.config.url=s;for(r in q){if(q.hasOwnProperty(r)){q[r].call()}}if(q.hasOwnProperty("facebook")){FB.XFBML.parse()}}}}(jQuery));CN.socialmedia.deluxe=CN.socialmedia.deluxe||{};CN.socialmedia.deluxe.defaults={url:location.href,title:document.title,image:"http://subscribe.condenet.com/images_covers/cover_teenvogue_80.jpg",twitterLayout:"vertical"};CN.socialmedia.deluxe.behaviors={getEntries:function(a){a=(typeof a==="undefined"?"":a);a.entry=(typeof a.entry==="undefined"?"":a.entry);a.url=(typeof a.url==="undefined"?"":a.url);a.image=(typeof a.image==="undefined"?"":a.image);a.title=(typeof a.title==="undefined"?"":a.title);jQuery(a.entry).each(function(g,o){var f=jQuery,b,p,l,d,e,h,c,n=location.protocol+"//"+location.host,k=jQuery(o),j=k.find(a.url),m="?";if(j.length>0){if(j.attr("href")){b=j.attr("href");if(b.indexOf("/")===1){b=n+b}if(b.indexOf("?")!==-1){m="&"}}else{b=CN.socialmedia.deluxe.defaults.url}}else{b=CN.socialmedia.deluxe.defaults.url;if(CN.socialmedia.deluxe.defaults.url.indexOf("?")!==-1){m="&"}}if(k.find(a.image).length>0){if(typeof k.find(a.image).attr("src")!=="undefined"){p=k.find(a.image).attr("src")}else{p=CN.socialmedia.deluxe.defaults.image}}else{p=CN.socialmedia.deluxe.defaults.image}if(k.find(a.title).length>0){if(k.find(a.title).text()!==""){l=k.find(a.title).text()}else{l=CN.socialmedia.deluxe.defaults.title}}else{l=CN.socialmedia.deluxe.defaults.title}k.find(".utilities .utility-tweet").each(function(q,i){f(i).html("").append('<a href="http://twitter.com/share" class="twitter-share-button" '+CN.socialmedia.getSource()+'data-text="'+l+'" data-url="'+b+'" data-count="'+(f(this).attr("data-count")||"vertical")+'" data-counturl="'+b+'">Tweet</a>')});c='<a target="_blank" href="http://www.tumblr.com/share/photo?source='+encodeURIComponent(p)+"&caption="+encodeURIComponent(l)+"&clickthru="+encodeURIComponent(b)+'" title="Share on Tumblr" class="tumblr-share" style="display:inline-block; text-indent:-9999px; overflow:hidden; width:62px; height:20px; background:url(http://platform.tumblr.com/v1/share_2T.png) top left no-repeat transparent;">Share on Tumblr</a>';k.find(".utilities .utility-tumblr").html("").append(c);k.find(".utilities .utility-like").each(function(q,i){f(i).html("").append('<div class="fb-like" data-href="'+b+'" data-send="false" data-layout="'+f(this).attr("data-layout")+'" data-width="'+f(this).attr("data-width")+'" data-show-faces="'+(f(this).attr("data-showfaces")?f(this).attr("data-showfaces"):"false")+'"></div>')});k.find(".utilities .utility-pinterest").each(function(q,i){f(i).html("").append('<a href="http://pinterest.com/pin/create/button/?url='+encodeURIComponent(b)+"&media="+encodeURIComponent(p)+"&description="+encodeURIComponent(l)+'" class="pin-it-button" count-layout="vertical"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>')});k.find(".utilities .utility-stumbleupon").each(function(q,i){f(i).html("").append('<su:badge layout="5"></su:badge>')});k.find(".utilities .utility-gplusone").each(function(q,i){f(i).html("").append('<g:plusone size="tall" href="'+b+'"></g:plusone>')});k.find(".utilities .utility-heart").each(function(){f(this).html("");f('<a href="//weheartit.com/heart-it" class="heart-it-button" data-type="horizontal" data-image-url="'+encodeURIComponent(getImage())+'" data-source-url="'+encodeURIComponent(getURL({obj:f(this)}))+'"">Heart It</a>').appendTo(f(this))})});CN.socialmedia.loadApi("twitter");CN.socialmedia.loadApi("tumblr");CN.socialmedia.loadApi("facebook");CN.socialmedia.loadApi("pinterest");CN.socialmedia.loadApi("stumbleupon");CN.socialmedia.loadApi("googleplus");CN.socialmedia.loadApi("iheartit")}};CN.socialmedia.deluxe.init=function(a){CN.socialmedia.get("comments");jQuery(".social-deluxe .social-slate").on("hover, click",function(){jQuery(".social-deluxe .social-slate").fadeOut(100)});jQuery(".social-deluxe").on("hover, click",function(b){CN.socialmedia.deluxe.behaviors.getEntries(a);jQuery(".social-deluxe").off("hover, click")})};(function(a){var b=a({});a.subscribe=function(){b.on.apply(b,arguments)};a.unsubscribe=function(){b.off.apply(b,arguments)};a.publish=function(){b.trigger.apply(b,arguments)}}(jQuery));CN.userservice=(function(d){var b="",c={auth:{uri:"/open/user",verb:"PUT"},reg:{uri:"/open/user",verb:"POST"},subscribe:{uri:"/open/ecom/entries",verb:"POST"}},f="",e=function(g){g=d.extend({format:"json",version:"1.0",key:""},g);b=g.service;f={"Content-Type":"application/"+g.format,Accept:"application/"+g.format+";ver="+g.version,Authorization:null,key:g.key,"X-Requested-With":"XMLHttpRequest"}},a=function(g){var h;g=d.extend({action:"auth"},g);h=d.ajax({headers:f,url:b+c[g.action].uri,type:c[g.action].verb,data:JSON.stringify(g.data),dataType:"json"});h.done(function(){d.publish(CN.userservice.SUCCESS,h)});h.fail(function(){d.publish(CN.userservice.FAIL,h)})};return{init:e,makeCall:a,SUCCESS:"success",FAIL:"fail"}}(jQuery));CN.site.lightreg=(function(c){var b={msg:"Select your",us:{desc:"state",code:["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","AE","AA","AP"],name:["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming","Armed Forces Europe","Armed Forces Americas","Armed Forces Pacific"]}},a=function(i){var h=new Date(),f=new Date(i),g=h.getFullYear()-f.getFullYear(),e=h.getMonth()-f.getMonth();if(e<0||(e===0&&h.getDate()<f.getDate())){g-=1}return g},d=function(f){var e;if(b[f.selection]){f.$state.attr("data-validation","notempty");f.$zip.attr("data-validation","notempty");e=f.$state.children("[selected]").val()||false;f.$zip.removeAttr("disabled");f.$state.empty();f.$state.removeAttr("disabled").append(new Option(b.msg+" "+b[f.selection].desc,""));c.each(b[f.selection].code,function(g){f.$state.append(new Option(b[f.selection].name[g],this));if(e&&e===this){f.$state[g+1].selected=true}})}else{f.$state.removeAttr("data-validation");f.$zip.removeAttr("data-validation");f.$state.attr("disabled","true");f.$zip.attr("disabled","true").val("");f.$state.val("")}};return{setState:d,getAge:a}}(jQuery));CN.site.views={};CN.site.views.lightreg=(function(g){var w,n={auth:{prefix:"light-login",dataWrapper:"user"},reg:{prefix:"light-reg",dataWrapper:"user"},subscribe:{prefix:"light-subscribe",dataWrapper:"userEntry"}},u=false,i="",s=false,a="",l=false,m=5000,c={},r,k=function(I){var H=(I.responseText!=="")?g.parseJSON(I.responseText):[],G;w.find(".errors p").removeClass("show");w.removeClass("submitting");for(G=0;G<H.length;G+=1){g("#"+n[i].prefix+"-"+H[G].error["@code"].replace(/\./g,"\\.")).addClass("show")}if(H.length===0){g("#"+n[i].prefix+"-error-default").addClass("show")}},f=function(H){var K={},G={},I=n[i].prefix,J=n[i].dataWrapper;H.find("input[id^="+I+"],select[id^="+I+"]").each(function(M,N){var L=g(N);G["@"+L.attr("name")]=L.val()});K[J]=G;return K},e=function(){var G;G={ecomSubscription:{"@ecomProvider":"HEARST","@ecomUrl":CN.site.ecomUrl,ecomProviderParams:{param:[{"@name":"offer_id","@value":g('[name="offer_id"]').val()},{"@name":"offer_term","@value":g('[name="offer_term"]').val()},{"@name":"source_code","@value":g('[name="source_code"]').val()},{"@name":"pt_id","@value":g('[name="pt_id"]').val()}]}}};return G},x=function(){var G={},I,H=g("#light-subscribe-form");i="subscribe";s=false;g("#light-subscribe-email").val(g("#light-reg-email").val());G=f(H);I={data:{ecomSubscriptionsRequest:{ecomSubscriptions:e(),userEntry:G.userEntry}}};I.action=i;CN.userservice.makeCall(I)},d=function(){var G=g("#"+n[i].prefix+"-form"),H="/user/login";if(platformEnvironment!=="development"){H="https://"+CN.config.get("secureHost")+H}g('<form action="'+H+'" method="post"><input id="username" type="text" name="username" value="'+G.find('[name="email"]').val()+'"><input id="password" type="password" name="password" value="'+G.find('[name="password"]').val()+'"></form>').appendTo("body")[0].submit()},C=function(){var G=g.ajax({url:"/services/lightreg/logged-in",cache:false});G.done(function(){CN.site.teenvogue.behaviors.loginBar();if(CN.user.isLoggedIn()){g.publish(CN.site.views.lightreg.AUTH_SUCCESS);w.removeClass("show")}else{d()}})},E=function(J){var I,H=g.parseJSON(J.responseText),G="";if(H.user){if(g("#"+n[i].prefix+"-form").find('[name="rememberme"]:checked').length>0){G=365*300}CN.cookie.set(H.user["@amgUserCookieName"],H.user["@amgUserCookieValue"],{encode:false,path:"/",expires:G,domain:"."+CN.site.domain})}if(s){x()}else{if(H.ecomResponse){window.open(H.ecomResponse["@ccUpsellPage"],"SUBSCRIBE","width=800px","height=300px");C()}else{C()}}},j=function(){if(g("#xlight-reg-month").val()!==""&&g("#xlight-reg-day").val()!==""&&String(g("#xlight-reg-year").val()).length===4){o()}},o=function(){var I=g("#xlight-reg-year").val()+"-"+g("#xlight-reg-month").val()+"-"+g("#xlight-reg-day").val(),H=g("#xlight-reg-month").val()+"/"+g("#xlight-reg-day").val()+"/"+g("#xlight-reg-year").val(),G=CN.site.lightreg.getAge(H);g("#light-reg-birthday").val(I);g("#light-subscribe-birthday").val(I);if(G>=13){w.find(".hide").removeClass("hide");w.find(".birthday p").addClass("hide")}else{if(!isNaN(G)&&G<13){location.href="/services/coppa"}}},z=function(){var G=g.ajax({url:"/nolayout/lightreg"});u=true;G.done(b)},A=function(G){var H=CN.isMobile?0:r.offset().left+"px";G.css({left:H,position:"absolute",top:r.offset().top+r.height()+"px"})},B=function(G){i=(G&&G.action)?G.action:"auth";r=G.currentTrigger;if(u){if(w){A(w);w.addClass("show");q({action:i,currentTrigger:r})}}else{c=G||{};z()}},q=function(G){i=G.action;r=G.currentTrigger;w.find(".action").removeClass("show").end().find("#"+n[i].prefix).addClass("show")},F=function(){w.removeClass("show");g(window).trigger("$event:lightRegHide")},p=function(H){var G=false;H.find("[data-validation]").each(function(I,K){var J=g(K),L;if(J.attr("data-validation")==="notempty"&&J.val()===""){J.parent("fieldset").addClass("error");G=true}else{if(J.attr("data-validation")==="birthday"){L=new Date(g("#xlight-reg-month").val()+"/"+g("#xlight-reg-day").val()+"/"+g("#xlight-reg-year").val());if(Object.prototype.toString.call(L)!=="[object Date]"||isNaN(L.getTime())){J.parent("fieldset").addClass("error");G=true}}}});return G},h=function(G){l=window.setTimeout(function(){if(l){w.removeClass("show");window.clearTimeout(l)}},m)},v=function(G){window.clearTimeout(l)},D=function(H){var G=false;w.find("fieldset").removeClass("error");G=p(H);if(i!=="auth"){H=g("#light-subscribe-form");if(H.length>0){if(g("input[name=offer_id]").length!=0){if(g("input[name=offer_id]:checked").length===0){G=true;g("#lightRegError_subscribe").show()}else{g("#lightRegError_subscribe").hide()}}if(s){G=p(H)}}}if(G){w.removeClass("submitting")}return G},b=function(H){var G;CN.userservice.init({service:CN.site.userServiceUrl,key:CN.site.userServiceKey});g.subscribe(CN.userservice.SUCCESS,function(I,J){E(J)});g.subscribe(CN.userservice.FAIL,function(I,J){k(J)});w=g(H);w.find(".close").on("click",function(I){w.removeClass("show");g(window).trigger("scroll");return false});w.find("form").on("submit",function(I){w.addClass("submitting");return t(g(I.currentTarget))});w.find('[name="light-reg-submit"]').on("click",function(I){w.addClass("submitting");return t(g("#light-reg-form"))});w.find(".change-action").on("click",function(I){q({action:g(this).attr("data-action")});return false});w.find(".birthday").on("change keyup",function(I){j()});w.find("#light-subscribe-placement").on("click",function(I){if(I.target.type==="radio"){y(g(I.target).val())}});G={"$state":w.find("#light-subscribe-state"),"$zip":w.find("#light-subscribe-zip"),selection:w.find("#light-subscribe-country").val().toLowerCase()};w.find("#light-subscribe-country").on("change",function(I){CN.site.lightreg.setState(G)});A(w);w.addClass("show");w.find("#"+n[i].prefix).addClass("show");if(c.keepOpen!==true){w.on("mouseleave",function(I){h(I)}).on("mouseenter",function(I){v(I)});g(window).on("scroll",F);w.find("input").on("focus",function(I){g(window).off("scroll",F)})}g("body").append(w);CN.site.lightreg.setState(G)},y=function(G){if(G!=="0"){w.find(".offer-form").addClass("show");s=true}else{w.find(".offer-form").removeClass("show");s=false}},t=function(H){var I={},G=H;if(!D(G)){I.data=f(G);I.action=i;CN.userservice.makeCall(I)}return false};return{show:B,AUTH_SUCCESS:"auth_success"}}(jQuery));CN.foundry=(function(){var b={loading:function(c){CN.debug.info("CN Foundry Request For Fonts")},fontloading:function(c,d){CN.debug.info("CN Foundry Loading Font",[c])},fontactive:function(c,d){CN.debug.info("CN Foundry Activated Font",[c])},fontinactive:function(c,d){CN.debug.warn("CN Foundry Inactive Font",[c])},active:function(){CN.debug.info("CN Foundry Successfully Loaded All Fonts")},inactive:function(){setTimeout(function(){jQuery("html").removeClass("wf-inactive").addClass("wf-active")},2000);CN.debug.warn("CN Foundry :: Some Fonts May Not Have Loaed")}},a={};return{init:function(k,i){var f,j,g,d=(!!i)?i:{},c=function(e,l){return function(){e();l()}};if(!!k&&!!k.load){a=k}else{CN.debug.error("CN Foundry :: Font loader is undefined or contains no load() function");return false}for(g in i){if(i.hasOwnProperty(g)){if(typeof b[g]==="function"){f=b[g];j=i[g];b[g]=c(f,j)}else{b[g]=i[g]}}}try{a.load(b);CN.debug.info("CN Foundry :: Request Loaded")}catch(h){CN.debug.error("CN Foundry :: Exception Caught While Sending Request :: "+h.message)}}}}());